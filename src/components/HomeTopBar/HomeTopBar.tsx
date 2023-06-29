import { useEffect, useRef, useState } from "react";

import { vibrateDuration } from "../../assets/GlobalVariables";

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
            navigator.vibrate(vibrateDuration);
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

    return (
        <div className={styles.container}>
            <div className={styles["hamburger-container"]}>
                <button
                    className={styles["hamburger-button"]}
                    onClick={() => {
                        setActiveHamburger(!isHamburgerMenuActive);
                        navigator.vibrate(vibrateDuration);
                    }}
                >
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </button>

                <nav className={isHamMenuActiveClass} ref={hamMenuRef}>
                    <div
                        className={styles["hamburger-inner-container"]}
                        ref={hamMenuInnerRef}
                    >
                        <div className={styles["hamburger-top-container"]}>
                            <div className={styles["hamburger-info-container"]}>
                                <span
                                    className={`${
                                        styles["hamburger-info-avatar"]
                                    } ${avatarUrl ? "" : styles["avatar-fa"]}`}
                                >
                                    {avatarElement}
                                </span>
                                <span
                                    className={
                                        styles["hamburger-info-username"]
                                    }
                                >
                                    {userName}
                                </span>
                                <span
                                    className={styles["hamburger-info-email"]}
                                >
                                    {userEmail}
                                </span>
                            </div>

                            <ul className={`${styles["tab-list"]}`}>
                                {Object.entries(subMenus).map(
                                    ([key, value]) => {
                                        return (
                                            <li key={key}>
                                                <button
                                                    onClick={() =>
                                                        navigator.vibrate(
                                                            vibrateDuration
                                                        )
                                                    }
                                                >
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

                        <button
                            className={`${styles["log-out-button"]}`}
                            onClick={() => navigator.vibrate(vibrateDuration)}
                        >
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

            <div className={styles["app-name-container"]}>{appName}</div>

            <div className={styles["avatar-container"]}>{avatarElement}</div>
        </div>
    );
}
