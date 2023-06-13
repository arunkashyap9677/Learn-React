import './header.css';
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./logo512.png" width="40px" height="40px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;