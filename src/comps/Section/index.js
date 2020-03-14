import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import SectionTab from './SectionTab';
import HashtagPost from '../HashtagPost';
import ScheduledPost from '../ScheduledPost';
import AddPost from '../AddPost';
import SectionTabList from './SectionTabList';
import {HashtagTabs} from '../../data/HashtagTabs';
import {HashtagPostData} from '../../data/HashtagPostData'
import {ScheduledPostData} from '../../data/ScheduledPostData';
import {TaggedPostData} from '../../data/TaggedPostData';
import LimitMessage from '../LimitMessage';

function Section({sectionType, buttonTitle, isSectionExpanded}){

var buttonTitle = "View All"

const [sectionExpand, setSectionExpand] = useState(false);
var linkPage = '/'


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
    linkPage= '/hashtags';
    var buttonTitle = "View Hashtags"
    // var tabs = {HashtagTabs};
    var posts =  <div className={postClass}> {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>;
    
  }


  const [HomePosts, setHomePosts] = useState(<div className={postClass}> {ScheduledPostData.map((o,i)=>{ return <ScheduledPost key={i} {...o} /> })} <AddPost />  </div>);
  const [TaggedPosts, setTaggedPosts] = useState(<div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>);


  if (sectionType === "Tagged"){
    linkPage='/tagged';

    function displayLimit(){
      setTaggedPosts(<div className={postClass} style={{display:"flex", justifyContent:"center"}}><LimitMessage type="tagged" atHome={true}/></div>)
    }

    function displayElse(){
      setTaggedPosts(<div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>)
    }

    currentTab = <SectionTabList tabTitle1={tab1} tabTitle2={tab2} tabTitle3={tab3} onClickTab1={()=>{displayElse()}} onClickTab2={()=>{displayElse()}}onClickTab3={()=>{displayLimit()}}  />;

    var buttonTitle = "View Tagged"
    var posts = TaggedPosts;
  }
    
  if (sectionType === "Posts"){
    var buttonTitle = "View Posts"
    var tab1="Drafts";
    var tab2="Scheduled";
    var tab3="";

    currentTab = <SectionTabList tabTitle1={tab1} tabTitle2={tab2} tabTitle3={tab3} onClickTab1={()=>{displayPosts()}} onClickTab2={()=>{displayPostsLimit()}} />;

    function displayPostsLimit(){
      setHomePosts(<div className={postClass} style={{display:"flex", justifyContent:"center"}}><LimitMessage type="posts" atHome={true}/></div>);
    }

    function displayPosts(){
      setHomePosts(<div className={postClass}> {ScheduledPostData.map((o,i)=>{ return <ScheduledPost key={i} {...o} /> })} <AddPost />  </div>);
    }


    var posts =  HomePosts;

  }
  
  else if (sectionType === "Hashtags"){
    currentTab = <SectionTab tabs={HashtagTabs}/>;
  };



    return (
    <div className="SectionContainer">

        <div className='SectionTitleContainer'>
            <p className="SectionTitle">{sectionType}</p>
            <Link to={linkPage} className="linkStyle">
            <p className="SectionButton" >{buttonTitle}</p>
            </Link>
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