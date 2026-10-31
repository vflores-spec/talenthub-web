import './VacancyCard.css';

//rafc + TAB o ENTER

//interface para los props (propiedades): describir los datos que recibe el componente.
interface VacancyCardProps {
    title: string;
    company: string;
    modality: string;
    salary: number;
}


export const VacancyCard = ({title, company, modality, salary} : VacancyCardProps) => {
  return (
    <article className='vacancy-card'>
        <h2>{title}</h2>
        <p>{company}</p>
        <p>Modalidad: {modality}</p>
        <p>Salario: {salary}</p>
    </article>
  );
};
