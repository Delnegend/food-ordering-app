import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FootBar.module.css";
export default function FootBar() {
  const navigate = useNavigate();

  const buttonData: { icon: string; page: string }[] = [
    { icon: "fa-compass", page: "/" },
    { icon: "fa-location-dot", page: "/" },
    { icon: "fa-shopping-bag", page: "/" },
    { icon: "fa-heart", page: "/" },
    { icon: "fa-bell", page: "/myorders" },
  ];
  const [currentPageIdx, setActiveIdx]: [number, (index: number) => void] =
    useState<number>(1);

  const handleIconClick = (pageIdx: number) => {
    setActiveIdx(pageIdx);
    navigate(buttonData[pageIdx].page);
  };

  return (
    <nav className={styles.footbar}>
      <ul className={styles["icon-list"]}>
        {buttonData.map((button, pageIdx) => (
          <li key={pageIdx}>
            <button onClick={() => handleIconClick(pageIdx)}>
              <i
                className={`${styles["fa-solid"]} ${
                  currentPageIdx === pageIdx ? styles["active"] : ""
                } fa-solid fa-2xl ${button.icon}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
