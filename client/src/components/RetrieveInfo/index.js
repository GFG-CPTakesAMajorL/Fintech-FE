import styles from './RetrieveInfo.module.css'

const RetriveInfo = ({ message, extract }) => {
    return (
        <div className={styles['container']}>
            {
                message ?
                    message.data ? <span className={styles['text-1']}>{message.data} </span> :
                        <span className={styles['text-0']}>{message.response} </span>
                    : <span className={styles['check-text']}> Please Select a bank to check if stencil exists </span>
            }
            {
                message ?
                    message.data ? <button className={styles['btn']} onClick={() => extract('EXTRACT')} >Extract Data</button> :
                        <button className={`${styles['btn']} ${styles['btn-disabled']}`} onClick={() => extract('EXTRACT')} disabled>Extract Data </button>
                    : <button className={`${styles['btn']} ${styles['btn-disabled']}`} onClick={() => extract('EXTRACT')} disabled>Extract Data </button>
            }

        </div>
    )
}

export default RetriveInfo