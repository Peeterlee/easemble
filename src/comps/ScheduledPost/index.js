import React from 'react';
import CarouselImg from '../../assets/Icons/carousel.svg';

function ScheduledPost({postImg, postTime, isPosted, postDate, postDay, carousel, }){
    
    var timeStyle = "time_current";
    var carouselClass = "showCarousel";

    if (isPosted === true) {
        timeStyle = "time_past";
    } else {
        timeStyle = "time_current";
    }

    if (carousel === true ) {
        carouselClass = "showCarousel"
    } else {
        carouselClass = "hideCarousel"
    }

    return(
        <div className="sched_post_cont">

            <div className="img_cont">
                <img alt="scheduled-post-img" src={postImg} />
            </div>
            <div className="time_cont">
                <p className={timeStyle}>{postTime}</p>
            </div>
            

            <div className="sched_overlay">
                <div className="dateCont">
                    <p className="p_day">{postDay}</p>
                    <p className="p_date">{postDate}</p>
                </div>
                <div className="carouselCont">
                    <img src={CarouselImg} className={carouselClass} alt="carousel"></img>
                </div>
            </div>

        </div>
    )

    
}


ScheduledPost.defaultProps = {
    carousel:false,
    postTime:'11:30 AM',
    isPosted:false,
    postImg:'https://www.okea.org/wp-content/uploads/2019/10/placeholder.png',
    postDate:'January 27, 2020',
    postDay:'Monday'
}


export default ScheduledPost;