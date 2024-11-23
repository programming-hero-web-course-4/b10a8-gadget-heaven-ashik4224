// import { Outlet } from "react-router-dom";
// import NavBar from "./NavBar";
// import Footer from "./Footer";

// const Root = () => {
//     return (
//         <div className="min-h-[calc(100vh-232px)] container mx-auto ">
//             <NavBar></NavBar>
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Root;


import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Root = () => {
    
    

    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] container mx-auto">
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;