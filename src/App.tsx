//rafc + TAB o ENTER
import { VacancyCard } from "./components/VacancyCard";

const App = () => {
  return (
    <main>
      <h1>TalentHub</h1>
      <p>Paltaforma de gestión de vacantes y postulaciones</p>
      <VacancyCard title="Desarrollador Backend Jr" company="Tech Andes" modality="remoto" salary={800}/>
      <VacancyCard title="Analista de Datos" company="DataSur" modality="presencial" salary={1220}/>
    </main>
  )
}

export default App;
