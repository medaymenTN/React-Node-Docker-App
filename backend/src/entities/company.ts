import SPECIALTY from "./enum";

export class Company {
    id!: number;
    name!: string;
    logo!: string;
    speciality!: SPECIALTY;
    city!: string;
}