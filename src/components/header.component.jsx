import '../styles/style.css';
import bookicon from "../assets/Book.png"

//Header Component Function 
let Header = () => {
    return <div id="container">
        <a href="/" className="HeaderLink">
            <div id="logoContainer">
                <h3>BuyBooks</h3>
                <img src={bookicon} alt="Logo" height={40} width={40} />
            </div>
        </a>
    </div>

}

export default Header;
