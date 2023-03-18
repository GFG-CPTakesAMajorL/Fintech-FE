import styles from './Extracted.module.css'

const ExtractedData = ({ object, type }) => {
    let data
    switch (type) {
        case 1: data = Object.entries(object).map(([key, value], idx) => {
            return <div className={styles['box']} key={idx}>
                <span className={styles['key']}>{key}</span> :
                <span className={styles['value']}>{value}</span>
            </div>
        })
            return (
                <div className={styles['container']}>
                    {data}
                </div>
            )
        case 2: data = Object.entries(object).map(([key, value], idx) => {
            return <td className={styles['CELL']} key={idx}>{value}</td>
        })
            return (
                <tbody className={styles['t-body']}>
                    <tr className={styles['row']}>
                        {data}
                    </tr>
                </tbody>
            )
    }
}

export default ExtractedData