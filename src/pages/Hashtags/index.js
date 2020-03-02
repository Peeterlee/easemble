import React from 'react';
import PageTitle from '../../comps/PageTitle';

import {menus} from '../../comps/Sidebar/menuItems';
import Sidebar from '../../comps/Sidebar';
import InputBox from '../../comps/InputBox';
import SectionTab from '../../comps/Section/SectionTab/';

import HashtagPost from '../../comps/HashtagPost';
import { HashtagTabs } from '../../comps/Section/SectionTab/HashtagTabs';
import { HashtagPostObjects } from '../../comps/HashtagPost/HashtagPostObjects';

function Hashtags() {
    return (
        <div className="dash-main-container hashtags-container">

            <div className="hashtags-header">
                <PageTitle title="Hashtags" />
                <div className="spacer" style={{height:'60px'}}></div>
                <InputBox />
                <div className="spacer" style={{height:'40px'}}></div>
                <SectionTab tabs={HashtagTabs} />
            </div>
            <div className="hashtags-main-container">
                    <div className="hashtags-content-container">
                        <div className="PostsContainer expanded"> 
                            {HashtagPostObjects.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Hashtags;