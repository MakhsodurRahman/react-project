import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId);

  const  handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>{postDetails.title}</h2>
            <button onClick={handleGoBack}>Go to back</button>
        </div>
    );
};

export default PostDetails;