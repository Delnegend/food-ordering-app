import { useState } from "react";
import { useNavigate} from "react-router-dom";
import styles  from './FootBar.module.css'
export default function FootBar() {
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
        <nav className={styles.footbar}>
            <ul className={`${styles['icon-list']}`}>
                <li>
                    <i className="fa-solid fa-compass fa-2xl"  style={{color: "#FF7F50", cursor: 'default'}} />
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(0)}
                    >
                        <i className={`${styles['fa-solid']} ${activeIcon === 0 ? styles['active'] : ''} fa-solid fa-location-dot fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(1)}
                    >
                        <i className={`${styles['fa-solid']} ${activeIcon === 1 ? styles['active'] : ''} fa-solid fa-shopping-bag fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(2)}
                    >
                        <i className={`${styles['fa-solid']} ${activeIcon === 2 ? styles['active'] : ''} fa-solid fa-heart fa-2xl`}  />
                    </button>
                </li>
                <li>
                    <button
                     onClick={() => handleIconClick(3)}
                    >
                        <i className={`${styles['fa-solid']} ${activeIcon === 3 ? styles['active'] : ''} fa-solid fa-bell fa-2xl`}  />
                    </button>
                </li>
            </ul>
            </nav>
    )
}