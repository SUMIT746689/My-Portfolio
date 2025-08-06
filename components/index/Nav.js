import { useEffect, useState, useRef } from 'react';
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMessage,
} from 'react-icons/ai';
import { GiSkills, GiNightSleep } from 'react-icons/gi';
import { MdOutlineLightMode, MdWorkOutline } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi';

const navLinks = [
  { href: '#home', icon: <AiOutlineHome />, label: 'Home' },
  { href: '#skills', icon: <GiSkills />, label: 'Skills' },
  { href: '#experience', icon: <MdWorkOutline />, label: 'Experience' },
  { href: '#projects', icon: <AiOutlineProject />, label: 'Projects' },
  { href: '#message', icon: <AiOutlineMessage />, label: 'Contact' },
];

const socialLinks = [
  { href: 'mailto:mehedihasansumit@gmail.com', icon: <GoMail />, label: 'Email' },
  { href: 'https://github.com/mehedihasansumit', icon: <FiGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mehedi-hasan-103621210', icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mehedi_hasan_sumit/', icon: <FiInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/mehedihasan.sumit.5', icon: <FiFacebook />, label: 'Facebook' },
];

function Nav({ changeTheme, setChangeTheme }) {
  const themeIcons = {
    system: <RiComputerLine />,
    light: <MdOutlineLightMode />,
    dark: <GiNightSleep />,
  };
  const [showThemeCard, setShowThemeCard] = useState(false);
  const [currentThemeIcon, setCurrentThemeIcon] = useState(themeIcons.system);
  const themeCardRef = useRef(null);
  const [activeLink, setActiveLink] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set active nav link based on hash in URL (and on click)
  useEffect(() => {
    const hash = window.location.hash || '#home';
    setActiveLink(hash);
    // Listen for hash changes (browser navigation)
    const onHashChange = () => setActiveLink(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'));
    if (theme === 'light') setCurrentThemeIcon(themeIcons.light);
    else if (theme === 'dark') setCurrentThemeIcon(themeIcons.dark);
    else setCurrentThemeIcon(themeIcons.system);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeCardRef.current && !themeCardRef.current.contains(event.target)) {
        setShowThemeCard(false);
      }
    };
    if (showThemeCard) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showThemeCard]);

  const themeChangeHandle = (mode) => {
    if (mode === 'light') {
      setChangeTheme(false);
      setCurrentThemeIcon(themeIcons.light);
      localStorage.setItem('theme', JSON.stringify('light'));
    } else if (mode === 'dark') {
      setChangeTheme(true);
      setCurrentThemeIcon(themeIcons.dark);
      localStorage.setItem('theme', JSON.stringify('dark'));
    } else if (mode === 'system') {
      if (typeof window !== 'undefined') {
        setChangeTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
        setCurrentThemeIcon(themeIcons.system);
        localStorage.setItem('theme', JSON.stringify('system'));
      }
    }
    setShowThemeCard(false);
  };

  const handleNavClick = (href) => {
    setActiveLink(href);
    window.location.hash = href;
    setShowThemeCard(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block fixed z-20 text-xl md:text-2xl text-blue-900 dark:text-cyan-300 w-screen md:w-fit md:h-screen pl-2 lg:pl-4">
        <ul className="flex md:flex-col gap-6 justify-center align-middle my-auto font-medium w-full md:h-full">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`group relative block p-2 mr-2 md:mx-2 my-1 cursor-pointer rounded-full shadow transition-all duration-200
                  ${activeLink === link.href
                    ? 'bg-blue-600 dark:bg-cyan-700 text-white shadow-blue-900/50 scale-105'
                    : 'bg-white/90 dark:bg-gray-800/90 text-blue-900 dark:text-cyan-300 shadow-gray-900/10 dark:shadow-gray-600/10 hover:shadow-blue-700/30 hover:scale-[1.03]'
                  }`}
              >
                <span className="flex items-center justify-center">
                  {link.icon}
                </span>
                <span className="absolute left-full ml-2 px-2 py-1 text-xs font-normal rounded text-blue-900 dark:text-cyan-300 bg-white/90 dark:bg-gray-800/90 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            </li>
          ))}

          {/* Theme selector */}
          <div
            onClick={() => setShowThemeCard((v) => !v)}
            className="relative group p-2 mr-2 md:mx-2 my-1 cursor-pointer rounded-full shadow transition-all duration-200 bg-white/90 dark:bg-gray-800/90 text-blue-900 dark:text-cyan-300 shadow-gray-900/10 dark:shadow-gray-600/10 hover:shadow-blue-700/30 hover:scale-[1.03]"
            ref={themeCardRef}
          >
            <div>{currentThemeIcon}</div>
            <span className="absolute left-full ml-2 px-2 py-1 text-xs font-normal rounded bg-white/90 dark:bg-gray-800/90 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
              Theme
            </span>
            <div
              className={`${
                showThemeCard ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              } bg-white dark:bg-gray-800 text-xs text-slate-900 dark:text-slate-300 z-50 absolute top-12 md:top-0 right-0 md:left-12 w-28 rounded-lg overflow-hidden shadow transition-all duration-150 origin-top`}
            >
              <div
                onClick={() => themeChangeHandle('light')}
                className="flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer px-3 py-1.5 font-medium transition-colors duration-150"
              >
                <MdOutlineLightMode className="mr-2 text-sm" />
                Light
              </div>
              <div
                onClick={() => themeChangeHandle('dark')}
                className="flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer px-3 py-1.5 font-medium transition-colors duration-150"
              >
                <GiNightSleep className="mr-2 text-sm" />
                Dark
              </div>
              <div
                onClick={() => themeChangeHandle('system')}
                className="flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer px-3 py-1.5 font-medium transition-colors duration-150"
              >
                <RiComputerLine className="mr-2 text-sm" />
                System
              </div>
            </div>
          </div>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around py-2">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200
                ${activeLink === link.href
                  ? 'text-blue-600 dark:text-cyan-400'
                  : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-xs mt-1">{link.label}</span>
            </a>
          ))}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200
              ${mobileMenuOpen ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-700 dark:text-gray-300'}`}
          >
            <span className="text-xl">
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </span>
            <span className="text-xs mt-1">More</span>
          </button>
        </div>

        {/* Expanded Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 shadow-lg rounded-t-lg">
            <div className="grid grid-cols-2 gap-3">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200
                    ${activeLink === link.href
                      ? 'bg-blue-600 dark:bg-cyan-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                >
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
              
              {/* Theme Selector */}
              <div
                onClick={() => setShowThemeCard((v) => !v)}
                className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
                ref={themeCardRef}
              >
                <span className="mr-2">{currentThemeIcon}</span>
                <span>Theme</span>
                {showThemeCard && (
                  <div className="absolute bottom-full left-4 right-4 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50">
                    <div
                      onClick={() => themeChangeHandle('light')}
                      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    >
                      <MdOutlineLightMode className="mr-2" />
                      Light
                    </div>
                    <div
                      onClick={() => themeChangeHandle('dark')}
                      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    >
                      <GiNightSleep className="mr-2" />
                      Dark
                    </div>
                    <div
                      onClick={() => themeChangeHandle('system')}
                      className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    >
                      <RiComputerLine className="mr-2" />
                      System
                    </div>
                  </div>
                )}
              </div>

              {/* Resume Button */}
              <a
                href="/Mehedi-Hasan-Resume.pdf"
                className="flex items-center justify-center p-3 border:bg-blue-600 border dark:border-cyan-500 dark:text-cyan-500 text-blue-700 border-blue-700 rounded-lg hover:bg-blue-300 dark:hover:bg-cyan-800"
              >
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Social icons */}
      <div className="hidden md:fixed z-10 right-0 md:flex md:justify-center align-middle h-full my-auto">
        <div className="text-xl font-medium flex flex-col mr-4 justify-center text-blue-900 dark:text-cyan-300">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <span className="hover:text-blue-900 dark:hover:text-cyan-400 m-2 p-2 cursor-pointer rounded-full shadow transition-all duration-200 shadow-gray-900/10 dark:shadow-gray-600/10 hover:shadow-blue-700/30 hover:scale-[1.03]">
                {link.icon}
                <span className="absolute right-full mr-2 px-2 py-1 text-xs font-normal rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Resume button */}
      <div className="hidden sm:block sm:fixed right-0 top-4 z-50">
        <a
          onClick={() => setShowThemeCard(false)}
          href="/Mehedi-Hasan-Resume.pdf"
          className="py-1.5 px-4 mr-4 cursor-pointer border text-blue-900 dark:text-cyan-300 border-blue-700 dark:border-cyan-400 font-medium rounded transition-all duration-200 hover:bg-blue-700 dark:hover:bg-cyan-700 hover:text-white hover:border-blue-700 hover:shadow hover:shadow-blue-700/20 text-sm"
        >
          Resume
        </a>
      </div>
    </>
  );
}

export default Nav;