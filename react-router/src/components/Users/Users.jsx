import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
    const userData = useLoaderData();
    
    return (
        <div>
            <h3>This is our users</h3>
            <div className="showUser">
                {
                    userData.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;