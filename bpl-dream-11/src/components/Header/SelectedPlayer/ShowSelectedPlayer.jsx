import { MdDeleteForever } from "react-icons/md";

const ShowSelectedPlayer = ({selPlayer}) => {
    const {name,image_url,country,role,rating,price} = selPlayer;
    console.log(name)
    return (
        <div>
            <div className='flex justify-between items-center space-x-3 font-thin mt-5 mb-5 border border-gray-300 p-3 rounded-md'>
                <div className='flex space-x-3'>
                    <img className='h-14 w-13' src={image_url} alt="" />
                    <div>
                        <p>{name}</p>
                        <span>{rating}</span>
                    </div>
                </div>
                <div>
                    <button className="text-3xl"><MdDeleteForever></MdDeleteForever></button>
                </div>
            </div>
        </div>
    );
};

export default ShowSelectedPlayer;