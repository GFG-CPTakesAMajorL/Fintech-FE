import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import ExtractedData from '../components/ExtractedData'
import { extractData } from '../redux/actions/extract'
import { processData } from '../redux/actions/postgres'
import loading from '../assets/loading.gif'

const Extract = (props) => {
    const { state } = useLocation();
    const { fileName, bankName, heightOfPDF, widthOfPDF, isRotationRequired, type } = state;

    useEffect(() => {
        if (type === 'EXTRACT') {
            props.dispatch(extractData(props.token, fileName, bankName, heightOfPDF, widthOfPDF, isRotationRequired))
        } else if (type === 'PROCESS') {
            props.dispatch(processData(props.token, fileName, bankName, heightOfPDF, widthOfPDF, isRotationRequired))
        } else {
            return;
        }
    }, [])

    switch (type) {
        case 'EXTRACT':
            return (
                <div className='App' style={{ padding: '2rem' }}>
                    {
                        props.extracted ?
                            <div className='DATA_BLOCKS'>
                                {
                                    props.extractData && props.extractData.data ? props.extractData.data.map((item, idx) => {
                                        let keys = Object.keys(item[0]);
                                        return <table className='TABLE' key={idx}>
                                            <thead>
                                                <tr className='HEADER'>
                                                    {
                                                        keys.map((key, idx) => {
                                                            return <th className='CELL' key={idx}>{key}</th>
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                            {
                                                item.map((x, idx) => {
                                                    return <ExtractedData key={idx} object={x} type={2} />
                                                })
                                            }
                                        </table>
                                    }) : <span >No Data</span>
                                }
                            </div> : <img className='LOADER' src={loading} alt='loading' />
                    }
                </div>
            )
        case 'PROCESS':
            return (
                <div className='App' style={{ padding: '2rem' }}>
                    {
                        props.processData && props.processData.response ? <span>{props.processData.response}</span> :
                            props.processed ?
                                <div className='DATA_BLOCKS'>
                                    {
                                        props.processData && props.processData.data ? props.processData.data.map((item, idx) => {
                                            let keys = Object.keys(item[0]);
                                            return <table className='TABLE' key={idx}>
                                                <thead>
                                                    <tr className='HEADER'>
                                                        {
                                                            keys.map((key, idx) => {
                                                                return <th className='CELL' key={idx}>{key}</th>
                                                            })
                                                        }
                                                    </tr>
                                                </thead>
                                                {
                                                    item.map((x, idx) => {
                                                        return <ExtractedData key={idx} object={x} type={2} />
                                                    })
                                                }
                                            </table>
                                        }) : <span>No Data</span>
                                    }
                                </div> : <img className='LOADER' src={loading} alt='loading' />
                    }
                </div>
            )
        default: return null
    }
}

const mapStateToProps = state => {
    return {
        extractData: state.extract.data,
        processData: state.postgres.data,
        token: state.auth.token,
        extracted: state.extract.extracted,
        processed: state.postgres.processed,
        saved: state.saveJson.saved
    }
}

export default connect(mapStateToProps)(Extract)