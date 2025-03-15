import { Link } from "react-router-dom";

const User = ({user}) => {

    const userStyle = {
        border : '2px solid tomato',
        padding: '3px',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{user.name}</h2>
            <h3>{user.userName}</h3>
            <h3>{user.email}</h3>
            <Link to={`/user/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;