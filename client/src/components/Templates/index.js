import React from "react";
import styles from "./Templates.module.css";

const Templates = () => {
    return (
        <div className={styles['loadTemplates']}>
            <div className={styles["container"]}>
                <span className={styles["title"]}>Imported Templates</span>
                <table className={styles["table"]}>
                    <thead>
                        <tr>
                            <th>Template Name</th>
                            <th>Selection Count</th>
                            <th>Page Count</th>
                            <th>Date Added</th>
                            <th>Remove</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles["row"]}>
                            <td className={styles["file-name"]}>JSON Template Name</td>
                            <td>Selections made </td>
                            <td>Pages</td>
                            <td>Date</td>
                            <td>X</td>
                            <td>
                                <button className={styles["extract"]}>Download</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Templates;
