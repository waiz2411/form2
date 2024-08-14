import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Step6 = () => {

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

    if(boxOne|| boxTwo|| boxThree|| boxFour|| boxFive|| boxSix|| boxSeven|| boxEight){
        identifyError = false;
    }else{
        identifyError = true;
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
        <>
            <div class="page-3" id="target">
                <div class="bg">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>

                <div class="overlay">
                    <div class="form ">
                        {/* Step6 */}
                        <div class="d-flex" id="Step6">
                            <div class="left-side left-2">
                                <div class="center pt-4">
                                    <Link to={"/step5"}>
                                        <div class="backicon mx-5" id="back-to-page1">
                                            <img src="/Back Arrow.svg" alt=""/>
                                        </div>
                                    </Link>
                                    <div class="margin-top-5">
                                        <img src="/Group 217.svg" alt="" class="left-image "/>
                                    </div>
                                    <div class="text">
                                        <h3 class="mx-5 margin-top-5 left-text">
                                            Do you receive any benefits?
                                        </h3>
                                        <p class="mx-5 mt-3">Understanding your home's setup is key to unlocking the perfect ECO4 solutions.  Answer a few quick questions to assess your current energy efficiency and identify the upgrades that can make the biggest impact for your comfort and savings.</p>
                                    </div>

                                </div>
                            </div>

                            {/* right side of form */}
                            <div class="right-side  " id="Step6-right">
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
                                        <div class="rounded-circle custom-circle-1 center pt-0">
                                            <p class="center custom-numbers">2</p>
                                        </div>
                                        <p>Step</p>
                                    </div>

                                    <div class="line"></div>

                                    <div class="custom-circle ">
                                        <div class="rounded-circle custom-circle-1 center pt-0">
                                            <p class="center custom-numbers ">3</p>
                                        </div>
                                        <p>Step</p>
                                    </div>

                                    <div class="line"></div>

                                    <div class="custom-circle ">
                                        <div class="rounded-circle custom-circle-1 center pt-0">
                                            <p class="center custom-numbers">4</p>
                                        </div>
                                        <p>Step</p>
                                    </div>

                                    <div class="line"></div>

                                    <div class="custom-circle ">
                                        <div class="rounded-circle custom-circle-1 center pt-0">
                                            <p class="center custom-numbers">5</p>
                                        </div>
                                        <p>Step</p>
                                    </div>

                                    <div class="line"></div>

                                    <div class="custom-circle ">
                                        <div class="rounded-circle custom-circle-1 center pt-0">
                                            <p class="center custom-numbers">6</p>
                                        </div>
                                        <p>Step</p>
                                    </div>
                                </div>

                                {/* main form */}
                                <div class=" pt-0">

                                    <div class="flex   all-boxes" id="step6-row-1">

                                        <div class="mobile-flex">
                                            <div class=" boxes-before-hover " id="step6-select-box-1">
                                                <div className={boxOne ? 'selected-box' : 'boxes'} onClick={selectBoxOne} id="step6-box1">
                                                    <img src="/Group 1.svg" alt="" class=" image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Income based Job seekers allowance</span>
                                                        </p>
                                                </div>
                                            </div>

                                            <div class="boxes-before-hover" id="step6-select-box-2">
                                                <div className={boxTwo ? 'selected-box' : 'boxes'} onClick={selectBoxTwo} id="step6-box2">
                                                    <img src="/Group 9.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Income related Employment & Support Allowance</span>
                                                        </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="mobile-flex">
                                            <div class="boxes-before-hover" id="step6-select-box-3">
                                                <div className={boxThree ? 'selected-box' : 'boxes'} onClick={selectBoxThree} id="step6-box3">
                                                    <img src="/Group 10.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Income Support</span>
                                                        </p>
                                                </div>
                                            </div>


                                            <div class="boxes-before-hover" id="step6-select-box-4">
                                                <div className={boxFour ? 'selected-box' : 'boxes'} onClick={selectBoxFour} id="step6-box4">
                                                    <img src="/Group.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Pension Credit Guarantee</span>
                                                        </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                    <div class="flex  all-boxes" id="step1-row-2">

                                        <div class="mobile-flex">
                                            <div class=" boxes-before-hover " id="step6-select-box-5">
                                                <div className={boxFive ? 'selected-box' : 'boxes'} onClick={selectBoxFive} id="step6-box5">
                                                    <img src="/Group 1.svg" alt="" class=" image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Working Tax Credit</span>
                                                        </p>
                                                </div>
                                            </div>

                                            <div class="boxes-before-hover" id="step6-select-box-6">
                                                <div className={boxSix ? 'selected-box' : 'boxes'} onClick={selectBoxSix} id="step6-box6">
                                                    <img src="/Group 9.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Child Tax Credit</span>
                                                        </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="mobile-flex">
                                            <div class="boxes-before-hover" id="step6-select-box-7">
                                                <div className={boxSeven ? 'selected-box' : 'boxes'} onClick={selectBoxSeven} id="step6-box7">
                                                    <img src="/Group 10.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Universal Credit</span>
                                                        </p>
                                                </div>
                                            </div>


                                            <div class="boxes-before-hover" id="step6-select-box-8">
                                                <div className={boxEight ? 'selected-box' : 'boxes'} onClick={selectBoxEight} id="step6-box8">
                                                    <img src="/Group.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Housing Benefit</span>
                                                        </p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'}  id="error6">
                                        <p>Please select any option</p>
                                    </div>

                                    <div className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'}  id="button6">
                                        <p class="form-button">
                                            <button type="button" class="btn  custom-button-of-form" onClick={Continue} id="finish">
                                                <a class="text-white text-decoration-none">Finish</a>
                                            </button>
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Step6
