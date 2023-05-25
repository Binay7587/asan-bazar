import { Row } from "react-bootstrap";
import { FaSitemap, FaShoppingBag, FaUsers, FaPaperclip } from "react-icons/fa";
import AdminBreadCrumb from "../../components/admin/breadcrumb.component";
import CountWidget from "../../components/admin/count-widget.component";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import productService from "../../services/product.service";
import brandService from "../../services/brand.service";
import categoryService from "../../services/category.service";

const AdminDashboard = () => {
    const [count, setCount] = useState({
        userCount: 0,
        categoryCount: 0,
        brandCount: 0,
        productCount: 0,
    });

    const getCount = async () => {
        setCount({
            userCount: (await userService.getUserCount()).result,
            categoryCount: (await categoryService.getCategoryCount()).result,
            brandCount: (await brandService.getBrandCount()).result,
            productCount: (await productService.getProductCount()).result,
        });
    };

    useEffect(() => {
        getCount();
    }, []);

    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <AdminBreadCrumb path={[
                { title: "Dashboard", url: "/admin" },
                { title: "Overview" }
            ]} />
            <Row className="mb-4">
                <CountWidget count={count.userCount} color={'primary'} icon={<FaUsers />} title={"Users"} />
                <CountWidget count={count.brandCount} color={'danger'} icon={<FaPaperclip />} title={"Brands"} />
                <CountWidget count={count.categoryCount} color={'success'} icon={<FaSitemap />} title={"Categories"} />
                <CountWidget count={count.productCount} color={'warning'} icon={<FaShoppingBag />} title={"Products"} />
            </Row>
        </div>
    </>)
};

export default AdminDashboard
