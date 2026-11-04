import { useState } from "react"
import './VacanciesPage.css';
import { SearchBar } from "../components/SearchBar";
import { vacancies } from "../data/vacancies";
import { VacancyList } from "../components/VacancyList";

export const VacanciesPage = () => {

    //El estado del texto que el usuario escribió
    const [searchTerm, setSearchTerm] = useState<string>("");

    //Limpiar el texto: sin espacios y en minúscula
    const normalizedTerm = searchTerm.trim().toLowerCase();

    //Función de la lista filtrada
    const filteredVacancies = vacancies.filter((vacancy) => 
        `${vacancy.title} ${vacancy.company}`.toLowerCase().includes(normalizedTerm),
    );

  return (
    <section>
        <div className="vacancies-page-header">
            <h2 className="vacancies-page-title">Vacantes</h2>
            <p className="vacancies-page-count">
                {filteredVacancies.length} {filteredVacancies.length === 1 ? 'resultado' : 'resultados'}
            </p>
        </div>
        <SearchBar value={searchTerm} onChange={setSearchTerm}/>
        {filteredVacancies.length > 0 ? (
            <VacancyList vacancies={filteredVacancies}/>
        ) : (
            <p className="vacancies-page-empty">No se encontraron vacantes con ese término</p>
        )}
    </section>
  )
}
