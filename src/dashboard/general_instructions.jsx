import React from "react";
import { useNavigate } from "react-router-dom";

function GeneralInstructions() {
    const navigate = useNavigate();
    function instructionspage() {
        navigate('/additionalinstructions')
    }
    return (
        <div id="examdemo">
            <main id="exammainblock">
                <div id="examblock1">
                    <h2>General Instructions</h2>
                    <ul>
                        <li>This demo exam consists of multiple-choice questions.</li>
                        <li>Each question has only one correct answer.</li>
                        <li>Read each question carefully before selecting your answer.</li>
                        <li>You have 60 minutes to complete the exam.</li>
                        <li>The timer starts as soon as you begin the exam.</li>
                        <li>Once the time is up, the exam will automatically submit.</li>
                        <li>Do not refresh the page or close the browser during the exam.</li>
                        <li>Good luck!</li>
                    </ul>
                    <h2>Exam Pattern</h2>
                    <table class="table table-hover">
                        <thead>
                            <th class="w-50">Subject</th>
                            <th>No. of questions</th>
                            <th>Maximum Marks</th>
                            <th>Total Time</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>English</td>
                                <td>25</td>
                                <td>25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Telugu</td>
                                <td>25</td>
                                <td>25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td>25</td>
                                <td>25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>25</td>
                                <td>25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>100</td>
                                <td>100</td>
                                <td>90minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="examblock2">
                    <img src="/images/logo.png" alt="" width="50px" height="50px" />
                    <h5>Soma Sekhar</h5>
                    <span>Time Left :</span>
                </div>
            </main>
            <footer id="examfooterblock">
                <button class="btn btn-primary" onClick={() => { instructionspage() }}>Next</button>
            </footer>
        </div>
    )
}
export default GeneralInstructions