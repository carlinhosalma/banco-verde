import logo from "assets/img/bancoverde.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">

                    <h2 className="text-primary p-2">
                        <Link to="/" >
                            <img src={logo}
                                height="50"
                                className=" d-inline-block "
                                alt="Banco Verde"
                            />
                        </Link>
                        <p className="d-inline-block">BANCO VERDE </p>

                    </h2>
                </nav>

            </div>
        </div>
    );
}
export default NavBar;