import React, {useState} from 'react';
import {connect} from 'react-redux';
import searchIcon from '../../assets/Icons/search.svg';


function InputBox({inputType, inputValue, setInputValue, inputName, setLimitContDisp, limitContainerDisplay, width, height, placeholder, tier}){
    console.log(inputValue);

    if (inputValue !== '' && tier === "starter") {
        setLimitContDisp('flex');
    } else if (inputValue === ''){
        setLimitContDisp('none');
    }

    return(
        <div className="input-cont" style={{width:width, height:height}}>
            <input type="text" name={inputName} placeholder={placeholder} onChange={(e)=>{setInputValue(e.target.value)}}/>
            <div className="submit-btn" style={{height:height}}><img src={searchIcon} alt="search icon"/></div>
        </div>
    )
}

InputBox.defaultProps = {
    inputType:'text',
    inputName:'input-name',
    placeholder:'Search or add new tags',
    width:'90%',
    height:'45px'
}

const mapStateToProps = state => {
    return {
        tier:state.tier
    }
  }

export default connect(mapStateToProps)(InputBox);