import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id,title,body} = post;



    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    const postStyle = {
        border : '2px solid tomato',
        padding: '3px',
        borderRadius : '20px'
    }
    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <Link to={`/post/${id}`}>See details</Link>
            <button onClick={handleShowDetails}>Click me</button>
        </div>
    );
};

export default Post;