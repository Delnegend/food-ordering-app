import styles from "./Search.module.scss";
export default function Search() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="🔍 Tìm kiếm món ăn" />
        </div>
    );
}
