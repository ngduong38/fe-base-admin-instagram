import Navigation from "../navigation/navigation.js"
import MainSidebar from "../components/_common/mainSidebar/mainSidebar.js"
import MainFooter from "../components/_common/footer/footer.js"
import { Outlet } from "react-router-dom"

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
                </div>

            </div>
        </>
    )
}