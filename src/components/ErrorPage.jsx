import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate()
    const backToHome =()=>{
        navigate('/')
    }

    return (
        <div className="text-center">
            <h2 className="text-7xl">Page not found</h2>
            <p className="text-7xl" >Status: 404</p>
            <button onClick={backToHome} className="bg-[#8329e9] px-7 py-3 font-bold text-white rounded-lg"><i className="fa-solid fa-arrow-left-long mr-3"></i>Go Back</button>
        </div>
    );
};

export default ErrorPage;