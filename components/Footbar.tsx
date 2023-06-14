import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faLocationDot, faBagShopping, faHeart, faBell } from "@fortawesome/free-solid-svg-icons";
import '../styles/Footbar.css'
export default function Footbar() {
    let navigate = useNavigate();
    const [activeIcon, setActiveIcon] = useState<number>(0);
    const handleIconClick = (index: number) => {
        setActiveIcon(index);
        navigate(getPageName(index)); 
    };
    const getPageName = (index: number) => {
        switch (index) {
          case 0:
            return '/';
          case 1:
            return '/';
          case 2:
            return '/';
          case 3:
            return '/myorders';
          default:
            return '';
        }
    };
    return(
        <nav className="footbar">
            <ul className="icon-list">
                <li>
                    <FontAwesomeIcon icon={faCompass}  style={{color: "#FF7F50",}} size="2xl" />
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(0)}
                    >
                        <FontAwesomeIcon icon={faLocationDot} className={`icon ${activeIcon === 0 ? 'active' : ''}`} size="2xl"/>
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(1)}
                    >
                        <FontAwesomeIcon icon={faBagShopping} className={`icon ${activeIcon === 1 ? 'active' : ''}`} size="2xl" />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(2)}
                    >
                        <FontAwesomeIcon icon={faHeart} className={`icon ${activeIcon === 2 ? 'active' : ''}`} size="2xl" />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(3)}
                    >
                    <FontAwesomeIcon icon={faBell} className={`icon ${activeIcon === 3 ? 'active' : ''}`} size="2xl" />
                    </button>
                </li>
            </ul>
            </nav>
    )
}