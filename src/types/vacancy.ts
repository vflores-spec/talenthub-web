//Describe como es una vacante.
export interface Vacancy {
    id: number;
    title: string;
    companyId: string;
    companyName: string;
    modality: string;
    salary: number;
}