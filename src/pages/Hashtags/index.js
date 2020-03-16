import React, {useState, useEffect} from 'react';
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
import Popup from '../../comps/Popup';

function Hashtags({hashtagTitle, postPopupDisplay, setPostPopupDisplay}) {

    var tier = "starter";
    
    var TopBarPopup = (<TopBar/>);


    function CheckTier(){
        if (tier === "starter"){
            TopBarPopup = (<TopBar />);
    
        } else if ( tier === "standard" || tier === "team") {
            TopBarPopup = null;
        }
    }

    CheckTier();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const [limitContainerDisplay, setLimitContDisp] = useState("none");
    const [inputValue, setInputValue] = useState('');


    return (

        <div className="dash-container">
            <Popup setPostPopupDisplay={setPostPopupDisplay} postPopupDisplay={postPopupDisplay} />

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>
                
            <div className="dash-main-container dash-s-container">

                { TopBarPopup }

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
                                {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/> })}  
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