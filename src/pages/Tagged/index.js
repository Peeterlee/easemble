import React, {useState, useEffect} from 'react';
import PageTitle from '../../comps/PageTitle';

import Sidebar from '../../comps/Sidebar';
import {menus} from '../../comps/Sidebar/menuItems';

import InputBox from '../../comps/InputBox';
import SectionTab from '../../comps/Section/SectionTab';

import HashtagPost from '../../comps/HashtagPost';
import { HashtagTabs } from '../../data/HashtagTabs';
import { TaggedPostData } from '../../data/TaggedPostData';
import LimitMessage from '../../comps/LimitMessage';
import Spacer from '../../comps/Spacer';
import SectionTabList from '../../comps/Section/SectionTabList';
import Popup from '../../comps/Popup';

function Tagged({postPopupDisplay, setPostPopupDisplay}) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    const [showLimit, setShowLimit] = useState(null);
    const [displayTagged, setDisplayTagged] = useState('flex');


    function clickTab(){
            setDisplayTagged('none');
            setShowLimit( <div className="limitPopup" style={{height:'700px'}}> <Spacer height="50px"/> <LimitMessage type="tagged" atHome={true}/></div>);
    }

    function clickOther(){
            setDisplayTagged('flex');
            setShowLimit(null);}
    
    return (

        <div className="dash-container">

            <Popup postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} />

            <div className="sidebar-cont">
            <Sidebar menus={menus}/>
            </div>

                <div className="dash-main-container dash-s-container">

                    <div className="dash-header">
                        <PageTitle title="Tagged" />
                        <Spacer />
                        <div style={{width:'90%'}}>
                        <SectionTabList onClickTab1={()=>{clickOther()}} onClickTab2={()=>{clickOther()}} onClickTab3={()=>{clickTab()}}  />
                        </div>

                    </div>


                    <div className="dash-s-main-container">

                            <div className="dash-content-container">

                                {showLimit}

                                <div className="PostsContainer expanded" style={{display:displayTagged}}> 
                                    {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} setPostPopupDisplay={setPostPopupDisplay} postPopupDisplay={postPopupDisplay} /> })}  
                                </div>
                            </div>
                    </div>

                </div>
        </div>



    )
}

Tagged.defaultProps = {

}

export default Tagged;