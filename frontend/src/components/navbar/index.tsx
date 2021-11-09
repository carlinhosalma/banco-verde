import logo from "assets/img/bancoverde.svg";
const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                   
                    <h1 className="text-primary ">  <img src={logo} alt="DevSuperior" width="80"className="m-3" /> 
                    BANCO VERDE <br /></h1>
                </nav>
            </div>
        </div>
    );
}
export default NavBar;