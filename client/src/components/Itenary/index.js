import React from "react";
import { useNavigate } from "react-router";
import styles from "./Itenary.module.css";

const Itenary = ({ files, runAllProcesses }) => {
    const navigate = useNavigate();
    const redirect = (filename) => {
        console.log("Loading!");
        setTimeout(() => {
            navigate("/pdf", { state: { fileName: filename } });
        }, 1000);
    };

    const fileList = files.map((file, idx) => {
        return (
            <tr className={styles["row"]} key={idx}>
                <td className={styles["file-name"]}>{file}</td>
                <td>
                    <button
                        className={styles["extract"]}
                        onClick={() => redirect(file)}
                    >
                        Crop Data
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            {fileList.length > 0 ? (
                <div className={styles["container"]}>
                    <div className={styles['header']}>
                        <span className={styles["title"]}>Not yet Processed Files</span>
                        <button className={styles['files-btn']} onClick={() => runAllProcesses()} >Run All Processes</button>
                    </div>
                    <table className={styles["table"]}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Process</th>
                            </tr>
                        </thead>
                        <tbody>{fileList}</tbody>
                    </table>
                </div>
            ) : null}
        </>
    );
};

export default Itenary;
