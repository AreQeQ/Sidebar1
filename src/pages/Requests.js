import React from 'react';
import {useState} from "react";
import './Requests.css'

function Requests() {
    const [inputIp, setInputIp] = useState("http://localhost:8080")
    const [connectedIp, setConnectedIp] = useState("")
    const [response, setResponse] = useState([])

    function connect(ip) {
        fetch(ip, {
            method: 'POST',
            body: JSON.stringify({
                request: 'foo'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => response.json())
            .then(json => setResponse(JSON.stringify(json)))
            .then(() => setConnectedIp(ip))
            .catch(e => setResponse("ERROR: " + e))
    }

    function refresh() {
        connect(connectedIp)
    }

    return (
        <div className="requests">

            <div className="input">
                IP: <input className="ipInput" type={'text'} defaultValue={inputIp}
                           onChange={e => setInputIp(e.target.value)}/>
                <button onClick={() => connect(inputIp)}>Connect</button>
            </div>

            <div className="connection">
                Connected to: {connectedIp}
            </div>

            <div className="refresh">
                <button onClick={() => refresh}>Refresh</button>
            </div>

            <div className="response">
                response: {response}
            </div>

        </div>)

}

export default Requests;
