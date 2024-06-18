/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://usfree.site
*/

import React, { useState, useEffect } from 'react';
import icon1 from '../../images/ic-lightmode-w.svg';
import icon2 from '../../images/ic-darkmode.svg';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.dataset.darkmode = 'on';
            localStorage.setItem('darkmode', 'on');
        } else {
            document.body.dataset.darkmode = 'off';
            localStorage.setItem('darkmode', 'off');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="wrap">
            <div className="darkmode">
                <div className="inner">
                    <input type="checkbox" id="toggle-dark-mode" checked={darkMode} onChange={toggleDarkMode} />
                    <label htmlFor="toggle-dark-mode" className="darkmode-toggle fs-5">
                        <img src={darkMode ? icon1 : icon2} alt="Dark mode toggle" className="dark-mode-icon" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default DarkModeToggle;