import React, { useState } from "react";
import styles from "./SaveModal.module.css";

const SaveModal = ({ saveChanges }) => {
    const tags = [
        "Table Of Contents",
        "Page Number: Table Of Contents",
        "Bank Name",
        "Client Name",
        "Summary Holdings",
        "Allocation by Asset Class",
        "Allocation by Currency",
        "Allocation by Industry",
        "Allocation by Geography",
        "Currency Rates",
        "Cash Transactions",
        "Loan transactions",
        "Security Transactions",
        "Cash Holdings",
        "Loans Outstanding",
        "Equity and Equity Like Holdings",
        "Bond and Bond Like Holdings",
        "Equity ETF Holdings",
        "Bond ETF Holdings",
        "Derivatives, Futures and Options Holdings",
        "Structured Products Holdings"
    ]

    const [isLooping, setIsLooping] = useState(false);
    const [tag, setTag] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'loop') {
            setIsLooping(!isLooping);
        } else if (name === 'tag') {
            setTag(value);
        }
    };
    return (
        <div className={styles["background"]}>
            <div className={styles["modal"]}>
                <span>Save Box Dimensions</span>
                <div className={styles["input"]}>
                    <label htmlFor="loop">Is Looping Required?</label>
                    <input
                        type="checkbox"
                        name="loop"
                        id="loop"
                        value={isLooping}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["input"]}>
                    <label htmlFor="tag">Select the Tag: </label>
                    <select name="tag" onChange={handleChange} defaultValue="DEFAULT">
                        <option value="DEFAULT" disabled className={styles['disabled']}> - Select Your Tag - </option>
                        {
                            tags.map((t, i) => {
                                return <option value={t} key={i}>{t}</option>
                            })
                        }
                    </select>
                </div>
                <div className={styles["btns"]}>
                    <button
                        className={styles["close"]}
                        onClick={() => saveChanges("close", isLooping, tag)}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles["save"]}
                        onClick={() => saveChanges("save", isLooping, tag)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SaveModal;
