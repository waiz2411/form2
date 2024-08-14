import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Step2 = () => {

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
                        {/* Step2 */}
                        <div class="d-flex" id="Step2">
                            <div class="left-side left-2">
                                <div class="center pt-4">
                                    <Link to={"/"}>

                                        <div class="backicon mx-5" id="back-to-page1">
                                            <img src="/Back Arrow.svg" alt=""/>
                                        </div>
                                    </Link>
                                    <div class="margin-top-5 ">
                                        <img src="/Group16.svg" alt="" class="left-image "/>
                                    </div>
                                    <div class="text">
                                        <h3 class="mx-5 margin-top-5 left-text">
                                            What's Your Home Setup Like?
                                        </h3>
                                        <p class="mx-5 mt-3">Understanding your home's setup is key to unlocking the perfect ECO4 solutions.
                                            Answer a few quick questions to assess your current energy efficiency and identify the upgrades that can
                                            make the biggest impact for your comfort and savings.</p>
                                    </div>

                                </div>
                            </div>

                            {/* right side of form */}
                            <div class="right-side  " id="Step2-right">
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

                                    <div class="flex   all-boxes" id="step2-row-1">

                                        <div class="mobile-flex">

                                            <Link to={"/step3"} style={{ textDecoration: 'none' }}>
                                                <div class=" boxes-before-hover " id="step2-select-box-1">
                                                    <div className={boxOne ? 'selected-box' : 'boxes'} onClick={selectBoxOne} id="step2-box1">
                                                    <img src="/Group 1.svg" alt="" class=" image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Detached House :</span>
                                                            <span class="step2-span2">A standalone with no shared walls.</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                            <Link to={"/step3"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step2-select-box-2">
                                                    <div className={boxTwo ? 'selected-box' : 'boxes'} onClick={selectBoxTwo} id="step2-box2">
                                                        <img src="/Group 9.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Semi-Detached House :</span>
                                                            <span class="step2-span2"> A house that shares one wall with a neighbouring property</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                        </div>


                                        <div class="mobile-flex">

                                            <Link to={"/step3"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step2-select-box-3">
                                                    <div className={boxThree ? 'selected-box' : 'boxes'} onClick={selectBoxThree} id="step2-box3">
                                                        <img src="/Group 10.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Terraced House :</span>
                                                            <span class="step2-span2">A house within a row of houses, sharing walls on both sides</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>


                                            <Link to={"/step3"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step2-select-box-4">
                                                    <div className={boxFour ? 'selected-box' : 'boxes'} onClick={selectBoxFour} id="step2-box4">
                                                        <img src="/Group.svg" alt="" class="image-padding"/>
                                                        <p class="text-padding">
                                                            <span class="step2-span1">Flat / Apartment :</span>
                                                            <span class="step2-span2">A self-contained living space within a larger building, usually on a
                                                                single level
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>




                                    </div>

                                    <div class="flex   all-boxes" id="step1-row-2">

                                        <div class="single-box">
                                            <Link to={"/step3"} style={{ textDecoration: 'none' }}>
                                                <div class="boxes-before-hover" id="step2-select-box-5">
                                                    <div className={boxFive ? 'selected-box' : 'boxes'} onClick={selectBoxFive} id="step2-box5">
                                                        <img src="/Vector.svg" alt="" class="image-padding"/>
                                                            <p class="text-padding">
                                                                <span class="step2-span1">Bungalow :</span>
                                                                <span class="step2-span2"> A single-story house</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>





                                    <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'} id="error">
                                        <p>Please select any option</p>
                                    </div>

                                    <div className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'} id="button2">
                                        <p class="form-button">
                                            <button type="button" className='btn  custom-button-of-form' onClick={Continue} id="go-to-Step3">
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

export default Step2
