import React from 'react';
import Logo from '../../comps/Logo';
import PageTitle from '../../comps/PageTitle';
import PickHashTag from '../../comps/PickHashTag';

function SignUp_Hashtag(){
    return(
        <div className="signup_hashtag_container">
            <Logo color="#D78D8C" justifycontent="left" />
            <div className="signup_hashtag_content">
                <PageTitle />
                <div className="signup_hashtag_recommended">
                    <div className="recommended_text">Recommended for you</div>
                    <div className="recommended_pics">
                        <div className="pics_row">
                            <PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag />
                        </div>
                        <div className="pics_row">
                            <PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag /><PickHashTag />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp_Hashtag;