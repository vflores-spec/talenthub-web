import type { Vacancy } from "../types/vacancy";
import { VacancyCard } from "./VacancyCard";
import './VacancyList.css';

//Definr las propiedades del componente
interface VacancyListProps{
    vacancies: Vacancy[];
}

export const VacancyList = ({vacancies}: VacancyListProps) => {
  return (
    <div className="vacancy-list">
        {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy}/>
        ))}
    </div>
  )
}


