import React, { Component } from "react";
import FileUploadComponent from "../components/FileUpload";
import { connect } from "react-redux";
import { fileUpload } from '../redux/actions/fileUpload'
import { templateUpload } from '../redux/actions/templateUpload'

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            fileName: "",
            uploadedFile: null,
            isUploading: false,
            message: "",
            uploadPercentage: 0,
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            file: e.target.files[0],
            fileName: e.target.files[0].name,
            isUploading: true,
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", this.state.file);
        if (this.props.templateUpload) {
            this.props.dispatch(templateUpload(formData))
        } else {
            this.props.dispatch(fileUpload(formData));
        }
        this.setState({ ...this.state, uploadPercentage: 100 });
        setTimeout(
            () =>
                this.setState({
                    file: "",
                    fileName: "",
                    uploadedFile: {},
                    message: "",
                    uploadPercentage: 0,
                }),
            5000
        );
        this.setState({
            ...this.state,
            uploadedFile: this.props.uploadFile.filename,
            message: "File Uploaded",
        });
    };

    render() {
        return (
            <>
                <FileUploadComponent
                    message={this.state.message}
                    fileName={this.state.fileName}
                    uploadPercentage={this.state.uploadPercentage}
                    isUploading={this.state.isUploading}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    description={this.props.description}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uploadFile: state.uploadFile
    };
};

export default connect(mapStateToProps)(FileUpload);
