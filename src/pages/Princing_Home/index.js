import React, {useState} from 'react';

import CheckIcon from '@material-ui/icons/Check';
import Switch from '@material-ui/core/Switch';
import Logo from '../../comps/Logo';

function Pricing_Home(){

    const [checked, Setchecked] = useState(false);

    var MonthlyColor, AnnuallyColor, StandardPrice, TeamPrice, SavePlanDisplay;

    if(checked){
        AnnuallyColor = "black";
        MonthlyColor = "#B8B8B8";
        StandardPrice = "16";
        TeamPrice = "40"
        SavePlanDisplay = "block"
    }else{
        AnnuallyColor = "#B8B8B8";
        MonthlyColor = "black";
        StandardPrice = "19";
        TeamPrice = "48"
        SavePlanDisplay = "none"
    }

    return(
        <div className="pricing-home-container">
            <header className="pricing-home-top">
                <Logo color="#D78D8C" />
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
                        <div className="plan-price"><font className="plan-price-dollar">$</font><font className="plan-price-number">{StandardPrice}<font className="plan-price-month">/mo</font></font></div>
                        <div className="plan-save" style={{display:SavePlanDisplay}}>Save $36 a year!</div>
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
                        <div className="plan-price"><font className="plan-price-dollar">$</font><font className="plan-price-number">{TeamPrice}<font className="plan-price-month">/mo</font></font></div>
                        <div className="plan-save" style={{display:SavePlanDisplay}}>Save $86 a year!</div>
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
                <div><font color={MonthlyColor}>MONTHLY</font><Switch checked={checked} onChange={()=>{Setchecked(!checked)}} color="default" /> <font color={AnnuallyColor}>ANNUALLY</font> <span style={{color:"#00E492",marginLeft:"10px"}}>(15% Discount)</span></div>
                <div style={{marginTop:"20px"}}>Learn more about our <span style={{fontFamily:"TT Commons Bold"}}>Terms & Conditions</span></div>
            </footer>
        </div>
    )
}

export default Pricing_Home;