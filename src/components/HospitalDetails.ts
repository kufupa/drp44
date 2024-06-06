export interface HospitalDetails {
    hospitalName: string;
    waitTime: number;
    distance: number;
    directions: string;
    ticked: boolean;
    mapsFunc?: (hospitalName: string, directions: string) => void;
}