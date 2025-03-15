import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    return (
        <div>
            <h2>{postDetails.title}</h2>
        </div>
    );
};

export default PostDetails;