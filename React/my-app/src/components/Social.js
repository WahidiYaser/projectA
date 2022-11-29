import React from "react";

function Social() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkbox" id="facebook" />
                <label className="text-primary" htmlFor="facebook"> Facebook </label>
            </li>
            <li className="list-group-item">
                <input type="checkbox" id="instgram" />
                <label className="text-success" htmlFor="instgram"> Instgram </label>
            </li>
            <li className="list-group-item">
                <input type="checkbox" id="youtube" />
                <label className="text-danger" htmlFor="youtube"> Youtube </label>
            </li>
        </ul>
    )
}

export default Social;