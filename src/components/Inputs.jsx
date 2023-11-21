import '../App.css';
import React from 'react';

const Inputs = ({ ScrollClick }) => {

    return (
        <div id="input-container">
            <label id="explain">
            Input a twitter URL and we can see if there is any political bias hidden within
            </label>
            <form id="form-container">
                <input placeholder='Input Twitter Link' type="text" id="ip2"/>
            </form>
            <button onClick={ScrollClick} id="submit-button">Submit Link</button>
        </div>

        
    
    )
};

export default Inputs;




