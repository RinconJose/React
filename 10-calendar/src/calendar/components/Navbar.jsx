

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-4 px-4 justify-content-between">
            <span className="navbar-brand d-flex align-self-center p-0">
                <i className="fas fa-calendar-alt m-auto"></i>
                &nbsp;
                <span className="m-auto">José</span>
            </span>
            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-atl"></i>
                <span>Salir</span>
            </button>
        </nav>
    )
}
