"use strict";
// import axios from "axios";
function handleGetUsers() {
    try {
        //@ts-ignore
        axios.get("/api/users").then(({ data }) => {
            console.log(data);
            const { user, error } = data;
            const str = data.users;
            if (error)
                throw new Error(error);
            console.log(user);
        }).catch((err) => { console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
console.log("hey");
