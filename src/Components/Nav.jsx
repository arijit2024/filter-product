import React, { useState } from "react";

const Nav = () => {

    const [data, setData] = useState([]);

    const frtchData = (value) => {
            fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((json) => {
                const result = json.users.filter((user) => {
                    return(
                        user.firstName.includes(value) 
                    )
                })
                console.log(result)
            })
    }

    const handelChange = (value) => {
            setData(value)
            frtchData(value)
    }
    return(
        <>
            <input type="text" value={data} onChange={(e) => handelChange(e.target.value)}/>
        </>
    )
}
export default Nav;
