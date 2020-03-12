import React from 'react';
import PageTitle from '../../comps/PageTitle';

import InputBox from '../../comps/InputBox';
import SectionTab from '../../comps/Section/SectionTab/';

import HashtagPost from '../../comps/HashtagPost';
import { HashtagTabs } from '../../data/HashtagTabs';
import { HashtagPostData } from '../../data/HashtagPostData';
import LimitMessage from '../../comps/LimitMessage';
import Spacer from '../../comps/Spacer';

function Hashtags({hashtagTitle}) {
    
    return (
        <div className="dash-main-container hashtags-container">

            <div className="hashtags-header">
                <PageTitle title="Hashtags" />
                <div className="spacer" style={{height:'60px'}}></div>
                <InputBox />
                <div className="spacer" style={{height:'40px'}}></div>
                <SectionTab tabs={HashtagTabs} canDeleteTag="true" />
                <Spacer />

                <LimitMessage type="hashtags"/>
            </div>


            <div className="hashtags-main-container">
                
                <h1>{hashtagTitle}</h1>

                    <div className="hashtags-content-container">
                        <div className="PostsContainer expanded"> 
                            {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  
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