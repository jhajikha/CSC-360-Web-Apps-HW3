import React from "react";

export default function Todo({ title, description, dateCreated, dateCompleted, complete, dispatch, index }) {
    
    function handleOnChange(evt) {
        dispatch({type:"TOGGLE_TODO", title, description, dateCreated, dateCompleted: Date(Date.now()).toString(), complete: evt.target.checked, index})
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>{`Date Created: ` + dateCreated}</div>
            <div>{description}</div>
            
            <label htmlFor="complete-checkbox">Completed:</label>
            <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleOnChange}/>
            <div>Completed Date: {complete === true ? dateCompleted : "Incomplete"}</div>
        </div>
    )
}