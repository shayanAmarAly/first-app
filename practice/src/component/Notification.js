import React from 'react'

function Notification(props) {
    const capitalize= (word)=>{
        const log = word.toLowerCase();
        return log.charAt(0).toUpperCase() + log.slice(1); 
    
    }
    return (
        props.alert && <div>
             <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Notification
