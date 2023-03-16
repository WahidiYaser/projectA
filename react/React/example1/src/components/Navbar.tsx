import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [resourceType, setresourceType] = useState<string>("posts");
    const [items, setItems] = useState([]);
    console.log("render");

    useEffect(() => {
        console.log("useEffect on mount and render");
    });
    
    useEffect(() => {
        console.log("on resource CHANGE!");
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(({ data }) => { setItems(data); });
    }, [resourceType]);

    useEffect(() => {
        console.log("on mount only");
    }, []);

    return (
        <>
            <div>
                <button onClick={() => setresourceType("posts")}> POSTS </button>
                <button onClick={() => setresourceType("users")}> USERS </button>
                <button onClick={() => setresourceType("comments")}> COMMENTS </button>
            </div>
            <h1> {resourceType} </h1>
            
            {items.map((element) => {
                return (<p> {JSON.stringify(element)} </p>)
            })}
            
        </>
    )

};

export default Navbar;