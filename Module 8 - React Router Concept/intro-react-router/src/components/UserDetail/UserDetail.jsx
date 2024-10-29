import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    const navigate = useNavigate(); 
    const goBack = () =>{
        navigate(-1);
    }

    //Params
    const {userId} = useParams();

    console.log(userId)

    const {name , website} = user; 
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website : {website}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default UserDetail;