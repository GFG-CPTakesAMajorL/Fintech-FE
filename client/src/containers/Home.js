import React, { Component } from "react";
import { connect } from "react-redux";
import IdleTimer from 'react-idle-timer'
import Navbar from "../components/Navbar";
import FileUpload from "./FileUpload";
import { getFiles } from "../redux/actions/getFileList";
import { Navigate } from "react-router";
import StatusComponent from "../components/Status";
import { checkIsProcessed, extractData } from "../redux/actions/extract";
import { logoutUser } from "../redux/actions/auth";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 0,
            processedFiles: [],
            unprocessedFiles: [],
            processing: false,
            load: 'unprocessed'
        }
        this.idleTimer = null
        this.handleOnIdle = this.handleOnIdle.bind(this)
    }

    handleOnIdle(event) {
        console.log('user is idle', event)
        console.log('last active', this.idleTimer.getLastActiveTime())
        this.props.dispatch(logoutUser(this.props.token))
    }
    componentDidMount() {
        setTimeout(() => {
            if (this.props.token === null) {
                return <Navigate to='/login' />
            }
        }, 3000)
        this.props.dispatch(getFiles(this.props.token));
    }
    runAllProcesses = async () => {
        // @TODO: DELETE
        return;

        this.setState({ ...this.state, processing: true })
        let unprocessed = [], processed = []
        for (let i = 0; i < this.props.fileList.length; i++) {
            // @TODO: HEIGHT WIDTH HARDCODED
            await this.props.dispatch(extractData(this.props.token, this.props.fileList[i], 842, 595));
            await this.props.dispatch(checkIsProcessed(this.props.token, this.props.fileList[i]));
            if (this.props.is_processed === false) {
                unprocessed.push(this.props.fileList[i])
            } else if (this.props.is_processed) {
                processed.push(this.props.fileList[i])
            }
            this.setState({ ...this.state, unprocessedFiles: unprocessed, processedFiles: processed })
        }
    }
    setLocation = (value) => {
        this.setState({ location: value })
    }
    setLoad = (value) => {
        this.setState({ load: value })
    }
    render() {
        return (
            <div className="Home">
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    timeout={1000 * 14400}
                    onIdle={this.handleOnIdle}
                    debounce={250}
                />
                <Navbar setLocation={this.setLocation} />
                {
                    this.state.location === 0 ?
                        this.state.processing ? <StatusComponent
                            load={this.state.load}
                            handleClick={this.setLoad}
                            runAllProcesses={this.runAllProcesses}
                            processedFiles={this.state.processedFiles}
                            unprocessedFiles={this.state.unprocessedFiles}
                        />
                            : <StatusComponent
                                load={this.state.load}
                                handleClick={this.setLoad}
                                runAllProcesses={this.runAllProcesses}
                                processedFiles={this.state.processedFiles}
                                unprocessedFiles={this.props.fileList}
                            />
                        : <FileUpload />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        fileList: state.getFiles.files,
        info: state.loadInfo.info,
        is_processed: state.extract.is_processed
    };
};

export default connect(mapStateToProps)(Home);