//rafc + TAB o ENTER
import { Header } from "./components/Header";
import { VacanciesPage } from "./pages/VacanciesPage";

const App = () => {
  return (
    <div>
      <Header/>
      <main className="container">
        <VacanciesPage/>
      </main>
    </div>
  )
}

export default App;
