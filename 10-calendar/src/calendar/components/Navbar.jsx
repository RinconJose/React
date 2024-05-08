import { useAuthStore } from '../../hooks'


export const Navbar = () => {

    const {startLogout, user} = useAuthStore();

    return (
        <nav className="navbar navbar-dark bg-dark mb-4 px-4 justify-content-between">
            <span className="navbar-brand d-flex align-self-center p-0">
                <i className="fas fa-calendar-alt m-auto"></i>
                &nbsp;
                <span className="m-auto">{user.name}</span>
            </span>
            <button
                className="btn btn-outline-danger"
                onClick={startLogout}
            >
                <i className="fas fa-sign-out-alt"></i>
                &nbsp;
                <span>Salir</span>
            </button>
        </nav>
    )
}
