import React from 'react';
import PageTitle from '../../comps/PageTitle';
import Section from '../../comps/Section';



function Home(){

    return(
        <div className="dash-main-container home-container">

            <div className="home-main-container">
                    <PageTitle title="home" message="Good Afternoon" user="Love Note" />
                    <Section sectionType="Posts"/>
                    <Section sectionType="Hashtags" isSectionExpanded={true}/>
                    <Section sectionType="Tagged"/>
            </div>

        </div>
    )
}

export default Home;