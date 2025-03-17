import React from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header />
            
            {navigation.state === "loading" ? (
                <div className="loader-container">
                    <ClipLoader color="#36D7B7" size={50} />
                </div>
            ) : (
                <Outlet />
            )}

            <Footer />
        </div>
    );
};

export default Home;