export interface Hospital {
  id: string;
  name: string;
  patientCounts: number[];
  throughput: number;
  maxCapacity: number;
}

export interface Patient {
  id: string;
  hospitalId: string;
  diagnosis: string;
  symptoms: string[];
  timeRequested: Date;
  eta: Date;
}
