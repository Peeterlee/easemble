import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function AddPost(){
    return (
        <div className="addPostContainer">
            <AddIcon style={{fontSize:"30px", width:"200px"}}/>
        </div>
    )
}

AddPost.defaultProps = {

}

export default AddPost;