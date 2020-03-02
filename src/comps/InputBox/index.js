import React from 'react';
import searchIcon from '../../assets/Icons/search.svg';


function InputBox({inputType, inputName, width, height, placeholder}){
    return(
        <div className="input-cont" style={{width:width, height:height}}>
            <input type="text" name={inputName} placeholder={placeholder}/>
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

export default InputBox;