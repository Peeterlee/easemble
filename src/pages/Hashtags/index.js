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
        <div className="dash-main-container dash-s-container">

            <div className="dash-header">
                <PageTitle title="Hashtags" />
                <Spacer />
                <InputBox />
                <Spacer />
                <SectionTab tabs={HashtagTabs} canDeleteTag="true" />
                <Spacer />

                <LimitMessage type="hashtags"/>
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
    )
}

Hashtags.defaultProps = {
    hashtagTitle:"#lovenote"
}

export default Hashtags;