import React from 'react';

function Spacer({height, width}) {

    return (
        <div style={{height:height, width:width}}>
        </div>
    )
}

Spacer.defaultProps = {
    height:'50px',
    width:'0px'
}
export default Spacer;