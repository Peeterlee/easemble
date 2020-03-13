import React from 'react';
import UserAvatar from '../../comps/UserAvatar';
import CheckIcon from '@material-ui/icons/Check';
import Switch from '@material-ui/core/Switch';


function Pricing_Home(){
    return(
        <div className="pricing-home-container">
            <header className="pricing-home-top">
                <UserAvatar class_name="avatar_pricing" user_icon="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/s320x320/44830262_283764312257453_2342436053266202624_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=w55K5CRe9JEAX_Ll8kM&oh=2509ee9ed425a025e9a644f25297cc46&oe=5F02941C" />
            </header>
            <main className="pricing-home-bottom">
                <section className="pricing-home-bottom-title">Select a Plan that's Right for You</section>
                <section className="pricing-home-bottom-plan-container">
                    <article className="pricing-home-bottom-plans">
                        <header>STARTER</header>
                        <div className="plan-free">Free!</div>
                        <p>Free forever and provides you with all your basic needs</p>
                        <div className="hr"></div>
                        <ul className="plan-limit-container">
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Up to 3 Hashtags</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Planner/Instant Posts</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                        </ul>
                        <button className="plan-buttons">Create Account</button>
                    </article>
                    <article className="pricing-home-bottom-plans">
                        <div className="plan-popular">MOST POPULAR</div>
                        <header>STANDARD</header>
                        <div className="plan-price"><font className="plan-price-dollar">$</font><font className="plan-price-number">16<font className="plan-price-month">/mo</font></font></div>
                        <div className="plan-save">Save $36 a year!</div>
                        <p>For small and medium-sized businesses</p>
                        <div className="hr"></div>
                        <ul className="plan-limit-container">
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Up to 10 Hashtags</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                        </ul>
                        <button className="plan-buttons">Select Standard</button>
                    </article>
                    <article className="pricing-home-bottom-plans">
                        <header>TEAM</header>
                        <div className="plan-price"><font className="plan-price-dollar">$</font><font className="plan-price-number">40<font className="plan-price-month">/mo</font></font></div>
                        <div className="plan-save">Save $86 a year!</div>
                        <p>For larger businesses, teams, and multiple social media profiles</p>
                        <div className="hr"></div>
                        <ul className="plan-limit-container">
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Up to 30 Hashtags</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                            <li className="plan-limits"><CheckIcon className="checkIcon" /> Unlimited Administrators</li>
                        </ul>
                        <button className="plan-buttons">Select Team</button>
                    </article>
                </section>
            </main>
            <footer>
                <div><font>MONTHLY</font><Switch color="default" /> <font>ANNUALLY</font> <span>(15% Discount)</span></div>
                <div>Learn more about our Terms & Conditions</div>
            </footer>
        </div>
    )
}

export default Pricing_Home;