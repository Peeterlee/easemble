import React, {useState} from 'react';
import PageTitle from '../../comps/PageTitle';

import InputBox from '../../comps/InputBox';
import SectionTab from '../../comps/Section/SectionTab/';
import Sidebar from '../../comps/Sidebar';
import {menus} from '../../comps/Sidebar/menuItems';

import HashtagPost from '../../comps/HashtagPost';
import { HashtagTabs } from '../../data/HashtagTabs';
import { HashtagPostData } from '../../data/HashtagPostData';
import LimitMessage from '../../comps/LimitMessage';
import Spacer from '../../comps/Spacer';
import TopBar from '../../comps/TopBar';

function Hashtags({hashtagTitle}) {
    
    const [limitContainerDisplay, setLimitContDisp] = useState("none");
    const [inputValue, setInputValue] = useState('');


    return (

        <div className="dash-container">

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
                
            <div className="dash-main-container dash-s-container">
                <TopBar />

                <div className="dash-header">
                    <PageTitle title="Hashtags" />
                    <Spacer />
                    <InputBox setLimitContDisp={setLimitContDisp} limitContainerDisplay={limitContainerDisplay}  inputValue={inputValue} setInputValue={setInputValue} />
                    <Spacer />
                    <SectionTab tabs={HashtagTabs} canDeleteTag="true" />
                    <Spacer height="10px" />
                    <LimitMessage popup={true} type="hashtags" limitContainerDisplay={limitContainerDisplay} setLimitContDisp={setLimitContDisp} inputValue={inputValue} setInputValue={setInputValue} />
                </div>


                <div className="dash-s-main-container">
                    
                    <h1>{hashtagTitle}</h1>

                        <div className="dash-content-container">
                            <div className="PostsContainer expanded"> 
                                {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

Hashtags.defaultProps = {
    hashtagTitle:"#lovenote"
}

export default Hashtags;