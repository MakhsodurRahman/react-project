import logo from '/src/assets/images/logo.png';

const Header = ({totalCoin}) => {
    return (
        <header className="flex items-center justify-between px-6 py-3 shadow-md mx-auto max-w-6xl">
            <div>
                <img src={logo} alt="Logo" className="h-12 w-auto"/>
            </div>
            <div className='flex items-center justify-between '>
                <nav className="flex space-x-6 text-gray-600 pr-3">
                    <a href="#" className="hover:text-black">Home</a>
                    <a href="#" className="hover:text-black">Fixture</a>
                    <a href="#" className="hover:text-black">Teams</a>
                    <a href="#" className="hover:text-black">Schedules</a>
                </nav>

                <div className="border-2 border-gray-300 px-2 py-1 rounded-xl flex items-center space-x-2">
                <span className="font-semibold">{totalCoin} Coin</span>
                <span>🪙</span>
            </div>
        </div>
        </header>
    );
};

export default Header;