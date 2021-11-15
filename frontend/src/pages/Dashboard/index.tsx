import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

const Dashboard = () => {
    return (
        <>
            
            <NavBar />
            <div className="container">
                <h1 className="text-primary">Projetos de Crédito de Carbono</h1>
                <div className="row py-3 px-3">

                    <div className="col-sm-6">
                        <h5 className="text-secondary "> Projetos Macros</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6 ">
                        <h5 className="text-secondary "> Florestas</h5>
                        <DonutChart />
                    </div>

                </div>

                <h5 className="text-secondary "> Portos Sustentáveis </h5>
                <DataTable />
                



            </div>
            <Footer />
        </>
    );
}
export default Dashboard;