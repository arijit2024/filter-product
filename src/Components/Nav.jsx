import React, { useState } from "react";

const Nav = () => {

    const [age, setAge] = useState([]);

    return(
        <>
            <h2>Filter</h2>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" value={age} onChange={(e)=>setAge(e.target.value)}>
                <option selected>Select Age</option>
                <option value="1">28</option>
                <option value="2">38</option>
                <option value="3">21</option>
                <option value="3">29</option>
                <option value="3">37</option>
                <option value="3">39</option>
            </select>
            <p>{age}</p>
        </>
    )
}
export default Nav;