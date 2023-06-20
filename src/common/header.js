import './header.css';
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={require('../images/logo192.png')}/>
                <h3>React Facts</h3>
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