
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetailsData = useLoaderData();
    return (
        <div>
            <h3>User name : {userDetailsData.name}</h3>
            <h4>email : {userDetailsData.email}</h4>
        </div>
    );
};

export default UserDetails;