import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
    // const [token, setToken] = useState('');

    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3800/login',
            data: data
        })
            .then((res) => {
                console.log(res)
                if (res.data.token) {
                    // setToken(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    alert('login Successfully');
                }
                else {
                    alert('User records does not match');
                }
            })
    }
    return (
        <div id='LoginForm'>
            <div id="loginformblock1">
                <span>
                    In the realm of competitive exams, preparation is the armor and knowledge is the sword.
                </span>
                <img src="/images/loginimg2.png" alt="" style={{ width: '100%', height: '425px' }} />
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