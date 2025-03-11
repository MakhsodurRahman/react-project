import banner from '/src/assets/images/bg-shadow.png';
import additionalImage from '/src/assets/images/banner-main.png';

const Banner = ({handleSetCoin}) => {
    return (
        <div className='relative'>
           
            <img src={banner} alt="Banner" className="w-full h-auto" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-slate-700">
                
                <img src={additionalImage} alt="Additional" className="mb-4 w-24 h-24 mx-auto" />

                <h1 className="text-3xl font-bold mb-2">Your Heading Here</h1>
                <p className="mb-4">This is a paragraph that can describe something related to the banner image.</p>
                <button onClick={()=> handleSetCoin(999999)} className="bg-yellow-400 text-black py-2 px-4 rounded-xl">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;
