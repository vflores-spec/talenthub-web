import type { Vacancy } from '../types/vacancy';
import './VacancyCard.css';

//rafc + TAB o ENTER

//interface para los props (propiedades): describir los datos que recibe el componente.
/*interface VacancyCardProps {
    title: string;
    company: string;
    modality: string;
    salary: number;
}*/

interface VacancyCardProps{
    vacancy: Vacancy;
}

export const VacancyCard = ({vacancy} : VacancyCardProps) => {
  return (
    <article className='vacancy-card'>
        <p className='vacancy-card-company'>{vacancy.company}</p>
        <h3 className='vacancy-card-title'>{vacancy.title}</h3>
        <div className='vacancy-card-footer'>
            <span className='vacancy-card-modality'>{vacancy.modality}</span>
            <span className='vacancy-card-salary'>{vacancy.salary} / mes</span>
        </div>
    </article>
  );
};
