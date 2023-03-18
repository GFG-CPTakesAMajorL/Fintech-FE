import styles from "./SaveModal.module.css";

const Popup = ({ togglePopup }) => {
    return (
        <div className={styles["background"]}>
            <div className={styles["modal"]}>
                <span>Saved Successfully</span>
                <div className={styles["btns"]}>
                    <button
                        className={styles["close"]}
                        onClick={() => togglePopup()}
                    >
                        close popup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
