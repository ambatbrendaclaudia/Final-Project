import React, { useState, useEffect } from 'react'

const Login = () => {

    const [titlePage, setTitlePage] = useState("Login")
    
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    useEffect(() => {
        setTimeout(() => {
            setTitlePage('Register');
        }, 3000);
    }, []);

    const handleSubmit = () => {
        const data = {
            username: username,
            password: password,
        }
        console.log(data);
    };

    return (
        <div className="container">
            <h1>{titlePage}</h1>
            <p>Email</p>
            <input className="form-control" placeholder="Masukan email" 
            value={username} onChange={(event) => setUsername (event.target.value)}/>

            <label className="from-label">Password</label>
            <input className="form-control" placeholder="Masukan password" 
            value={password} type="password" onChange={(event) => setPassword (event.target.value)}/>
            <br/>

            <button className="btn btn-primary" onClick={handleSubmit}>Ganti</button>
        </div>
    )
}

export default Login;