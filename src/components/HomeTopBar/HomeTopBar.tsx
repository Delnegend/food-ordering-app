import { useState, useRef, useEffect } from "react";
import styles from "./HomeTopBar.module.scss";

type HomeTopBarProps = {
    appName: string;
    avatarUrl: string;
};
export type { HomeTopBarProps };

export default function HomeTopBar({ appName, avatarUrl }: HomeTopBarProps) {
    const [isHamburgerMenuActive, setActiveHamburger] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleHamburgerMenu = () => {
        setActiveHamburger(!isHamburgerMenuActive);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setActiveHamburger(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const subMenus = {
        "My Orders": "fa-rectangle-list",
        "My Profile": "fa-user",
        "Delivery Address": "fa-location-dot",
        "Payment Methods": "fa-wallet",
        "Contact Us": "fa-envelope",
        "Sign Out": "fa-sign-out",
    };

    let avatarElement = <i className="fa-solid fa-user fa-2xl"></i>;
    if (avatarUrl) {
        avatarElement = <img src={avatarUrl} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.hamburger_menu_container}>
                <button
                    className={styles.toggle_btn}
                    onClick={toggleHamburgerMenu}
                >
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </button>

                <nav
                    className={`${styles.hamburger_menu} ${
                        isHamburgerMenuActive ? styles.active : ""
                    }`}
                    ref={navRef}
                >
                    <ul className={`${styles["tab-list"]}`}>
                        <li>{avatarElement}</li>
                        <li>
                            <span className={styles.username}>User Name</span>
                        </li>
                        <li>
                            <span className={styles.email}>
                                username@gmail.com
                            </span>
                        </li>
                        {Object.entries(subMenus).map(([key, value]) => {
                            return (
                                <li key={key}>
                                    <button>
                                        <i
                                            className={`fa-duotone ${value} fa-2xl`}
                                        ></i>
                                        <span>{key}</span>
                                    </button>
                                </li>
                            );
                        })}
                        <li>
                            <button className={`${styles["log-out-button"]}`}>
                                <i
                                    className={`${styles["log-out-icon"]} fa-regular fa-power-off fa-xl`}
                                ></i>
                                <span className={`${styles["log-out"]}`}>
                                    {" "}
                                    Log Out{" "}
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.app_name_container}>
                <span>{appName}</span>
            </div>

            <div className={styles.avatar_container}>{avatarElement}</div>
        </div>
    );
}
