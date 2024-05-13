import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [token, setToken] = useState('');
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3750/login',
            data: data
        })
            .then((res) => {
                // console.log(res);
                if (res.data.token) {
                    // setToken(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    alert('Login Successful');
                    // window.location.reload();
                    navigate('/generalinstruction')
                    // Start the timer after successful login
                    startTokenExpirationTimer();
                } else {
                    alert('User records do not match');
                }
            });
    };

    useEffect(() => {
        // Check if token exists in local storage when component mounts
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // setToken(storedToken);
            // Start the timer for the stored token
            startTokenExpirationTimer();
        }
    }, []);

    const startTokenExpirationTimer = () => {
        // Clear the existing timer if any
        clearTimeout(window.tokenExpirationTimer);
        // Set a new timer for 1 minute
        window.tokenExpirationTimer = setTimeout(() => {
            // Clear token from local storage and state after 1 minute
            // setToken('');
            localStorage.removeItem('token');
            alert('Session expired. Please log in again.');
            navigate('/');
        }, 120000); // 1 minute = 60,000 milliseconds
    };

    // const logout = () => {
    //     // Clear token from state and local storage
    //     // setToken('');
    //     localStorage.removeItem('token');
    //     // Clear the expiration timer
    //     clearTimeout(window.tokenExpirationTimer);
    // };
    return (
        <div id='LoginForm'>
            <div id="loginformblock1">
                <span>
                    In the realm of competitive exams, preparation is the armor and knowledge is the sword.
                </span>
                <img src="/images/loginimg2.png" alt="" />
            </div>
            <div id="loginformblock2">
                <div>
                    <h3>Hi, Welcome Back</h3>
                </div>
                <form action="" onSubmit={submitHandler}>
                    <div class="form-floating mb-3">
                        <input class="form-control" type="text" name="username" placeholder='username' value={username} onChange={changeHandler} id="floatingInput" />
                        <label for="floatingInput">Username</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingPassword" type="password" name="password" placeholder='password' value={password} onChange={changeHandler} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class='btn btn-secondary w-50' type="submit" name="submit">Login</button>
                </form>
                <a href="/" id='a1'>Forgot password?</a>
                <hr style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                <div id='loginCheckbox'>
                    <input type="checkbox" name="" id="" />
                    <span>Remember this device</span>
                </div>
                <hr style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                <span id='loginContent'>By continuing, you accept our <a href="/">terms of use</a> and <a href="/">privacy policy</a></span>
            </div>
        </div>
    );
}

export default Login;