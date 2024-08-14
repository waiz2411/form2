import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';


const Step1 = (props) => {
    // Box1
    const [boxOne, setBoxOne] = useState(() => {
        return localStorage.getItem('boxOne') === 'true';
    });
      
    const selectBoxOne = () => {
        setBoxOne(prevBoxOne => {
        const newBoxOne = !prevBoxOne;
        localStorage.setItem('boxOne', newBoxOne);
        return newBoxOne;
        });
    };

    // Box2
    const [boxTwo, setBoxTwo] = useState(() => {
        return localStorage.getItem('boxTwo') === 'true';
    });
      
    const selectBoxTwo = () => {
        setBoxTwo(prevBoxTwo => {
        const newBoxTwo = !prevBoxTwo;
        localStorage.setItem('boxTwo', newBoxTwo);
        return newBoxTwo;
        });
    };

    // Box3
    const [boxThree, setBoxThree] = useState(() => {
        return localStorage.getItem('boxThree') === 'true';
    });
      
    const selectBoxThree = () => {
        setBoxThree(prevBoxThree => {
        const newBoxThree = !prevBoxThree;
        localStorage.setItem('boxThree', newBoxThree);
        return newBoxThree;
        });
    };

    // Box4
    const [boxFour, setBoxFour] = useState(() => {
        return localStorage.getItem('boxFour') === 'true';
    });
      
    const selectBoxFour = () => {
        setBoxFour(prevBoxFour => {
        const newBoxFour = !prevBoxFour;
        localStorage.setItem('boxFour', newBoxFour);
        return newBoxFour;
        });
    };

    // Box4
    const [boxFive, setBoxFive] = useState(() => {
        return localStorage.getItem('boxFive') === 'true';
    });
      
    const selectBoxFive = () => {
        setBoxFive(prevBoxFive => {
        const newBoxFive = !prevBoxFive;
        localStorage.setItem('boxFive', newBoxFive);
        return newBoxFive;
        });
    };

    // Box6
    const [boxSix, setBoxSix] = useState(() => {
        return localStorage.getItem('boxSix') === 'true';
    });
      
    const selectBoxSix = () => {
        setBoxSix(prevBoxSix => {
        const newBoxSix = !prevBoxSix;
        localStorage.setItem('boxSix', newBoxSix);
        return newBoxSix;
        });
    };

    // Box7
    const [boxSeven, setBoxSeven] = useState(() => {
        return localStorage.getItem('boxSeven') === 'true';
    });
      
    const selectBoxSeven = () => {
        setBoxSeven(prevBoxSeven => {
        const newBoxSeven = !prevBoxSeven;
        localStorage.setItem('boxSeven', newBoxSeven);
        return newBoxSeven;
        });
    };

    // Box8
    const [boxEight, setBoxEight] = useState(() => {
        return localStorage.getItem('boxEight') === 'true';
    });
      
    const selectBoxEight = () => {
        setBoxEight(prevBoxEight => {
        const newBoxEight = !prevBoxEight;
        localStorage.setItem('boxEight', newBoxEight);
        return newBoxEight;
        });
    };
    
    let identifyError;
    let showLink;

    if(boxOne|| boxTwo|| boxThree|| boxFour|| boxFive|| boxSix|| boxSeven|| boxEight){
        identifyError = false;
        showLink = false;
    }else{
        identifyError = true;
        showLink = true;
    };

    const [error, setShowError] = useState(false);

    const Continue = () => {
      if (identifyError) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    };

    let showError;

    if(error){
        showError = true;
    }else{
        showError = false;
    }

    return (
        <div>
            <>
                <div class="page-3" id="target">
                    <div class="bg">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>

                    <div class="overlay">
                        <div class="form ">
                            {/* Step1 */}
                            <div class="display" id="Step1">
                                <div class="left-side left-1">
                                    <div class="center pt-4">
                                        <div class="margin-top-5 ">
                                            <img src="/Group 68.svg" alt="" class="left-image " />
                                        </div>
                                        <div class="text">
                                            <h3 class="mx-5 margin-top-5 left-text">
                                                Tailor Your Experience
                                                Select Your Required Services
                                            </h3>
                                            <p class="mx-5 mt-3">Tailor your experience and select the specific ECO4 services that best suit your home's needs. With a range of options available, you can create a personalized plan to maximize energy savings and comfort.</p>
                                        </div>

                                    </div>
                                </div>

                                {/* right side of form */}
                                <div class="right-side" id="Step1-right">
                                    <div class="header justify-content-center mt-0">
                                        {/* Current page */}
                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-1 center pt-0">
                                                <p class="center custom-numbers">1</p>
                                            </div>
                                            <p>Step</p>
                                        </div>

                                        <div class="line"></div>
                                        {/* other pages */}
                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-2 center pt-0">
                                                <p class="center custom-numbers">2</p>
                                            </div>
                                            <p>Step</p>
                                        </div>

                                        <div class="line"></div>

                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-2 center pt-0">
                                                <p class="center custom-numbers ">3</p>
                                            </div>
                                            <p>Step</p>
                                        </div>

                                        <div class="line"></div>

                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-2 center pt-0">
                                                <p class="center custom-numbers">4</p>
                                            </div>
                                            <p>Step</p>
                                        </div>

                                        <div class="line"></div>

                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-2 center pt-0">
                                                <p class="center custom-numbers">5</p>
                                            </div>
                                            <p>Step</p>
                                        </div>

                                        <div class="line"></div>

                                        <div class="custom-circle ">
                                            <div class="rounded-circle custom-circle-2 center pt-0">
                                                <p class="center custom-numbers">6</p>
                                            </div>
                                            <p>Step</p>
                                        </div>
                                    </div>

                                    {/* main form */}
                                    <div class=" pt-0">

                                        <div class="flex   all-boxes" id="step1-row-1">

                                            <div class="mobile-flex">

                                                <div class=" boxes-before-hover " id="step1-select-box-1">
                                                    <div className={boxOne ? 'selected-box' : 'boxes'} onClick={selectBoxOne} id="step1-box1">
                                                        <img src="/Group 1.svg" alt="" class=" image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Stop Paying to Heat the Outdoors Free Cavity Wall Insulation</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="boxes-before-hover" id="step1-select-box-2">
                                                    <div className={boxTwo ? 'selected-box' : 'boxes'} onClick={selectBoxTwo} id="step1-box2">
                                                        <img src="/Group 9.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Save Money & Go Green Your Guide to Air Source Heat Pumps</span>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>


                                            <div class="mobile-flex">

                                                <div class="boxes-before-hover" id="step1-select-box-3">
                                                    <div className={boxThree ? 'selected-box' : 'boxes'} onClick={selectBoxThree} id="step1-box3">
                                                        <img src="/Group 10.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Get a Free Boiler Upgrade & Slash Your Bills</span>
                                                        </p>
                                                    </div>
                                                </div>


                                                <div class="boxes-before-hover" id="step1-select-box-4">
                                                    <div className={boxFour ? 'selected-box' : 'boxes'} onClick={selectBoxFour} id="step1-box4">
                                                        <img src="/Group.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Slash Your Energy Bills with Solar Power</span>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>


                                        <div class="flex all-boxes" id="step1-row-2">

                                            <div class="mobile-flex">

                                                <div class="boxes-before-hover" id="step1-select-box-5">
                                                    <div className={boxFive ? 'selected-box' : 'boxes'} onClick={selectBoxFive} id="step1-box5">
                                                        <img src="/Vector.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Banish Drafts & Chills Invest in Loft Insulation</span>
                                                        </p>
                                                    </div>
                                                </div>


                                                <div class="boxes-before-hover" id="step1-select-box-6">
                                                    <div className={boxSix ? 'selected-box' : 'boxes'} onClick={selectBoxSix} id="step1-box6">
                                                        <img src="/Group 11.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Get Warm! Install First-Time Central Heating</span>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="mobile-flex">

                                                <div class="boxes-before-hover" id="step1-select-box-7">
                                                    <div className={boxSeven ? 'selected-box' : 'boxes'} onClick={selectBoxSeven} id="step1-box7">
                                                        <img src="/_x32_4_Bricks.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Warm Home, No Cost Claim Your Free Solid Wall Insulation</span>
                                                        </p>
                                                    </div>
                                                </div>


                                                <div class="boxes-before-hover" id="step1-select-box-8">
                                                    <div className={boxEight ? 'selected-box' : 'boxes'} onClick={selectBoxEight} id="step1-box8">
                                                        <img src="/Last Group.svg" alt="" class="image-padding" />
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Maximize Savings & Comfort with Eco4 Measures</span>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>


                                        <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'} id="error1">
                                            <p>Please select any option</p>
                                        </div>

                                        <div className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'} id="button1">
                                            <p class="form-button">
                                                <button type="button" className={showLink ? 'btn  custom-button-of-form' : 'd-none'} onClick={Continue} id="go-to-Step2">
                                                    <a class="text-white text-decoration-none">Continue</a>
                                                </button>
                                                <Link to="/step2" className={showLink ? 'd-none' : ''}>
                                                    <button type="button" class="btn  custom-button-of-form" onClick={Continue} id="go-to-Step2">
                                                        <a class="text-white text-decoration-none">Continue</a>
                                                    </button>
                                                </Link>
                                                
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </div>
    )
}

export default Step1
