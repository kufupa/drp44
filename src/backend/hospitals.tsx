import { db } from "./db";
import {Patient, Hospital} from "./data-models";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import {doc, getDoc, updateDoc, setDoc } from "firebase/firestore";


async function getNextHospitalId(): Promise<number> {
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

async function registerHospitalInterest(
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



// Get all hospitals
getDocs(collection(db, 'hospitals'))
  .then((hospitalsSnapshot) => {
    const hospitals: Hospital[] = hospitalsSnapshot.docs.map(doc => doc.data() as Hospital);
    console.log('Hospitals:', hospitals);
  })
  .catch((error) => {
    console.error('Error getting hospitals:', error);
  });

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