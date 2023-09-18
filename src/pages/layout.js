import Navigation from "../navigation/navigation.js"
import MainSidebar from "../components/_common/mainSidebar/mainSidebar.js"
import MainFooter from "../components/_common/footer/footer.js"
import { Outlet} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Layout() {

    return (
        <>
            <div id="main"  className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    <Navigation/>
                    <MainSidebar/>
                    <div className="content-wrapper">
                       <Outlet/>
                    </div>
                    <MainFooter/>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        style={{ width: "400px" }}
                    />
                </div>

            </div>
        </>
    )
}