import React from 'react';
import qrCode from './QrCode.module.css'
import qrImg from '../../assets/image-qr-code.png'

const QrCode = () => {
    return (
        <div className={qrCode.container}>
            <div className={qrCode.visual}>
                <img src={qrImg} alt="" />
            </div>
            <div className={qrCode.text}>
                <h1 className={qrCode.title}>Improve your front-end skills by building projects</h1>
                <p className={qrCode.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
};

export default QrCode;