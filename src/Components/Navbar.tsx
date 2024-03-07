import { Link } from 'react-router-dom'

function Navbar() {
    return <section>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    {/* replace brand image with Logo and update hamburger to shows menu items. */}
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">
                        Home
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to='/exercises' className="navbar-link">
                            Exercises
                        </Link>
                        <div className="navbar-dropdown">
                            <Link to='/exercises/' className="navbar-item">
                                Back
                            </Link>
                            <Link to='/exercises/' className="navbar-item">
                                Cardio
                            </Link>
                        </div>
                    </div>
                    <Link to='/videolibrary' className="navbar-item">
                        Video Library
                    </Link>
                </div>
            </div>
        </nav>
        <hr className="navbar-divider" />
    </section>

}

export default Navbar