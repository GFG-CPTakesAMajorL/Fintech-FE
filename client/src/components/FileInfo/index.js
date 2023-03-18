import styles from './FileInfo.module.css'

const FileInfo = ({ filename, size, date }) => {
    const add0 = (value) => (value < 10 ? "0" : "") + value;
    let day = new Date(date).getDate();
    day = add0(day);
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augt", "Sep", "Oct", "Nov", "Dec"];
    let month = new Date(date).getMonth();
    let year = new Date(date).getFullYear();
    let hours = new Date(date).getHours();
    hours = add0(hours);
    let mins = new Date(date).getMinutes();
    mins = add0(mins);
    return (
        <div className={styles['container']}>
            <span className={styles['label']}>FileName: </span>
            <span className={styles['name']}>{filename}</span>
            <span className={styles['label']}>Size: </span>
            <span className={styles['size']}>{Math.floor(size / 1024)} kb</span>
            <span className={styles['label']}>Date: </span>
            <span className={styles['date']}>{day + " " + monthList[month] + " " + year + " " + hours + ":" + mins}</span>
        </div>
    )
}

export default FileInfo