import "bootstrap/dist/css/bootstrap.min.css";

import HomeMenu from "../home/components/menu.component";
import { Outlet } from "react-router-dom";
import FooterComponent from "../home/components/footer.component";

const HomePageLayout = () => {
    return (<>
        <HomeMenu />

        <Outlet />

        <FooterComponent />
    </>);
}

export default HomePageLayout;