import { useEffect, useRef, useState } from "react";

import { vibrateDuration } from "../../assets/GlobalVariables";

import styles from "./HomeTopBar.module.scss";

type HomeTopBarProps = {
    appName: string;
    avatarUrl: string;
    userName: string;
    userEmail: string;
    path: {
        [key: string]: {
            icon: string;
            path: string;
        };
    };
};
export type { HomeTopBarProps };

export default function HomeTopBar(props: HomeTopBarProps) {
    const userName = props.userName ? props.userName : "Lorem Ipsum";
    const userEmail = props.userEmail ? props.userEmail : "example@example.com";

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
    if (props.avatarUrl) {
        avatarElement = <img src={props.avatarUrl} />;
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
                                    } ${
                                        props.avatarUrl
                                            ? ""
                                            : styles["avatar-fa"]
                                    }`}
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
                                {Object.entries(props.path).map(
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
                                                        className={`fa-duotone ${value.icon} fa-2xl`}
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

            <div className={styles["app-name-container"]}>{props.appName}</div>

            <div className={styles["avatar-container"]}>{avatarElement}</div>
        </div>
    );
}
