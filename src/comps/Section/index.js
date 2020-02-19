import React, {useState} from 'react';

import SectionTab from './SectionTab';
import SectionTitle from './SectionTitle';
import MentionPost from '../MentionPost';
import HashtagPost from '../HashtagPost';
import ScheduledPost from '../ScheduledPost';

function Section({sectionType, ViewTitle,}){


var tabs = null;

var posts = null;

  if (sectionType === "Mentions"){

    var mentions = [
      {
        acc_name:"naomiokadaa",
        tagged_user:"@lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/43659210_1316352208513783_6629538083031220224_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=N0F1A2mHOBMAX8wyNDm&oh=5d2c47ee25954745b968d71de95a7851&oe=5ECE7484",
        post_desc:'Look at these shoes that Love Note Bride had on sale! Thank you ',
        post_img:"https://junebugweddings.com/wedding-blog/wp-content/uploads/2019/08/mid-century-mercury-hall-wedding-with-southwestern-influence-and-austin-texas-vibes-gloria-goode-photography-41.jpg",
      },
      {
        acc_name:"sshenis",
        tagged_user:"@lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/82333290_586110268910623_5726260440107843584_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=8_fG-7x9IEgAX8SNvWk&oh=24ac34c6cd2bafe988870049c6ba9c76&oe=5ECB89F9",
        post_desc:'Thank you Love Note Bride for giving me my dream dress! You guys did a great job!',
        post_img:"https://g.foolcdn.com/editorial/images/435376/wedding_gettyimages-498799284.jpg",
      },
      {
        acc_name:"irvinalcira",
        tagged_user:"@lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/39938617_262278214396692_7641252861220749312_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=NJsmQIO1N3oAX_sMPyF&oh=9b738554e4a61709b5a9052da83e1313&oe=5EFC6B34",
        post_desc:"I don't know what I love more... My wife or her dress from ",
        post_img:"https://cdn.fstoppers.com/styles/full/s3/media/2018/03/29/where-to-price-wedding-photography.jpg",
      },
      {
        acc_name:"br__peter",
        tagged_user:"@lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/49997674_608380376293844_133533569774518272_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=DSfeoG_TygEAX9_6UmK&oh=b3294016d2d4f1df8243fb7d2186bd5e&oe=5EC443F0",
        post_desc:"",
        post_img:"https://www.verblio.com/wp-content/uploads/2018/08/bad-wedding-photo.jpg",
      },
      ]

    var posts =  <div className="PostsContainer"> {mentions.map((o,i)=>{ return <MentionPost key={i} {...o} /> })}  </div>

    var tabs = [
      {
        tabTitle:"Recent",
        type:"text",
        active:true
      },
      {
        tabTitle:"Week",
        type:"text",
        active:false
      },
      {
        tabTitle:"Month",
        type:"text",
        active:false
      },
    ]
  } 
  
  if (sectionType === "Hashtags"){
    var hashtags = [
      {
        acc_name:"lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=w55K5CRe9JEAX87YrEI&oh=e66b9e405182491672c9b64106f33aa4&oe=5F02941C",
        hashtag_img:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/83937015_1249102005278774_3812475600512058709_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=cOBFL0aiv7UAX-hB-KA&oh=e804c20e0047531b5e9b2fecec00fe35&oe=5EDC473C",
        tagTitle:'#lovenote',
      },
      {
        acc_name:"lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=w55K5CRe9JEAX87YrEI&oh=e66b9e405182491672c9b64106f33aa4&oe=5F02941C",
        hashtag_img:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/84430626_180922499905377_22612103518161646_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=A6GusN9Y6GkAX8NknXO&oh=257d978533505e6469a4972d96992f07&oe=5EC56503",
        tagTitle:'#lovenote',
      },
      ]

    var posts =  <div className="PostsContainer"> {hashtags.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>;

    var tabs = [
      {
        tabTitle:"#lovenote",
        type:"btn",
        active:true
      },
      {
        tabTitle:"#lovenotedress",
        type:"btn",
        active:false
      },
      {
        tabTitle:"#lovenotebabes",
        type:"btn",
        active:false
      },
    ]
  }

  if (sectionType === "Scheduled Posts"){
    var schedPosts = [
      {
        postImg:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/79913375_3471317989605885_5310435340422149328_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=eHlLeygdvGcAX_33EUo&oh=98c97c28f21be144a29ca215e2d4d0df&oe=5EE944D9',
        carousel:true,
        isPosted:true,
        postTime:'11:30 AM',
        postDate:'January 27, 2020',
        postDay:'Monday'
      },

      {
        postImg:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/84600966_642236706522288_5211006554179347120_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=LvtjzZDTJJAAX_lP4rZ&oh=6f7046ab59f7db66cf1af15970ad70fb&oe=5EFA5868',
        carousel:true,
        isPosted:false,
        postTime:'12:00 PM',
        postDate:'January 27, 2020',
        postDay:'Monday'
      },

      {
        postImg:'https://cdn.shopify.com/s/files/1/0125/0043/5008/collections/Lovenote-collection-accessories-banner_1024x1024.jpg?v=1574891669',
        carousel:true,
        isPosted:false,
        postTime:'5:45 PM',
        postDate:'January 27, 2020',
        postDay:'Monday'
      },
      ]

    ViewTitle = "View Calendar";
    var posts =  <div className="PostsContainer"> {schedPosts.map((o,i)=>{ return <ScheduledPost key={i} {...o} /> })}  </div>;


    var tabs = [
      {
        tabTitle:"Today",
        type:"text",
        active:true
      },
      {
        tabTitle:"Week",
        type:"text",
        active:false
      },
      {
        tabTitle:"Month",
        type:"text",
        active:false
      },
    ]
  }

  if (sectionType === "Tagged"){

    var tagged = [
      {
        className:"bottom_cont hide",
        acc_name:"lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=w55K5CRe9JEAX87YrEI&oh=e66b9e405182491672c9b64106f33aa4&oe=5F02941C",
        hashtag_img:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/83937015_1249102005278774_3812475600512058709_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=cOBFL0aiv7UAX-hB-KA&oh=e804c20e0047531b5e9b2fecec00fe35&oe=5EDC473C",
        tagTitle:'#lovenote',

      },
      {
        className:"bottom_cont hide",
        acc_name:"lovenotebride",
        user_icon:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_ohc=w55K5CRe9JEAX87YrEI&oh=e66b9e405182491672c9b64106f33aa4&oe=5F02941C",
        hashtag_img:"https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/84430626_180922499905377_22612103518161646_n.jpg?_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=A6GusN9Y6GkAX8NknXO&oh=257d978533505e6469a4972d96992f07&oe=5EC56503",
        tagTitle:'#lovenote',
      },
      ]

    ViewTitle = "View Calendar";
    var posts =  <div className="PostsContainer"> {tagged.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  </div>;

    var tabs = [
      {
        tabTitle:"Today",
        type:"text",
        active:true
      },
      {
        tabTitle:"Week",
        type:"text",
        active:false
      },
      {
        tabTitle:"Month",
        type:"text",
        active:false
      },
    ]
  }
    

    return (
    <div className="SectionContainer">
        <SectionTitle title={sectionType} buttonTitle={ViewTitle}/>
        <SectionTab tabs={tabs}/>
          {posts}
    </div>

    )
}

Section.defaultProps = {
  sectionType:"Hashtags",
  ViewTitle: "View All"

};

export default Section;