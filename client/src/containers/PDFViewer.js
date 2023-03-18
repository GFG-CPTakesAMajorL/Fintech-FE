import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { connect } from "react-redux";
import SaveModal from "../components/SaveModal";
import { readFile } from "../redux/actions/readFile";
import { resetSaveJson, savejson } from "../redux/actions/savejson";
import Popup from "../components/SaveModal/Popup";
import { getBankNames, loadInfo, resetRetrieveJson, retrieveJson } from "../redux/actions/loadInfo";
import FileInfo from "../components/FileInfo";
import RetriveInfo from "../components/RetrieveInfo";

function PDFViewer(props) {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { fileName } = state;

    const [heightOfPDF, setHeightOfPDF] = useState(0);
    const [widthOfPDF, setWidthOfPDF] = useState(0);
    const [topOfPDF, setTopOfPDF] = useState(0);
    let elem;
    useEffect(() => {
        props.dispatch(resetSaveJson())
        props.dispatch(resetRetrieveJson())
        props.dispatch(readFile(props.token, fileName));
        props.dispatch(loadInfo(props.token, fileName));
        props.dispatch(getBankNames());
        elem = document.querySelector(".canvas").getBoundingClientRect();
        setTopOfPDF(elem.top)
    }, [elem]);

    const [bankName, setBankName] = useState('');

    // PDF Rendering purpose
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(
            ".react-pdf__Page__textContent"
        );
        textLayers.forEach((layer) => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
    }
    function nextPage(page) {
        if (page === numPages) return;
        else setPageNumber(page + 1);
    }
    function prevPage(page) {
        if (page === 1) return;
        else setPageNumber(page - 1);
    }

    // Bounding box purpose
    const [boxes, setBoxes] = useState([]);
    const [tracking, setTracking] = useState(false);
    const [drawing, setDrawing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dimensions, setDimensions] = useState({});
    const [isRotationRequired, setIsRotationRequired] = useState(false);
    const saveChanges = (choice, loopingRequired, tag) => {
        setIsModalOpen(false);
        if (choice === "save") {
            if (!tag) {
                alert('Select a tag before saving!')
                return
            }
            setBoxes([...boxes, {
                ...dimensions,
                pageNumber: pageNumber,
                loopingRequired: loopingRequired,
                isRotationRequired: isRotationRequired,
                tag: tag,
            },]);
        }
        setDimensions({});
    };
    function saveDimensions() {
        if (!bankName) {
            alert('Please select a bank to start with')
            return
        }
        if (boxes.length < 1) {
            alert('Please make a box to save its dimensions')
            return
        }
        props.dispatch(savejson(props.token, bankName, boxes));
    }
    function startTracking() {
        if (tracking && !drawing) {
            setTracking(false);
        }
        if (!tracking && !drawing) {
            setTracking(true);
            initDraw(document.querySelector(".canvas"));
        }
    }
    function initDraw(canvas) {
        elem = canvas.getBoundingClientRect();
        setHeightOfPDF(elem.height);
        setWidthOfPDF(elem.width);
        let mouse = {
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
        };
        let element = null;
        canvas.onmousemove = function (e) {
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            if (element !== null) {
                element.style.width = Math.abs(mouse.x - mouse.startX) + "px";
                element.style.height = Math.abs(mouse.y - mouse.startY) + "px";
                element.style.left =
                    mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
                element.style.top =
                    mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
            }
        };
        canvas.onclick = function (e) {
            if (element !== null) {
                setDrawing(false);
                setIsModalOpen(true);
                setDimensions({
                    x1: elem.left > 0 ? mouse.startX - elem.left : mouse.startX,
                    x2: elem.left > 0 ? mouse.x - elem.left : mouse.x,
                    y1: topOfPDF > 0 ? mouse.startY - topOfPDF : mouse.startY,
                    y2: topOfPDF > 0 ? mouse.y - topOfPDF : mouse.y,
                    height: element.style.height,
                    width: element.style.width,
                });
                element = null;
                canvas.style.cursor = "default";
                document.querySelector(".rectangle").remove();
            } else {
                mouse.startX = mouse.x;
                mouse.startY = mouse.y;
                element = document.createElement("div");
                element.className = "rectangle";
                element.style.left = mouse.startX + "px";
                element.style.top = mouse.startY + "px";
                canvas.appendChild(element);
                canvas.style.cursor = "crosshair";
                setDrawing(true);
            }
        };
    }

    // Popup Purpose
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const extract = (type) => {
        if (!bankName) {
            alert('Please select a bank to start with')
            return
        }
        elem = document.querySelector(".canvas").getBoundingClientRect();
        navigate('/extract', { state: { fileName, bankName, heightOfPDF: elem.height, widthOfPDF: elem.width, isRotationRequired, type } })
    }

    const handleRetrieveJson = (e) => {
        const { name, value } = e.target;
        if (name === 'bankName') {
            setBankName(value);
        } else if (name === 'isRotationRequired') {
            if (value === 'false') {
                setIsRotationRequired(false);
            } else if (value === 'true') {
                setIsRotationRequired(true);
            }
        }
        if (bankName && name === 'isRotationRequired') {
            if (value === 'false') {
                props.dispatch(retrieveJson(props.token, bankName, false))
            } else if (value === 'true') {
                props.dispatch(retrieveJson(props.token, bankName, true))
            }
        }
        if (isRotationRequired && name === 'bankName') {
            props.dispatch(retrieveJson(props.token, value, isRotationRequired))
        }
    }

    return (
        <div className="PDFViewer">
            <div className='Section'>
                <div className="btns">
                    <button onClick={() => prevPage(pageNumber)}>Previous</button>
                    <span className="page-info">
                        Page <span className="bold">{pageNumber}</span> of{" "}
                        <span className="bold">{numPages}</span>
                    </span>
                    <button onClick={() => nextPage(pageNumber)}>Next</button>
                    {
                        !props.saved ? <button onClick={() => saveDimensions()}>Submit</button> :
                            <button style={{ backgroundColor: 'grey' }} disabled >Submit</button>
                    }
                    {
                        props.saved ? <button onClick={() => extract('EXTRACT')}>Extract Data</button>
                            : <button style={{ backgroundColor: 'grey' }} disabled>Extract Data</button>
                    }
                    {
                        props.saved ? <button onClick={() => extract('PROCESS')}>Process Data</button>
                            : <button style={{ backgroundColor: 'grey' }} disabled>Process Data</button>
                    }
                </div>

                <select style={{ padding: '0.4rem 2rem', fontSize: '1rem' }} name="bankName"
                    defaultValue="DEFAULT" onChange={handleRetrieveJson}>
                    <option value="DEFAULT" disabled>- Select Bank Name -</option>
                    {
                        props.banknames.length > 0 && props.banknames.map((bank, idx) => {
                            return <option key={idx} value={bank}>{bank}</option>
                        })
                    }
                </select>

                <select style={{ padding: '0.4rem 2rem', fontSize: '1rem' }} name="isRotationRequired"
                    defaultValue="DEFAULT" onChange={handleRetrieveJson}>
                    <option value="DEFAULT" disabled>- Is Rotation Required for the current document? -</option>
                    <option value="true"> Yes </option>
                    <option value="false"> No </option>
                </select>

                {props.saved ? isPopupOpen ? <Popup togglePopup={togglePopup} /> : null : null}
                {isModalOpen && <SaveModal saveChanges={saveChanges} />}

                <div className="canvas" id="canvas" onClick={() => startTracking()}>
                    {
                        props.downloaded && props.buffer !== null &&
                        <Document file={`data:application/pdf;base64,${props.buffer}`} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
                        </Document>
                    }
                </div>
            </div>
            <div className="Section">
                <RetriveInfo
                    message={props.retrieveMessage}
                    extract={extract}
                />
                <FileInfo
                    filename={fileName}
                    size={props.info.size}
                    date={props.info.last_modified}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        buffer: state.readFile.buffer,
        info: state.loadInfo.info,
        banknames: state.loadInfo.banknames,
        retrieveMessage: state.loadInfo.message,
        downloaded: state.readFile.downloaded,
        token: state.auth.token,
        saved: state.saveJson.saved,
        message: state.saveJson.message
    };
};

export default connect(mapStateToProps)(PDFViewer);
