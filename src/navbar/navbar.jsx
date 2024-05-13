import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    function logout() {
        window.localStorage.removeItem("token")
        navigate('/');
    }
    return (
        <div id="NavBar">
            {
                !window.localStorage.getItem("token") ?
                    <nav id="navbar">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </nav> :
                    <nav id="navbar">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/generalinstruction">Exam</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/" onClick={() => logout()}>LogOut</a>
                            </li>
                        </ul>
                    </nav>
            }
        </div>
    )
}
export default NavBar