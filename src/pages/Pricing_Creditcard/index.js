import React from 'react';
import Logo from '../../comps/Logo';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import standardImg from '../../assets/artwork/standard.svg';
import teamImg from '../../assets/artwork/team.svg';

import {loadStripe} from '@stripe/stripe-js';
import { CardElement, ElementsConsumer, Elements, useStripe, useElements } from '@stripe/react-stripe-js';


var style = {
    base:{
        color:"#FAD"
    }
}

const Billing_Cycle = (price, cycle) => {
    return (
        <div>

        </div>
    )
}

function StripForm({}){

    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        //communicate with Stripe based on the card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        });

        if(error){
            console.log(error);
        } else {
            console.log("payment", paymentMethod);

        //fetch server to get the ClientSecret
        const clientSecret = await fetch("http://localhost:8888/pay.php");

            //user server secret to communicate back to stripe
            const data = stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod
            });
            
            if(data.success){
                //unlock the feature!!!!!!!!!
            }
        };
    }

    return(
        <form onSubmit={Pay}>
            <CardElement options={{
                style:style
            }} />
            <button type="submit">Pay Transcation</button>
        </form>
    )
}

const stripePromise = loadStripe('pk_test_M4w7UVEd0KgtgV3OCSARBX0Z00HYYRcdRV');


function Pricing_Creaditcard(){


    var plan = "team";
    var planName, planDetails, planDesc, planImg;
    if(plan === "standard"){
        planName = "Standard";
        planDetails = (
            <div className="pricing-credit-plan-details">
                <ul className="plan-detail-container" style={{marginRight:"20px"}}>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Up to 10 Hashtags</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                </ul>
                <ul className="plan-detail-container">
                    <li className="plan-details"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                </ul>
            </div>
        );
        planDesc = (
            <div className="pricing-credit-plan"><h1><div>{planName}</div>&nbsp; |</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>For small and medium<br/>sized businesses</span></div>
        )
        planImg = standardImg;
    }else if(plan === "team"){
        planName = "Team";
        planDetails = (
            <div className="pricing-credit-plan-details">
                <ul className="plan-detail-container" style={{marginRight:"20px"}}>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Up to 30 Hashtags</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Planner/Schduled Posts</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> In-Depth Post Analytics</li>
                </ul>
                <ul className="plan-detail-container">
                    <li className="plan-details"><CheckIcon className="checkIcon" /> 24/7 Customer Service Support</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Image/Story Post Templates</li>
                    <li className="plan-details"><CheckIcon className="checkIcon" /> Unlimited Administrators</li>
                </ul>
            </div>
        );
        planDesc = (
            <div className="pricing-credit-plan"><h1><div>{planName}</div>&nbsp; |</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>For large businesses, teams, <br/>and multiple social media<br/>profiles/accounts.</span></div>
        );
        planImg = teamImg;
    }

    return(
        <div className="pricing-credit-container">
            <div className="pricing-credit-left">
                <header>
                    <Logo color="#D78D8C" />
                </header>
                <main>
                    <h1>Plan Details</h1>
                    {planDesc}
                    {planDetails}
                </main>
                <footer>
                    <img src={planImg} alt="standardImg" className="plan-img" />
                </footer>
            </div>
            <div className="pricing-credit-right">
                <div className="view-all-container"><span><ChevronLeftIcon /> View all plans</span></div>
                <header><h1>Payment Information</h1></header>
                <main>
                    <form>
                        <label><h3>Billing Cycle*</h3></label>
                        <div>
                            <h6>Billed Annually</h6>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

    export default Pricing_Creaditcard;