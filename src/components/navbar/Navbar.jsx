import { BrowserRouter} from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/bg/logo.png";

const Navbar = () => {

  const menus = [
    {title: 'Home', url: 'home'},
    {title: 'Reason', url: 'most'},
    {title: 'View Point', url: 'viewpoint'},
    {title: 'Book Now', url: ''},
  ]

  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center px-[140px] py-5">
        <a href=""> <img src={logo} alt="logo" /></a>

        <div className="bg-[#37b0c094] bg-opacity-70% py-2 px-[80px] rounded-[40px]">
          <ul className="flex text-white text-[13px] font-bold uppercase gap-[120px]">
            {
              menus.map((menu, i) => (
                <li key={i}>
                  <Link
                    to={menu.url}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={500}
                    className="hover:border-b-2 border-white transform duration-150 cursor-pointer">
                    {menu.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;