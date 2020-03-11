import React, {useState} from 'react';

import SectionTab from './SectionTab';
import MentionPost from '../MentionPost';
import HashtagPost from '../HashtagPost';
import ScheduledPost from '../ScheduledPost';
import AddPost from '../AddPost';
import SectionTabList from './SectionTabList';
import {HashtagTabs} from '../../data/HashtagTabs';
import {HashtagPostData} from '../../data/HashtagPostData'
import {ScheduledPostData} from '../../data/ScheduledPostData';
import {TaggedPostData} from '../../data/TaggedPostData';

function Section({sectionType, buttonTitle, isSectionExpanded}){

var buttonTitle = "View All"

const [sectionExpand, setSectionExpand] = useState(false);

var postClass = "PostsContainer";

function clickViewButton() {
  setSectionExpand(!sectionExpand);
}

if (sectionExpand === true ){
  buttonTitle = "Hide All"
  postClass = "PostsContainer expanded";
} else {
    buttonTitle = "View All"
    postClass = "PostsContainer";
}

var currentTab = null;
var tabs = null;


// Default Tabs for List
  var tab1="Today";
  var tab2="Week";
  var tab3="Month";

var posts = null;

  if (sectionType === "Hashtags"){
    var buttonTitle = "View Hashtags"
    // var tabs = {HashtagTabs};
    var posts =  <div className={postClass}> {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>;
    
  }

  if (sectionType === "Posts"){
    var buttonTitle = "View Posts"
    var tab1="Scheduled";
    var tab2="Drafts";
    var tab3="";

    var posts =  <div className={postClass}> {ScheduledPostData.map((o,i)=>{ return <ScheduledPost key={i} {...o} /> })} <AddPost />  </div>;

  }

  if (sectionType === "Tagged"){

    var buttonTitle = "View Tagged"
    var posts =  <div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>;
  }
    
  if (sectionType === "Mentions" || sectionType === "Tagged" || sectionType === "Posts"){
    currentTab = <SectionTabList tabTitle1={tab1} tabTitle2={tab2} tabTitle3={tab3} />;
  } else { currentTab = <SectionTab tabs={HashtagTabs}/>;
  };


    return (
    <div className="SectionContainer">

        <div className='SectionTitleContainer'>
            <p className="SectionTitle">{sectionType}</p>
            <p  onClick={clickViewButton} className="SectionButton" >{buttonTitle}</p>
        </div>

        {currentTab}
          {posts}
    </div>

    )

  }


Section.defaultProps = {
  sectionType:"Hashtags",
  isSectionExpanded: false,

};

export default Section;