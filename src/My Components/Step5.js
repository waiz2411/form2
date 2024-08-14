import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Step5 = () => {

    const [inputValue1, setInputValue1] = useState('');
    const handleInputChange1 = (e) => {
      setInputValue1(e.target.value);
    };

    const [inputValue2, setInputValue2] = useState('');
    const handleInputChange2 = (e) => {
      setInputValue2(e.target.value);
    };

    const [inputValue3, setInputValue3] = useState('');
    const handleInputChange3 = (e) => {
      setInputValue3(e.target.value);
    };

    let identifyError = false;
    let showLink;

  
    if (inputValue1.trim() === ''|| inputValue2.trim() === ''|| inputValue3.trim() === '') {
        identifyError = false;
        showLink = true;
    } else {
        identifyError = true; 
        showLink = false;
    }

    const [error, setShowError] = useState(false);

    const Continue = () => {
      if (identifyError) {
        setShowError(false);
      } else {
        setShowError(true);
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
                        {/* Step5 */}
                        <div class="d-flex" id="Step5">
                            <div class="left-side left-1">
                                <div class="center pt-4">
                                    <Link to={"/step4"}>
                                        <div class="backicon mx-5" id="back-to-page1">
                                            <img src="/Back Arrow.svg" alt=""/>
                                        </div>
                                    </Link>
                                    <div class="margin-top-5">
                                        <img src="/Group 217.svg" alt="" class="left-image "/>
                                    </div>
                                    <div class="text">
                                        <h3 class="mx-5 margin-top-5 left-text">
                                            Add yours address details
                                        </h3>
                                        <p class="mx-5 mt-3">Understanding your home's setup is key to unlocking the perfect ECO4 solutions.  Answer a few quick questions to assess your current energy efficiency and identify the upgrades that can make the biggest impact for your comfort and savings.</p>
                                    </div>

                                </div>
                            </div>

                            {/* right side of form */}
                            <div class="right-side  " id="Step5-right">
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
                                        <div class="rounded-circle custom-circle-2 center pt-0">
                                            <p class="center custom-numbers">6</p>
                                        </div>
                                        <p>Step</p>
                                    </div>
                                </div>

                                {/* main form */}
                                <div class=" pt-0">

                                    <div class=" all-boxes" id="step2-row-1">

                                        <div>
                                            <p class="step2-span1  input-text">Enter your House Name/Number :</p>
                                        </div>
                                        <div class="input-group input-group-lg pe-4">
                                            <input type="text" class="form-control input-height" aria-label="Dollar amount (with dot and two decimal places)" value={inputValue1} onChange={handleInputChange1} id="house-number"/>
                                        </div>

                                    </div>


                                    <div class="mt-4 all-boxes " id="step2-row-1">

                                        <div>
                                            <p class="step2-span1 input-text">Enter name of your City/Town :</p>
                                        </div>
                                        <div class="input-group input-group-lg pe-4">
                                            <input type="text" class="form-control input-height" aria-label="Dollar amount (with dot and two decimal places)" value={inputValue2} onChange={handleInputChange2} id="City"/>
                                        </div>

                                    </div>


                                    <div class="mt-4 all-boxes " id="step2-row-1">

                                        <div>
                                            <p class="step2-span1 input-text">Enter your Postcode :</p>
                                        </div>
                                        <div class="input-group input-group-lg pe-4">
                                            <input type="text" class="form-control input-height" aria-label="Dollar amount (with dot and two decimal places)" value={inputValue3} onChange={handleInputChange3} id="Postcode"/>
                                        </div>

                                    </div>


                                    <div className={showError ? 'error all-boxes px-3 mt-4 d-flex' : 'error all-boxes px-3 mt-4 d-none'}  id="error5">
                                        <p class="input-text"> Please provide all information</p>
                                    </div>

                                    <div  className={showError ? 'button-before d-flex justify-content-center' : 'button-after d-flex justify-content-center'} id="button5">
                                        <p class="form-button">
                                            <button type="button" className={showLink ? 'btn  custom-button-of-form' : 'd-none'} onClick={Continue} id="go-to-Step2">
                                                <a class="text-white text-decoration-none">Continue</a>
                                            </button>
                                            <Link to="/step6" className={showLink ? 'd-none' : ''}>
                                                <button type="button" class="btn  custom-button-of-form" onClick={Continue} id="go-to-Step6">
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
    )
}

export default Step5
