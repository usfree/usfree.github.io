import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowRight, faCircleArrowUp, faCircleNodes, faClone, faLightbulb, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

function HomeSection3() {

    return (
    <div>
        <div id="intro">
            <div class="bg-white-gray">
                <div class="container-xxl px-3 h-100 pt-7">
                    <div class="s-intro">
                        <div class="mb-4 fs-1 pe-4 text-black">
                            <FontAwesomeIcon icon={faClone}/> 추구하는 목표와 가치
                        </div>
                        <div class="row row-cols-lg-3 row-cols-1">
                            <Fade left delay={200}>
                                <div class="col col-lg-4 mb-3 ">
                                    <div class="col">
                                        <div class="img-fluid mb-3">
                                            <div class="col">
                                                <div class="card card-cover-sec2-1 h-100 overflow-hidden text-only-black card-border-0 rounded-4">
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                        <span class="mb-2 fs-0-5 lh-1 fw-bold font-11 text-start mb-6 p-4">창의력</span>
                                                        <span class="mb-2 fs-0 lh-1 fw-bold font-11 text-center mb-6 p-1"><FontAwesomeIcon icon={faCircleNodes}/></span>
                                                        <span class="text-start fw-bold fs-5 mb-3 p-4">창의력은 혁신을 그리고, 모든 일에 필요합니다.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left delay={400}>
                                <div class="col col-lg-4 mb-3 ">
                                    <div class="col">
                                        <div class="img-fluid mb-3">
                                            <div class="col">
                                                <div class="card card-cover-sec2-2 h-100 overflow-hidden text-only-black card-border-0 rounded-4">
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                        <span class="mb-2 fs-0-5 lh-1 fw-bold font-11 text-start mb-6 p-4">상상력</span>
                                                        <span class="mb-2 fs-0 lh-1 fw-bold font-11 text-center mb-6 p-1"><FontAwesomeIcon icon={faWandMagicSparkles}/></span>
                                                        <span class="text-start fw-bold fs-5 mb-3 p-4">상상력은 사람을 만들고 조각합니다.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left delay={600}>
                                <div class="col col-lg-4 mb-3 ">
                                    <div class="col">
                                        <div class="img-fluid mb-3">
                                            <div class="col">
                                                <div class="card card-cover-sec2-3 h-100 overflow-hidden text-only-black card-border-0 rounded-4">
                                                    <div class="d-flex flex-column h-100 p-4 pb-3 card-overtext">
                                                        <span class="mb-2 fs-0-5 lh-1 fw-bold font-11 text-start mb-6 p-4">혁신</span>
                                                        <span class="mb-2 fs-0 lh-1 fw-bold font-11 text-center mb-6 p-1"><FontAwesomeIcon icon={faLightbulb}/></span>
                                                        <span class="text-start fw-bold fs-5 mb-3 p-4">혁신적인 생각으로 꾸준히 발전하겠습니다.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

  export default HomeSection3;