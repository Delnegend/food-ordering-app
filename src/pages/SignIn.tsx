import styles from "./SignIn.module.scss";
export default function SignIn() {
    return (
        <>
            <div className={styles.container}>

                <button className={styles.btn}>
                    <i className="fab fa-google"></i>
                    Sign In with Google
                </button>
            </div>

        </>
    );
}
