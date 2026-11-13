import type { Vacancy } from "../types/vacancy";
import { apiClient } from "./apiClient";

export const getVacancies = async (): Promise<Vacancy[]> =>{
    const response = await apiClient.get<Vacancy[]>('/vacancies');
    return response.data;
}


