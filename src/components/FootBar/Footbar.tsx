import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FootBar.module.scss";

type FootbarProps = {
    icon: string;
    path: string;
    page: JSX.Element;
}[];

export type { FootbarProps };

export default function FootBar(props: { pages: FootbarProps }) {
    const navigate = useNavigate();
    const buttonData: FootbarProps = props.pages;
    const [currentPageIdx, setActiveIdx]: [number, (index: number) => void] =
        useState<number>(0);

    const handleIconClick = (pageIdx: number) => {
        setActiveIdx(pageIdx);
        navigate(buttonData[pageIdx].path);
    };

    return (
        <nav className={styles.footbar}>
            <ul className={styles["icon-list"]}>
                {buttonData.map((button, pageIdx) => {
                    const active_class =
                        currentPageIdx === pageIdx ? styles["active"] : "";
                    return (
                        <li key={pageIdx}>
                            <button onClick={() => handleIconClick(pageIdx)}>
                                <i
                                    className={`${styles["fa-solid"]} fa-solid fa-2xl ${button.icon} ${active_class}`}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
