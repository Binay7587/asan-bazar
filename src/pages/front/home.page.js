import { Container } from "react-bootstrap";

import HomePageBanner from "../../components/front/home/banner.component";
import CategoryListSection from "../../components/front/home/category-list.component";
import LatestProductsComponent from "../../components/front/home/latest-products.component";

const HomePage = () => {
    return (<>
     <HomePageBanner />

     <Container className="my-5">
        <CategoryListSection />

        <LatestProductsComponent />
     </Container>
        
    </>)
}

export default HomePage