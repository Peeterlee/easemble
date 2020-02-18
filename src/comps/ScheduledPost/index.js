import React from 'react';


function ScheduledPost({postImg, time, isPosted, postDate, postDay, carousel, carouselNum }){
    
    var timeStyle = "time_current";

    if (isPosted === true) {
        timeStyle = "time_past";
    } else {
        timeStyle = "time_current";
    }


    return(
        <div className="sched_post_cont">

            <div className="img_cont">
                <img alt="scheduled-post-img" src={postImg} />
            </div>
            <div className="time_cont">
                <p className={timeStyle}>{time}</p>
            </div>
            

            <div className="sched_overlay">
                <div className="dateCont">
                    <p className="p_day">{postDay}</p>
                    <p className="p_date">{postDate}</p>
                </div>
                <div className="carouselCont">
                    <img src="https://www.pngfind.com/pngs/m/56-560443_camera-icon-white-small-circle-hd-png-download.png" alt="carousel"></img>
                </div>
            </div>

        </div>
    )

    
}


ScheduledPost.defaultProps = {
    postImg:'https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/79913375_3471317989605885_5310435340422149328_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=eHlLeygdvGcAX_33EUo&oh=98c97c28f21be144a29ca215e2d4d0df&oe=5EE944D9',
    carousel:false,
    carouselNum:0,
    time:'11:30 PM',
    isPosted:false,
    postDate:'January 27, 2020',
    postDay:'Monday'
}


export default ScheduledPost;