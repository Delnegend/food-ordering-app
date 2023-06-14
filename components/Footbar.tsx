import { useState } from "react";
import { useNavigate} from "react-router-dom";
import '../styles/Footbar.css'
export default function Footbar() {
    let navigate = useNavigate();
    const [activeIcon, setActiveIcon] = useState<number>(1);
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
                    <i className={`fa-solid ${'active'} fa-compass fa-2xl`}  />
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(0)}
                    >
                        <i className={`fa-solid ${activeIcon === 0 ? 'active' : ''} fa-location-dot fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(1)}
                    >
                        <i className={`fa-solid ${activeIcon === 1 ? 'active' : ''} fa-bag-shopping fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(2)}
                    >
                        <i className={`fa-solid ${activeIcon === 2 ? 'active' : ''} fa-heart fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(3)}
                    >
                        <i className={`fa-solid ${activeIcon === 3 ? 'active' : ''} fa-bell fa-2xl`} />
                    </button>
                </li>
            </ul>
            </nav>
    )
}