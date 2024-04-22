import "./footer.css"
import rlogo from "../rlogo.png"
const Footer = () =>{

    return(
        <div className="footer">
            <div className="foot">
                <div> <img src={rlogo}  alt = "Gobbart"/></div>
                <div><h5>VIEW BROCHURE</h5></div>
                <div><h5>CALL</h5></div>
                <div><h5>WRITE</h5><h6>info@gobbart.com</h6><h6> hr@gobbart.com</h6></div>
                <div><h5>VISIT</h5><h6>BUCHAREST, ROMANIA</h6></div>
            </div>
            <div className="last">
            <div className="big-line">&nbsp;</div>
            <div><h6> © GOBBART 2024. ALL RIGHTS RESERVED | PRIVACY POLICY - EN - RO | COOKIE SETTINGS</h6></div>
            </div>
        </div>
    );
};
export default Footer;