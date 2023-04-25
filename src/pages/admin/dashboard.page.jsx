import { Row } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import AdminBreadCrumb from "../../components/admin/breadcrumb.component";
import CountWidget from "../../components/admin/count-widget.component";

const AdminDashboard = () => {
    return (<>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <AdminBreadCrumb path={[
                { title: "Dashboard", url: "/admin" },
                { title: "Overview" }
            ]} />
            <Row className="mb-4">
                <CountWidget count={'1,23,00,000'} color={'primary'} icon={<FaAddressBook />} title={"Users"} />
                <CountWidget count={'1,23,00,000'} color={'danger'} icon={<FaAddressBook />} title={"Users"} />
                <CountWidget count={'1,23,00,000'} color={'success'} icon={<FaAddressBook />} title={"Users"} />
                <CountWidget count={'1,23,00,000'} color={'warning'} icon={<FaAddressBook />} title={"Users"} />
            </Row>
            <div className="card mb-4">
                <div className="card-body">
                    <p className="mb-0">
                        This page is an example of using static navigation. By removing the
                        <code>.sb-nav-fixed</code>
                        className from the
                        <code>body</code>
                        , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.
                    </p>
                </div>
            </div>
        </div>
    </>)
};

export default AdminDashboard