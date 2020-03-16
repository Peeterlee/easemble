import React from 'react';
import PageTitle from '../../comps/PageTitle';
import Section from '../../comps/Section';
import Spacer from '../../comps/Spacer';



function Home({postPopupDisplay, setPostPopupDisplay}){

    return(
        <div className="dash-main-container home-container">

            <div className="home-main-container">
                    <PageTitle title="home" message="Good Afternoon" user="Love Note" />
                    <Spacer />
                    <Section sectionType="Posts" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/>
                    <Section sectionType="Hashtags" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/>
                    <Section sectionType="Tagged" postPopupDisplay={postPopupDisplay} setPostPopupDisplay={setPostPopupDisplay}/>
            </div>

        </div>
    )
}

export default Home;