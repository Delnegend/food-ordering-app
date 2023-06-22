import { useState, useRef, useEffect } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const [activeNav, setActiveNav] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleNavBar = () => {
        setActiveNav(!activeNav);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setActiveNav(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div>
            <button className={styles.navbutton} onClick={toggleNavBar}>
                <i className="fa-solid fa-bars fa-2xl"></i>
            </button>
            <nav
                className={`${styles.navbar} ${activeNav ? styles.active : ""}`}
                ref={navRef}
            >
                <ul className={`${styles["tab-list"]}`}>
                    <li>
                        <img
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                            className={styles.avatar}
                        />
                    </li>
                    <li>
                        <span className={styles.username}>User Name</span>
                    </li>
                    <li>
                        <span className={styles.email}>username@gmail.com</span>
                    </li>
                    <li>
                        <button>
                            <i className="fa-duotone fa-rectangle-list fa-2xl"></i>
                            <span>My Orders</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-duotone fa-user fa-2xl"></i>
                            <span>My Profile</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-solid fa-location-dot fa-2xl"></i>
                            <span>Delivery Address</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-duotone fa-wallet fa-2xl"></i>
                            <span>Payment Methods</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-duotone fa-envelope fa-2xl"></i>
                            <span>Contact Us</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-duotone fa-gear fa-2xl"></i>
                            <span>Settings</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fa-solid fa-square-question fa-2xl"></i>
                            <span>Helps & FAQs</span>
                        </button>
                    </li>
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
    );
}
