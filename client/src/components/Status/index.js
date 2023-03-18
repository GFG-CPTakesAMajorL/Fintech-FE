import Itenary from "../Itenary";
import styles from "./Status.module.css";
import loading from '../../assets/loading.gif'

const StatusComponent = ({ load, handleClick, runAllProcesses, processedFiles, unprocessedFiles }) => {
    return (
        <div className={styles['parent-container']}>
            <div className={styles["choice-box"]}>
                {
                    load === 'processed' ? <button className={`${styles["choices"]} ${styles["active"]}`} onClick={() => handleClick('processed')}>Processed</button> :
                        <button className={styles["choices"]} onClick={() => handleClick('processed')}>Processed</button>
                }
                {
                    load === 'unprocessed' ? <button className={`${styles["choices"]} ${styles["active"]}`} onClick={() => handleClick('unprocessed')}>Unprocessed</button> :
                        <button className={styles["choices"]} onClick={() => handleClick('unprocessed')}>Unprocessed</button>
                }
            </div>
            <div className={styles["status-box"]}>
                {load === "processed" ? (
                    <div className={styles["container"]}>
                        <span className={styles["title"]}>Processed Files</span>
                        <table className={styles["table"]}>
                            <thead>
                                <tr>
                                    <th>File Name</th>
                                    {/* <th>Date</th>
                                    <th>Time</th> */}
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    processedFiles.length > 0 && processedFiles.map(file => {
                                        return <tr className={styles["row"]}>
                                            <td className={styles["file-name"]}>{file}</td>
                                            {/* <td>Date of Processesing</td>
                                            <td>Time of Processesing</td> */}
                                            <td className={styles["status"]}>Processed</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : unprocessedFiles.length > 0 ? <Itenary files={unprocessedFiles} runAllProcesses={runAllProcesses} /> :
                    <img className={styles['loader']} src={loading} alt='loading' />
                }
            </div>
        </div>
    );
};

export default StatusComponent;
