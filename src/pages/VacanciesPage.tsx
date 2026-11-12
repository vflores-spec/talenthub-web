import { useEffect, useState } from "react";
import "./VacanciesPage.css";
import { SearchBar } from "../components/SearchBar";
import { VacancyList } from "../components/VacancyList";
import type { Vacancy } from "../types/vacancy";
import { getVacancies } from "../services/vacancyService";

export const VacanciesPage = () => {
  //El estado del texto que el usuario escribió
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  //hook useEffect: ejecuta código DESPUÉS de dibujar la pantalla.
  useEffect(() => {
    const loadVacancies = async () => {
      try {
        setVacancies(await getVacancies());
      } catch {
        setErrorMessage(
          "No se logró cargar las vacantes. Intente de nuevo más tarde",
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadVacancies();
  }, []);

  //Limpiar el texto: sin espacios y en minúscula
  const normalizedTerm = searchTerm.trim().toLowerCase();

  //Función de la lista filtrada
  const filteredVacancies = vacancies.filter((vacancy) =>
    `${vacancy.title} ${vacancy.companyName}`
      .toLowerCase()
      .includes(normalizedTerm),
  );

  //Función - Decide que mostrar debajo del buscador.
  const renderContent = () => {
    if(isLoading){
        return <p className="vacancies-page-status">Cargando vacantes....</p>
    }
    if(errorMessage){
        return (
            <p className="vacancies-page-status vacancies-page-error" role="alert">
                {errorMessage}
            </p>
        );
    }
    if(filteredVacancies.length === 0){
        return <p className="vacancies-page-empty">No se encontraron vacantes con ese término.</p>
    }
    return <VacancyList vacancies={filteredVacancies}/>
  };

  return (
    <section>
      <div className="vacancies-page-header">
        <h2 className="vacancies-page-title">Vacantes</h2>
        {!isLoading && !errorMessage && (
            <p className="vacancies-page-count">
                {filteredVacancies.length}
                {filteredVacancies.length === 1 ? "resultado" : "resultados"}
            </p>
        )}
      </div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
        {renderContent()}
    </section>
  );
};
