import React from "react";
import { useNavigate } from "react-router-dom";

function AdditionalInstructions() {
    const navigate = useNavigate();
    function ExamPage(){
        navigate("/exampage")
    }
    function instructionspage(){
        navigate("/additionalinstructions")
    }
    return (
        <div id="instruction">
            <main id="instructionmainblock">
                <div id="instructionblock1">
                    <h2>Read the following Instruction carefully:</h2>
                    <ul>
                        <li>This test comprises of multiple chioce questions.</li>
                        <li>Each question will have only one of the available options as the correct answer.</li>
                        <li>You are advised not to close the browser window before submitting the test.</li>
                        <li>In case, if the test does not load completely or becomes unresponsive, click on browser's refresh button to reload.</li>
                    </ul>
                    <h2>Marking Scheme:</h2>
                    <ul>
                        <li>1 mark(s) will be awarded for each correct answer.</li>
                        <li>There will be 1/3rd negative marking for each wrong answer.</li>
                        <li>No marks will be deducted for un-attempted questions.</li>
                    </ul>
                    <input type="checkbox" name="" id="" />
                    <span> I have read and understood all the instructions. I understand that using unfair means of any sort for any addvantage will lead to immediate disqualification. The decision of mmbg.in will be final in these matters.</span>
                </div>
                <div id="instructionblock2">
                    <img src="/images/logo.png" alt="" width="50px" height="50px" />
                    <h5>Soma Sekhar</h5>
                    <span>Time Left :</span>
                </div>
            </main>
            <footer id="instructionfooterblock">
                <button class="btn btn-primary" onClick={() => { instructionspage() }}>Previous</button>
                <button class="btn btn-primary" onClick={() => { ExamPage() }}>I AM READY TO BEGIN</button>
            </footer>
        </div>
    )
}
export default AdditionalInstructions