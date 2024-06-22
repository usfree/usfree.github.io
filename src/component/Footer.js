/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://starting.run
*/

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
const MoveToTop = () => {
  // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

return (
  <header>
    <div>
      <div id="topbtn" className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" onClick={MoveToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
        </a>
      </div>
      <div id="normalfooter" className="bg-only-white-gray py-4 mt-auto">
      <hr className="text-black pb-5"/>
        <div className="container-xxl px-4 text-black font-11">
            <div className="text-start mb-5 fs-6">
              <div className="mb-2"><Link className="pe-5" exact='true' to="/" title="메인" onClick={MoveToTop}>메인　　</Link>
                <a className="pe-5" href="https://github.com/starting-run" title="Github" target='_blank'> 깃허브 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a>
                <a className="" href="https://www.acmicpc.net/user/tlrmsjtm77" title="Baekjoon" target='_blank'> 백준 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a></div>
              <div className="mb-2"><Link className="pe-5" exact='true' to="/profile" title="프로필">프로필　</Link>
                <a className="pe-5" href="https://velog.io/@usfree" title="Blog" target='_blank'> 블로그 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a>
                <a className="" href="https://codeforces.com/profile/tlrmsjtm77" title="Codeforces" target='_blank'> 코드포스 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a></div>
              <div className="mb-2"><Link className="pe-5" exact='true' to="/project" title="프로젝트">프로젝트</Link>
                <a className="" href="mailto:ploris576@kangnam.ac.kr?subject=starting.run에서 보내는 메일입니다." title="Mail" target='_blank'> 메일 <FontAwesomeIcon icon={faArrowUp} className='rot-45deg fs-7'/></a></div>
            </div>
            <div className="col-auto font-11">
              <div className="smaller m-0 text-black mb-1">본 사이트는 개인 포트폴리오용으로 제작되었습니다.</div>
              <div className="smaller m-0 text-black mb-3">&copy; Woohyun Cho(starting). All rights reserved.</div>
            </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Footer;