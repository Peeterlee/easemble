import React,{useState} from 'react';
import sample2 from '../../assets/sample2.JPG';
import DoneIcon from '@material-ui/icons/Done';

function PickHashTag({tag_img,hashtag}){

    const [checkStatus, SetcheckStatus] = useState(false);
    var showMark = null,
        bgop = null;

    if(checkStatus === true){
        showMark = <DoneIcon className="check_mark" />; 
        bgop = 'rgba(0,0,0,0.6)';
    }else{
        showMark = null; 
        bgop = 'rgba(0,0,0,0.35)';
    }
       
            
    return(
        <div style={{backgroundImage:`url(${tag_img})`}} className="pickhashtag_container" onClick={()=>{SetcheckStatus(!checkStatus)}}>
            <div className="blend_div" style={{backgroundColor:bgop}}><div className="hashtag_name">#{hashtag}</div></div>
            {showMark}
        </div>
    )
}

PickHashTag.defaultProps = {
    tag_img:"https://www.okea.org/wp-content/uploads/2019/10/placeholder.png",
    hashtag:'default'
}

export default PickHashTag;