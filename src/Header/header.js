import logo from '../logo.jpg'
import './header.css'
const Header = () =>{


    return(
        <div className='head'>
        <div className='logo'>
            <img src={logo}  alt = "Gobbart"/>
            <div className='grey'></div>
        </div>  
        <div class="menu-icon">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
        <div className='head-list'>
            <ul>
                <li className='active'>HOME</li>
                <li>WHO WE ARE</li>
                <li>WHAT WE DO</li>
                <li>SUSTAINABILITY & CSR</li>
                <li>MEDIA ROOM</li>
                <li>CAREERS</li>
                <li>CONTACT</li>
            </ul>
        </div>
        </div>
    );
};
export default Header;