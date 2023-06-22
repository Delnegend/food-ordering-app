import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FootBar.module.css";
import { RouteList } from "../../assets/GlobalTypes";

export default function FootBar(props: { routes: RouteList }) {
    const navigate = useNavigate();
    const buttonData: RouteList = props.routes;
    const [currentPageIdx, setActiveIdx]: [number, (index: number) => void] =
        useState<number>(1);

    const handleIconClick = (pageIdx: number) => {
        setActiveIdx(pageIdx);
        navigate(buttonData[pageIdx].path);
    };

    return (
        <nav className={styles.footbar}>
            <ul className={styles["icon-list"]}>
                {buttonData.map((button, pageIdx) => (
                    <li key={pageIdx}>
                        <button onClick={() => handleIconClick(pageIdx)}>
                            <i
                                className={`${styles["fa-solid"]} ${
                                    currentPageIdx === pageIdx
                                        ? styles["active"]
                                        : ""
                                } fa-solid fa-2xl ${button.icon}`}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
