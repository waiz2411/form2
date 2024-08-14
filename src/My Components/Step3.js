import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Step3 = () => {

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
                        {/* Step3 */}
                        <div class="d-flex" id="Step3">
                            <div class="left-side left-2">
                                <div class="center pt-4">
                                    <Link to={"/step2"}>    
                                        <div class="backicon mx-5" id="back-to-page1">
                                            <img src="/Back Arrow.svg" alt=""/>
                                        </div>
                                    </Link>
                                    <div class="margin-top-5 ">
                                        <img src="/Group 215.svg" alt="" class="left-image "/>
                                    </div>
                                    <div class="text">
                                        <h3 class="mx-5 margin-top-5 left-text">
                                            Tell Us About Your Housing Situation?
                                        </h3>
                                        <p class="mx-5 mt-3">Understanding your home's setup is key to unlocking the perfect ECO4 solutions.  Answer a few quick questions to assess your current energy efficiency and identify the upgrades that can make the biggest impact for your comfort and savings.</p>
                                    </div>

                                </div>
                            </div>

                            {/* right side of form */}
                            <div class="right-side  " id="Step3-right">
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

                                    <div class="flex   all-boxes" id="step3-row-1">

                                        <div class="mobile-flex">

                                            <Link to={"/step4"} style={{ textDecoration: 'none' }}>
                                                <div class=" boxes-before-hover " id="step3-select-box-1">
                                                    <div  className={boxOne ? 'selected-box' : 'boxes'} onClick={selectBoxOne} id="step3-box1">
                                                        <img src="/Group12.svg" alt="" class=" image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Yes I am a house owner</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                            <Link to={"/step4"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step3-select-box-2">
                                                    <div className={boxTwo ? 'selected-box' : 'boxes'} onClick={selectBoxTwo} id="step3-box2">
                                                        <img src="/Group13.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">I am a landlord with multiple properties</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                        </div>

                                        <div class="single-box">
                                            <Link to={"/step4"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step3-select-box-3">
                                                    <div className={boxThree ? 'selected-box' : 'boxes'} onClick={selectBoxThree} id="step3-box3">
                                                        <img src="/Group14.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">I am renting in a building</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>




                                    </div>



                                    <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'} id="error3">
                                        <p>Please select any option</p>
                                    </div>

                                    <div className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'} id="button3">
                                        <p class="form-button">
                                            <button type="button" class="btn  custom-button-of-form" onClick={Continue} id="go-to-Step4">
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

export default Step3
