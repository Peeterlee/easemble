import React,{useState} from 'react';
import DoneIcon from '@material-ui/icons/Done';
import {PickedHashtag} from '../../redux/actions';
import {connect} from 'react-redux';

function PickHashTag({tag_img,hashtag,PickedHashtag,hashtag_amount}){

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
        <div style={{backgroundImage:`url(${tag_img})`}} className="pickhashtag_container" onClick={()=>{
            if(hashtag_amount >= 3){
                if(checkStatus === true){
                    SetcheckStatus(!checkStatus);
                    PickedHashtag('SUBTRACT')
                }
            }else{
                SetcheckStatus(!checkStatus);
                if(checkStatus === true){
                    PickedHashtag('SUBTRACT')
                }else{
                    PickedHashtag('ADD')
                }
            }
        }}>
            <div className="blend_div" style={{backgroundColor:bgop}}><div className="hashtag_name">#{hashtag}</div></div>
            {showMark}
        </div>
    )
}

PickHashTag.defaultProps = {
    tag_img:"https://www.okea.org/wp-content/uploads/2019/10/placeholder.png",
    hashtag:'default'
}

const mapStateToProps = state => {
    return {
        hashtag_amount:state.hashtag_amount
    }
}

export default connect(mapStateToProps, {PickedHashtag})(PickHashTag);