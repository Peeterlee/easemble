import React, {useState} from 'react';
import PageTitle from '../../comps/PageTitle';

import InputBox from '../../comps/InputBox';
import SectionTab from '../../comps/Section/SectionTab';

import HashtagPost from '../../comps/HashtagPost';
import { HashtagTabs } from '../../data/HashtagTabs';
import { TaggedPostData } from '../../data/TaggedPostData';
import LimitMessage from '../../comps/LimitMessage';
import Spacer from '../../comps/Spacer';
import SectionTabList from '../../comps/Section/SectionTabList';

function Tagged({label}) {


    const [showLimit, setShowLimit] = useState(null);
    const [displayTagged, setDisplayTagged] = useState('flex');


    function clickTab(){
            setDisplayTagged('none');
            setShowLimit( <div className="limitPopup"> <Spacer height="50px"/> <LimitMessage type="tagged" atHome={true}/></div>);
    }

    function clickOther(){
            setDisplayTagged('flex');
            setShowLimit(null);}
    
    return (
        <div className="dash-main-container dash-s-container">

            <div className="dash-header">
                <PageTitle title="Tagged" />
                <Spacer />
                <div style={{width:'90%'}}>
                <SectionTabList onClickMonth={()=>{clickTab()}} onClickElse={()=>{clickOther()}} />
                </div>

            </div>


            <div className="dash-s-main-container">

                    <div className="dash-content-container">

                        {showLimit}

                        <div className="PostsContainer expanded" style={{display:displayTagged}}> 
                            {TaggedPostData.map((o,i)=>{ return <HashtagPost key={i} {...o} /> })}  
                        </div>
                    </div>
            </div>

        </div>
    )
}

Tagged.defaultProps = {

}

export default Tagged;