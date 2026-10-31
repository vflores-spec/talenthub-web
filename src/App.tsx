//rafc + TAB o ENTER
import { Header } from "./components/Header";
import { VacancyList } from "./components/VacancyList";
import { vacancies } from "./data/vacancies";

const App = () => {
  return (
    <div>
      <Header/>
      <main className="container">
        <h2>Vacantes</h2>
        <VacancyList vacancies={vacancies}/>
      </main>
    </div>
  )
}

export default App;
