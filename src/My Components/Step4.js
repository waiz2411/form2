import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Step4 = () => {

    const [boxOne, setBoxOne] = useState(false);
    const selectBoxOne = () => {
        setBoxOne(!boxOne);
    };

    const [boxTwo, setBoxTwo] = useState(false);
    const selectBoxTwo = () => {
        setBoxTwo(!boxTwo);
    };

    const [boxThree, setBoxThree] = useState(false);
    const selectBoxThree = () => {
        setBoxThree(!boxThree);
    };

    const [boxFour, setBoxFour] = useState(false);
    const selectBoxFour = () => {
        setBoxFour(!boxFour);
    };

    const [boxFive, setBoxFive] = useState(false);
    const selectBoxFive = () => {
        setBoxFive(!boxFive);
    };

    const [boxSix, setBoxSix] = useState(false);
    const selectBoxSix = () => {
        setBoxSix(!boxSix);
    };

    const [boxSeven, setBoxSeven] = useState(false);
    const selectBoxSeven = () => {
        setBoxSeven(!boxSeven);
    };

    const [boxEight, setBoxEight] = useState(false);
    const selectBoxEight = () => {
        setBoxEight(!boxEight);
    };

    const [showError, setShowError] = useState(false);
    const Continue = () => {
        setShowError(!showError)
    };

    return (
        <>
            <div class="page-3" id="target">
                <div class="bg">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>

                <div class="overlay">
                    <div class="form ">
                        {/* Step4 */}
                        <div class="d-flex" id="Step4">
                            <div class="left-side left-2">
                                <div class="center pt-4">
                                    <Link to={"/step3"}>
                                        <div class="backicon mx-5" id="back-to-page1">
                                            <img src="/Back Arrow.svg" alt=""/>
                                        </div>
                                    </Link>
                                    <div class="margin-top-5">
                                        <img src="/Group 216.svg" alt="" class="left-image "/>
                                    </div>
                                    <div class="text">
                                        <h3 class="mx-5 margin-top-5 left-text">
                                            How do you stay warm at home?
                                        </h3>
                                        <p class="mx-5 mt-3">Understanding your home's setup is key to unlocking the perfect ECO4 solutions.  Answer a few quick questions to assess your current energy efficiency and identify the upgrades that can make the biggest impact for your comfort and savings.</p>
                                    </div>

                                </div>
                            </div>

                            {/* right side of form */}
                            <div class="right-side  " id="Step4-right">
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

                                    <div class="flex   all-boxes" id="step4-row-1">
                                        <div class="mobile-flex">

                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class=" boxes-before-hover " id="step4-select-box-1">
                                                    <div className={boxOne ? 'selected-box' : 'boxes'} onClick={selectBoxOne} id="step4-box1">
                                                        <img src="/Group 1.svg" alt="" class=" image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Gas Central Heating :</span>
                                                            <span class="step2-span2"> using an gas boiler </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            

                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-2">
                                                    <div className={boxTwo ? 'selected-box' : 'boxes'} onClick={selectBoxTwo} id="step4-box2">
                                                        <img src="/Group 9.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">oil Central Heating :</span>
                                                            <span class="step2-span2"> using an gas boiler </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            

                                        </div>


                                        <div class="mobile-flex">
                                        
                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-3">
                                                    <div className={boxThree ? 'selected-box' : 'boxes'} onClick={selectBoxThree} id="step4-box3">
                                                        <img src="/Group 10.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Electric Heating:</span>
                                                            <span class="step2-span2">storage heaters, panel heaters, etc. </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            

                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-4">
                                                    <div className={boxFour ? 'selected-box' : 'boxes'} onClick={selectBoxFour} id="step4-box4">
                                                        <img src="/Group.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Heat Pump:</span>
                                                            <span class="step2-span2">air-source or ground-source</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            
                                        </div>


                                    </div>


                                    <div class="flex  all-boxes" id="step1-row-2">

                                        <div class="mobile-flex">

                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-5">
                                                    <div className={boxFive ? 'selected-box' : 'boxes'} onClick={selectBoxFive} id="step4-box5">
                                                        <img src="/Vector.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Biomass Boiler:</span>
                                                            <span class="step2-span2">wood pellets, logs, etc..</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-6">
                                                    <div className={boxSix ? 'selected-box' : 'boxes'} onClick={selectBoxSix} id="step4-box6">
                                                        <img src="/Vector.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">District Heating:</span>
                                                            <span class="step2-span2">if your area is connected to a network</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                        </div>

                                        <div class="mobile-flex">

                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-7">
                                                    <div className={boxSeven ? 'selected-box' : 'boxes'} onClick={selectBoxSeven} id="step4-box7">
                                                        <img src="/Vector.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Open Fireplace or Wood-Burning Stove:</span>
                                                            <span class="step2-span2">if your area is connected to a network</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                            <Link to={"/step5"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step4-select-box-8">
                                                    <div className={boxEight ? 'selected-box' : 'boxes'} onClick={selectBoxEight} id="step4-box8">
                                                        <img src="/Vector.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">None of the above</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                        </div>


                                    </div>


                                    <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'}  id="error4">
                                        <p>Please select any option</p>
                                    </div>

                                    <div className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'} id="button4">
                                        <p class="form-button">
                                            <button type="button" class="btn  custom-button-of-form" onClick={Continue} id="go-to-Step5">
                                                <a class="text-white text-decoration-none">Continue</a>
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

export default Step4
