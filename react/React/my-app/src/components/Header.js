import React from "react";

function Header() {
    // const title_design = "design"
    // const title_programing = "programing"
    let titles = {
        desginer: "design",
        programmer: "programing"
    }
    const client = "programing"
    // let title = client ===  "programing" ? title_design : title_programing
const clientInfo = {
    name: 'yaser',
    lastName: 'wahidi'
}
    return (
        <div className="navbar bg-primary text-white">
            <h1>hello, {`${clientInfo.name} ${clientInfo.lastName}`} in the world of {client === "programing" ? titles.programmer : titles.desginer}</h1>
        </div>
    );
}

export default Header;