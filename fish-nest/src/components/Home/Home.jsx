import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;