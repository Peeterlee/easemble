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

function Section({sectionType, buttonTitle, postPopupDisplay, setPostPopupDisplay}){

var tier = "starter";

var buttonTitle = "View All"
var postClass = "PostsContainer";

var linkPage = '/'
var currentTab = null;

// Default Tabs for List
  var tab1="Today";
  var tab2="Week";
  var tab3="Month";

var posts = null;

const [HomePosts, setHomePosts] = useState(<div className={postClass}> {ScheduledPostData.map((o,i)=>{ return <ScheduledPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} /> })} <AddPost sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} />  </div>);
const [TaggedPosts, setTaggedPosts] = useState(<div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} /> })}  </div>);


  // Posts Section
  if (sectionType === "Posts"){
    var buttonTitle = "View Posts"
    var tab1="Drafts";
    var tab2="Scheduled";
    var tab3="";
    var posts =  HomePosts;

    currentTab = <SectionTabList tabTitle1={tab1} tabTitle2={tab2} tabTitle3={tab3} onClickTab1={()=>{displayPosts()}} onClickTab2={()=>{CheckTier()}} />;


    function CheckTier(){
      if (tier === "starter"){
        setHomePosts(<div className={postClass} style={{display:"flex", justifyContent:"center"}}><LimitMessage type="posts" atHome={true}/></div>);
      } else {
        setHomePosts(<div className={postClass}> <AddPost />  </div>);
      }
    }
    // function displayPostsLimit(){
    //   setHomePosts(<div className={postClass} style={{display:"flex", justifyContent:"center"}}><LimitMessage type="posts" atHome={true}/></div>);
    // }

    function displayPosts(){
      setHomePosts(<div className={postClass}> {ScheduledPostData.map((o,i)=>{ return <ScheduledPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} /> })} <AddPost />  </div>);
    }
  };

// Hashtags Section

  if (sectionType === "Hashtags"){
    linkPage= '/hashtags';
    var buttonTitle = "View Hashtags"
    // var tabs = {HashtagTabs};
    var posts =  <div className={postClass}> {HashtagPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} /> })}  </div>;
    currentTab = <SectionTab tabs={HashtagTabs}/>;
  }

// Tagged Section

  if (sectionType === "Tagged"){
    linkPage='/tagged';

    function CheckTier(){
      if (tier === "starter"){
        setTaggedPosts(<div className={postClass} style={{display:"flex", justifyContent:"center"}}><LimitMessage type="tagged" atHome={true}/></div>)
      } else {
        setTaggedPosts(<div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}  /> })}  </div>)
      }
    }

    function displayElse(){
      setTaggedPosts(<div className={postClass}> {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay} /> })}  </div>)
    }

    currentTab = <SectionTabList tabTitle1={tab1} tabTitle2={tab2} tabTitle3={tab3} onClickTab1={()=>{displayElse()}} onClickTab2={()=>{displayElse()}}onClickTab3={()=>{CheckTier()}}  />;

    var buttonTitle = "View Tagged"
    var posts = TaggedPosts;
  }



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
};

export default Section;