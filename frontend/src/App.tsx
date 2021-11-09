import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard de Gestão</h1>
        <div className="row py-3 px-3">

          <div className="col-sm-6">
            <h5 className="text-secondary "> Parceiros</h5>
            <BarChart />
          </div>
          <div className="col-sm-6 ">
          <h5 className="text-secondary "> Modalidades</h5>
            <DonutChart />
          </div>

        </div>

        <h2 className="text-primary">Projetos de Crédito de Carbono</h2>
        <DataTable />

      </div>
      <Footer />
    </>
  );
}

export default App;
