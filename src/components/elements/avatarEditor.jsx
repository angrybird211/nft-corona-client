import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Modal } from "reactstrap";

const AvatarEditor = ({ avatar, onChangeAvatar }) => {
    const [src, setSrc] = useState(avatar);
    const [preview, setPreview] = useState(avatar);
    const [isOpenModal, setOpenModal] = useState(false);

    const onClose = () => {
        setSrc(preview);
        setOpenModal(false);
        onChangeAvatar(preview);
    }

    const onCrop = (preview) => {
        setPreview(preview);
    }

    const onOpen = () => {
        setOpenModal(true);
    }

    const onBeforeFileLoad = (elem) => {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }

    const handleFileChange = (e) => {
        window.URL = window.URL || window.webkitURL;
        let url = window.URL.createObjectURL(e.target.files[0]);
        // ReactDom.findDOMNode(this.refs.in).value = "";
        console.log("url is", url, e.target.files[0]);
        setSrc(url);
        setOpenModal(true);
    }

    return (
        <>
            <Modal
                size="sm"
                isOpen={isOpenModal}
                toggle={() => { setOpenModal(!isOpenModal) }}
                centered={false}
                scrollable={false}
                className="avatar-modal"
            >
                <div className="modal-header">
                    <h6>Crop your new profile picture</h6>
                    <button type="button" className="btn btn-secondary btn-fw" onClick={onClose}>Close</button>
                </div>

                <div className="modal-body">
                    <Avatar
                        width={390}
                        height={295}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        src={src}
                    />

                    <div className="actions">
                        <button type="button" className="btn btn-primary btn-fw w-100 mt-3" onClick={onClose}>Apply</button>
                    </div>
                </div>
            </Modal>

            <div className="avatar-wrapper">
                <img src={src} alt="Preview" className="preview-image" />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button type="button" className="btn btn-dark btn-icon-text" onClick={onOpen}> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                </button>
            </div>
        </>
    )
}

export default AvatarEditor;