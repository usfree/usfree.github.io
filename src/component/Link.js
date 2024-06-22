/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

function Link() {
    const notify = () => toast('msg', {duration: 4000});
    useEffect(() => {
        //notify();
      }, []);
      return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
            <Helmet><title>링크 - starting</title></Helmet>
            <section className="bg-white-gray h-100">
                <div className="container-xxl px-4 pt-6">
                    <div className="row justify-content-center">
                        <div className="mb-5">
                        {/*<div className="font-11 text-black fw-normal fs-7"><NavLink exact to="/">Home</NavLink> <FontAwesomeIcon icon={faChevronRight}/> <NavLink exact to="/profile">Profile</NavLink></div>*/}
                            <div className="mb-5 fs-1 font-11 fw-bold2 font-letter-space-sm text-black text-uppercase">링크</div>
                            <div className=''>개편 중 입니다!</div>
                            {/*<div className="text-start">
                                <div className="h-100 font-11 text-black fs-6 font-letter-space text-uppercase mb-5 pb-5">
                                    <div className="fw-normal">Woohyun Cho</div>
                                    <div className="fw-bold2 highlight">Developer Portfolio</div>
                                </div>
                            </div>*/}
                            <div className="row row-cols-1 row-cols-xxl-1 g-4">
                                <div className="col">
                                    <div className="h-100 overflow-hidden py-2">
                                        <div className="text-black font-11 fs-5 fw-normal m-2 highlight-gradient">학력</div>
                                        <hr className="text-black"/>
                                        <div className="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up rounded-4 mx-2">
                                            <div className="col-auto text-black mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold"><a href="https://web.kangnam.ac.kr/" className='fw-opacity' target='_blank'>강남대학교</a></div>
                                                <div className="fw-light2 fs-6">경기도 용인시</div>
                                                <div className="fw-light2 fs-6 mb-3 highlight">2019. 03. - </div>
                                                <div className="fw-light2 fs-6 mb-3">
                                                    소프트웨어<span className="fw-normal"> 전공</span><br/>가상현실<span className="fw-normal"> 복수전공</span>
                                                </div>
                                            </div>
                                            <div className="col-auto text-black mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold"><a href="https://hanseong.sen.hs.kr/" className='fw-opacity' target='_blank'>한성고등학교</a></div>
                                                <div className="fw-light2 fs-6">서울시 서대문구</div>
                                                <div className="fw-light2 fs-6 mb-3 highlight">2015. 03. - 2018. 02.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="h-100 overflow-hidden py-2">
                                        <div className="text-black font-11 fs-5 fw-normal m-2 highlight-gradient">경험 / 활동</div>
                                        <hr className="text-black"/>
                                        <div className="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up rounded-4 mx-2">
                                            <div className="col-auto mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">IPP 첨단산업아카데미</div>
                                                <div className="fw-light2 text-black fs-6">강남대학교 &middot; 고용노동부 &middot; 한국산업인력공단</div>
                                                <div className="fw-light2 fs-6 mb-3 highlight">2024. 03. 04. - 2025. 02. 28.</div>
                                                <div className="fw-light2 fs-6 mb-3 text-black"><a href="https://www.motioncapture.co.kr/" target='_blank'>(주)모션테크놀로지</a> / SW개발_L5</div>
                                                {/*<div className="fw-light2 fs-7">
                                                    <a className="btn btn-sm btn-primary-round px-3 py-1 me-sm-3 fs-6" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>review　<FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                                </div>*/}   
                                            </div>
                                            <div className="col-auto mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">42Seoul LaPiscine</div>
                                                <div className="fw-light2 text-black fs-6">이노베이션아카데미</div>
                                                <div className="fw-light2 fs-6 mb-3 highlight">2023. 07. 17. - 08. 11.</div>
                                                <div className="fw-light2 fs-6">
                                                    <a className="btn btn-sm btn-dark-square px-4 py-2 me-sm-3 fs-6 fw-bold rounded-4" href="https://velog.io/@usfree/42%EC%84%9C%EC%9A%B8-%EB%9D%BC%ED%94%BC%EC%8B%A0-10%EA%B8%B0-1%EC%B0%A8-%ED%9B%84%EA%B8%B0" target='_blank'>돌아보기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="h-100 overflow-hidden py-2">
                                        <div className="text-black font-11 fs-5 fw-normal m-2 highlight-gradient">자격 / 면허</div>
                                        <hr className="text-black"/>
                                        <div className="row row-cols-lg-2 row-cols-xxl-3 p-2 font-11 card-hover-up rounded-4 mx-2">
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">웹디자인기능사</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">2022. 09. 08.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">컴퓨터그래픽스운용기능사</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">2021. 05. 07.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">워드프로세서</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">2019. 09. 13.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">GTQi(Illustrator)</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">2014. 03. 14.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">GTQ(Photoshop)</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">2013. 12. 13.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="h-100 overflow-hidden py-2">
                                        <div className="text-black font-11 fs-5 fw-normal m-2 highlight-gradient">기술 스택</div>
                                        <hr className="text-black"/>
                                        <div className="row row-cols-lg-3 p-2 font-11 card-hover-up rounded-4 mx-2">
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">C</div><span> </span>
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">C++</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">C와 C++을 사용하여 알고리즘을 작성하고 목표한 기능을 클래스를 사용하여 구현할 수 있으며, 주어진 PS문제를 해결할 수 있습니다.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">C#</div><span> </span>
                                                <div className="fw-light2 fs-6 mb-2 text-black">C# 문법을 파악하고, 제네릭 등을 활용하여 코드를 작성할 수 있습니다. </div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">UnrealEngine</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">C++을 사용하여 언리얼엔진을 활용할 수 있고, 목표한 컨텐츠를 제작하기 위해 학습중입니다.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">Unity</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">유니티를 사용해 2D, 3D 컨텐츠를 제작할 수 있고, C# 스크립트를 활용해 목표한 결과물을 구현할 수 있습니다. 현재는 유니티를 사용해 졸업작품을 제작중입니다.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">HTML5</div><span> </span>
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">CSS3</div><span> </span>
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">JavaScript</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">HTML, CSS와 JavaScript를 통해 주어진 기능을 수행하는 웹페이지를 구현할 수 있습니다.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">React</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">DOM의 구조를 알고 컴포넌트를 활용하여 SPA방식의 프론트 웹페이지를 제작할 수 있습니다.</div>
                                            </div>
                                            <div className="col-auto mb-2 p-4">
                                                <div className="fs-6 fw-light2 fw-opacity btn btn-primary-round-outline py-0 mb-2 rounded-4">Processing</div>
                                                <div className="fw-light2 fs-6 mb-2 text-black">프로세싱의 다양한 라이브러리를 사용할 수 있고, 이를 통해 인터랙티브 컨텐츠를 제작할 수 있습니다.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="h-100 overflow-hidden py-2">
                                        <div className="text-black font-11 fs-5 fw-normal m-2 highlight-gradient">알고리즘</div>
                                        <hr className="text-black"/>
                                        <div className="row row-cols-lg-2 row-cols-xxl-3 p-2 card-hover-up rounded-4 mx-2">
                                            <div className="col-auto mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">Baekjoon Online Judge</div>
                                                <div className="fw-light2 fs-7 mb-3 highlight">tlrmsjtm77</div>
                                                <div className="fw-light2 fs-6 mb-2">
                                                    <a className="btn btn-sm btn-dark-square px-4 py-2 me-sm-3 fs-6 fw-bold rounded-4" href="https://www.acmicpc.net/user/tlrmsjtm77" target='_blank'>바로가기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                            <div className="col-auto mb-2 font-11 p-4">
                                                <div className="fs-4 fw-bold fw-opacity">Codeforces</div>
                                                <div className="fw-light2 fs-7 mb-3 highlight">tlrmsjtm77</div>
                                                <div className="fw-light2 fs-6 mb-2">
                                                    <a className="btn btn-sm btn-dark-square px-4 py-2 me-sm-3 fs-6 fw-bold rounded-4" href="https://codeforces.com/profile/tlrmsjtm77" target='_blank'>바로가기　<FontAwesomeIcon icon={faArrowUp} className='rot-45deg'/></a>
                                                </div>
                                            </div>
                                            {/*<div className="col-auto mb-2 font-11">
                                                <div className="fs-5 fw-normal fw-opacity">Programmers</div>
                                                <div className="fw-light2 fs-6 mb-2 highlight">score<br/>0000</div>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
      );
    }

  export default Link;