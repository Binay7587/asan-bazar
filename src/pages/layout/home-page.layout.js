import "bootstrap/dist/css/bootstrap.min.css";

import HomeMenu from "../../components/home/layouts/menu.component";
import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/home/layouts/footer.component";

const HomePageLayout = () => {
    return (<>
        <HomeMenu />

        <Outlet />

        <FooterComponent />
    </>);
}

export default HomePageLayout;