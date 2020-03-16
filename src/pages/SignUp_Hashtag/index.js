import React from 'react';
import Logo from '../../comps/Logo';
import PageTitle from '../../comps/PageTitle';
import { NavLink } from 'react-router-dom';
import PickHashTag from '../../comps/PickHashTag';
import Button from '../../comps/Button';
import {connect} from 'react-redux';

function SignUp_Hashtag({hashtag_amount}){

    

    var pick_hashtag = [
        {
            tag_img:'https://cdn0.weddingwire.ca/img_r_10570/0/7/5/0/r10_2x_50_10570.jpg',
            hashtag:'lovenote'
        },
        {
            tag_img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-3462-1-1576693070.jpg?crop=1.00xw:0.803xh;0,0.181xh&resize=640:*',
            hashtag:'lovenotebridal'
        },
        {
            tag_img:'https://www.realweddings.ca/media/image/189768_max.png',
            hashtag:'lovenotebabes'
        },
        {
            tag_img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F36%2F2019%2F07%2F19074904%2Faerielle-dylan-wedding-couple-kissing-forehead-0219.jpg&q=85',
            hashtag:'dresscuts'
        },
        {
            tag_img:'https://cochraneranchehouse.ca/wp-content/uploads/2019/10/KellyMike-343.jpg',
            hashtag:'bridalshop'
        },
        {
            tag_img:'https://harthouse.ca/assets/images/uploads/spaces/hh-wedding-TM-409.jpg',
            hashtag:'bridemaids'
        },
        {
            tag_img:'https://shawglobalnews.files.wordpress.com/2017/05/destination2.jpg?quality=70&strip=all&w=720',
            hashtag:'weddinghair'
        },
        {
            tag_img:'https://cdn.cnn.com/cnnnext/dam/assets/190930171110-spokane-wedding-snow-storm.jpg',
            hashtag:'weddingday'
        },
        {
            tag_img:'https://assets.marthastewartweddings.com/styles/wmax-350/d41/allie-joe-italy-wedding-ceremony-414-0119/allie-joe-italy-wedding-ceremony-414-0119_sq.jpg?itok=DrvYpSMZ',
            hashtag:'weddingshoes'
        },
        {
            tag_img:'https://harthouse.ca/assets/images/uploads/spaces/MK-Wedding-by-Revel-Photography-204.jpg',
            hashtag:'lovenotedress'
        },
        {
            tag_img:'https://cdn0.weddingwire.ca/img_e_5103/5/1/0/3/r10_2x_asyouwishweddings-rustic-luxe-winter-wedding-owen-sound-serenity-cottage-43_50_5103.jpg',
            hashtag:'brides'
        },
        {
            tag_img:'https://ideas.staticsfly.com/ideas/wp-content/uploads/2018/04/small-wedding-ideas-backyard.jpg',
            hashtag:'brideandgroom'
        }
    ]

    var button_bgcolor = '#E0E0E0',
    button_txtcolor = '#939393'

        
    var DoneButton = <Button text="Done" bgcolor={button_bgcolor} fontColor={button_txtcolor} radius="10px" padding="10px 130px 10px 130px" />;

    if(hashtag_amount === 3){
        button_bgcolor = '#D78D8C';
        button_txtcolor = 'white';
     var DoneButton = ( <NavLink style={{textDecoration:'none'}} to="/"> <Button text="Done" bgcolor={button_bgcolor} fontColor={button_txtcolor} radius="10px" padding="10px 130px 10px 130px" /> </NavLink>);
    }else {
        button_bgcolor = '#E0E0E0';
        button_txtcolor = '#939393'
    }

    return(
        <div className="signup_hashtag_container">
            <div className="logo_container">
                <Logo color="#D78D8C" justifycontent="left" />
            </div>
            <div className="signup_hashtag_content">
                <PageTitle title="welcome"  message="Lets get started by choosing hashtags you'd like to track. Pick 3 Hashtags (You can edit this later)" user="@Love Note" />
                <div className="signup_hashtag_recommended">
                    <div className="recommended_text">Recommended for you</div>
                    <div className="recommended_pics">
                        {
                            pick_hashtag.map((o,i)=>{
                                return <PickHashTag key={i} {...o} />
                            })
                        }
                    </div>

                    {DoneButton}
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hashtag_amount:state.hashtag_amount
    }
}

export default connect(mapStateToProps)(SignUp_Hashtag);