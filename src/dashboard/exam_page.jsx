import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from 'react-webcam';
import axios from "axios";

function ExamPage() {
    const navigate = useNavigate()
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const ONE_HOUR_IN_SECONDS = 3600;
    const [timeRemaining, setTimeRemaining] = useState(ONE_HOUR_IN_SECONDS);

    useEffect(() => {
        alert("Please Make sure allow microphone and camera")
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.localStorage.getItem('token')) {
                const imageSrc1 = webcamRef.current.getScreenshot();
                setImageSrc(imageSrc1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    // const formData = new FormData();
    // formData.append('file', imageSrc);
    // Send image data to backend
    useEffect(() => {
        const formData = new FormData();
        formData.append('file', imageSrc);
        axios.post('http://localhost:3750/image', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    }, [imageSrc])
    // axios.post('http://localhost:3750/image', formData)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error uploading image:', error);
    //     });

    function Generalinstruction() {
        navigate("/generalinstruction")
    }
    function SubmitExam() {
        navigate("/")
    }
    return (
        <div id="instruction">
            <main id="instructionmainblock">
                <div id="instructionblock1">
                    <h1>This is exam page</h1>
                    <div>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            style={{ width: '100px', height: '100px', position: 'absolute', bottom: '-10px', left: '10px' }}
                        />
                        {/* <button onClick={capture}>Capture</button> */}
                        {imageSrc && <img src={imageSrc} alt="Captured Selfie" width='200px' height='200px' />}
                    </div>
                </div>
                <div id="instructionblock2">
                    <img src="/images/logo.png" alt="" width="50px" height="50px" />
                    <h5>Soma Sekhar</h5>
                    <span>Time Left : {formatTime(timeRemaining)}</span>
                </div>
            </main>
            <footer id="instructionfooterblock">
                <button class="btn btn-primary" onClick={() => { Generalinstruction() }}>Previous</button>
                <button class="btn btn-primary" onClick={() => { SubmitExam() }}>Submit</button>
            </footer>
        </div>
    )
}
export default ExamPage