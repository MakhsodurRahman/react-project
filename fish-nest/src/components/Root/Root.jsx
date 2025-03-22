import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto bg-gray-100">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;