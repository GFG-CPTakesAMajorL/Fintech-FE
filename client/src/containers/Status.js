import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import StatusComponent from '../components/Status';
import { getFiles } from '../redux/actions/getFileList';

const Status = (props) => {
    const [load, setload] = useState("processed");

    const handleClick = (value) => {
        setload(value);
    };

    useEffect(() => {
        props.dispatch(getFiles());
    }, [load]);

    return (
        <>
            <Navbar menubuttons={false} processbutton={true} />
            <StatusComponent
                load={load}
                handleClick={handleClick}
                files={props.fileList.files}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        fileList: state.getFiles,
    };
};

export default connect(mapStateToProps)(Status);