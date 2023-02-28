import "./header.css";
import Logo from "../Images/Logo.png";

function Header() {
    
    return (
        <header id="header">
            <div className={"container"}>
            <div className={"inner"}>
            <div className={"logo"}>
            <img src={Logo} alt={'3dsahpes'}/>
            </div>
         <nav className="Navigation">
        <ul>
            <li className={"active"}>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">Portfolio</a>
            </li>
            <li>
                <a href="/">About me</a>
            </li>
            <li>    
                <a href="/">Testimonials</a>
            </li>
           
        </ul>
        </nav> 
        <button id="button">Contact Me</button>
        </div>
        </div>
        </header> 
    );
    
}
export default Header;