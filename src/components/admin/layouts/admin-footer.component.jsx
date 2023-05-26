import { NavLink } from "react-router-dom"

let date = new Date()

const AdminFooter = () => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Asan Bazar {date.getFullYear()}</div>
                    <div>
                        <NavLink to="/" className="text-muted">Privacy Policy</NavLink>
                        &middot;
                        <NavLink to="/" className="text-muted">Terms &amp; Conditions</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AdminFooter
