import { db } from "./db";
import {Patient, Hospital} from "./data-models";
import { collection, addDoc, getDocs, where, query, getFirestore } from "firebase/firestore";
import {doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { HospitalDetails } from "../types/HospitalDetails";


export async function getNextHospitalId(): Promise<number> {
  const counterRef = doc(db, "counters", "hospitalId");

  try {
    const counterDoc = await getDoc(counterRef);
    if (!counterDoc.exists()) {
      await setDoc(counterRef, { count: 1 });
      return 1;
    } else {
      let counter = counterDoc.data().count as number;
      // Increment the counter
      counter++;
  
      // Update the counter document
      await updateDoc(counterRef, { count: counter });
      return counter;
    }
  } catch (error) {
    console.error("Error getting or updating counter:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
}

export async function registerHospitalInterest(
  receptionistName: string,
  email: string,
  hospitalName: string
): Promise<void> {
  try {
    const newInterest = {
      receptionistName,
      email,
      hospitalName,
      timestamp: new Date(),
    };

    await addDoc(collection(db, "hospitalInterests"), newInterest);
    const l1 = 51.49921390992211 + Math.random()/20;
    const l2 = -0.11885373048485628  + Math.random()/20;
    await addNewHospitalDetails({
      hospitalName: hospitalName,
      waitTime: Math.floor(Math.random() * 8)/2,
      distance: Math.floor(Math.random() * 16)/4,
      directions: l1 + ', ' + l2,
      ticked: false
    });
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling code
  }
}

export async function addNewHospitalDetails(
  newHospitalD:  HospitalDetails
): Promise<void> {
  try {
    const dbSnapshot = getFirestore();
    const hospitalRef = collection(dbSnapshot, "hospitalDetails");
    const querySnapshot = await getDocs(
      query(hospitalRef, where("hospitalName", "==", newHospitalD.hospitalName))
    );

    if (querySnapshot.empty) {
      // Hospital name not found, add the new hospital details
      await addDoc(hospitalRef, newHospitalD);
    } else {
      // Hospital name already exists, handle the duplicate entry
      console.warn(
        `Hospital with name "${newHospitalD.hospitalName}" already exists.`
      );
    }
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling code
  }
}

export async function getAllHospitalDetails(): Promise<HospitalDetails[]> {
  try {
    const hospitalsSnapshot = await getDocs(collection(db, "hospitalDetails"));

    const hospitalsDetails: HospitalDetails[] = hospitalsSnapshot.docs.map((doc) => {
      const data = doc.data() as HospitalDetails;
      return {
        id: doc.id,
        ...data,
      };
    });

    return hospitalsDetails;
  } catch (error) {
    throw error; // Re-throw the error to handle it in the calling code
  }
}


function getRandomPatientCount(): number {
  return Math.floor(Math.random() * (50));
}

// Add a new hospital with random patient counts
const newHospital: Hospital =  {
  id: '1',
  name: 'Hospital 1',
  patientCounts: [
    getRandomPatientCount(),
    getRandomPatientCount(),
    getRandomPatientCount(),
    getRandomPatientCount(),
    getRandomPatientCount(),
  ],
  throughput: 0.8,
  maxCapacity: 120,
  waitTime: Math.floor(Math.random() * (10)),
  distance: Math.floor(Math.random() * (10))
};

async function addNewHospital(
  newHospital: Hospital
  ) : Promise<void> {
  try {
    await addDoc(collection(db, 'hospitals'), newHospital)
  } catch(error) {
    console.log(error)
  }
}


// Add a new patient
const newPatient: Patient = {
  id: 'patient-1',
  hospitalId: 'hospital-1',
  diagnosis: 'diagnosis-1',
  symptoms: ['fever', 'cough'],
  timeRequested: new Date(),
  eta: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
};

// Add the new patient to Firestore
addDoc(collection(db, 'patients'), newPatient)
  .then(() => {
    console.log('Patient added successfully!');
  })
  .catch((error) => {
    console.error('Error adding patient:', error);
  });

// Get all patients for a specific hospital
const q = query(collection(db, 'patients'), where('hospitalId', '==', 'hospital-1'));
getDocs(q)
  .then((patientsSnapshot) => {
    const patients: Patient[] = patientsSnapshot.docs.map(doc => doc.data() as Patient);
    console.log('Patients:', patients);
  })
  .catch((error) => {
    console.error('Error getting patients:', error);
  });