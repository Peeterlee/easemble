import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function AddPost({postPopupDisplay, setPostPopupDisplay}){
    return (
        <div className="addPostContainer" onClick={()=>{setPostPopupDisplay("flex")}}>
            <AddIcon style={{fontSize:"30px", width:"200px"}}/>
        </div>
    )
}

AddPost.defaultProps = {

}

export default AddPost;