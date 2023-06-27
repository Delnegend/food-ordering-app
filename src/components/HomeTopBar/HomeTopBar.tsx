import { useState, useRef, useEffect } from "react";
import styles from "./HomeTopBar.module.scss";

type HomeTopBarProps = {
    appName: string;
    avatarUrl: string;
    userName: string;
    userEmail: string;
};
export type { HomeTopBarProps };

export default function HomeTopBar({
    appName,
    avatarUrl,
    userName,
    userEmail,
}: HomeTopBarProps) {
    const subMenus = {
        "My Orders": "fa-rectangle-list",
        "My Profile": "fa-user",
        "Delivery Address": "fa-location-dot",
        "Payment Methods": "fa-wallet",
        "Contact Us": "fa-envelope",
    };

    userName = userName ? userName : "Lorem Ipsum";
    userEmail = userEmail ? userEmail : "example@example.com";

    const [isHamburgerMenuActive, setActiveHamburger] = useState(false);
    const hamMenuRef = useRef<HTMLDivElement>(null);
    const hamMenuInnerRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        const hamMenuExists: boolean = hamMenuRef.current !== null;
        const hamMenuInnerExists: boolean = hamMenuInnerRef.current !== null;
        const target: HTMLElement = event.target as HTMLElement;
        const clickOutsideHamMenuInner =
            hamMenuExists &&
            hamMenuInnerExists &&
            hamMenuRef.current?.contains(target) &&
            !hamMenuInnerRef.current?.contains(target);
        if (clickOutsideHamMenuInner) {
            setActiveHamburger(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, [hamMenuRef, hamMenuInnerRef]);

    const isHamMenuActiveClass = isHamburgerMenuActive
        ? styles.active
        : styles.inactive;

    let avatarElement = <i className="fa-solid fa-user fa-2xl"></i>;
    if (avatarUrl) {
        avatarElement = <img src={avatarUrl} />;
    }

    let avatarHamFAClass = styles["avatar-fa"];
    if (avatarUrl) {
        avatarHamFAClass = "";
    }

    return (
        <div className={styles.container}>
            <div className={styles["hamburger__container"]}>
                <button
                    className={styles["hamburger__button"]}
                    onClick={() => setActiveHamburger(!isHamburgerMenuActive)}
                >
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </button>

                <nav className={isHamMenuActiveClass} ref={hamMenuRef}>
                    <div
                        className={styles["hamburger-inner__container"]}
                        ref={hamMenuInnerRef}
                    >
                        <div className={styles["hamburger-top__container"]}>
                            <div
                                className={styles["hamburger-info__container"]}
                            >
                                <span
                                    className={`${styles["hamburger-info__avatar"]} ${avatarHamFAClass}`}
                                >
                                    {avatarElement}
                                </span>
                                <span
                                    className={
                                        styles["hamburger-info__username"]
                                    }
                                >
                                    {userName}
                                </span>
                                <span
                                    className={styles["hamburger-info__email"]}
                                >
                                    {userEmail}
                                </span>
                            </div>

                            <ul className={`${styles["tab-list"]}`}>
                                {Object.entries(subMenus).map(
                                    ([key, value]) => {
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
                                    }
                                )}
                            </ul>
                        </div>

                        <button className={`${styles["log-out-button"]}`}>
                            <i
                                className={`${styles["log-out-icon"]} fa-regular fa-power-off fa-xl`}
                            ></i>
                            <span className={`${styles["log-out-label"]}`}>
                                Log Out
                            </span>
                        </button>
                    </div>
                </nav>
            </div>

            <div className={styles.app_name_container}>{appName}</div>

            <div className={styles.avatar_container}>{avatarElement}</div>
        </div>
    );
}
