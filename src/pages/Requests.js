import React from 'react';
import {useState} from "react";

function Requests() {
    const [response, setResponse] = useState([])

    fetch('http://localhost:8080', {
        method: 'POST',
        body: JSON.stringify({
            request: 'foo'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(json => setResponse(JSON.stringify(json))
        )

    return (
        <div className="requests">
            response: {response}
        </div>)

}

export default Requests;
