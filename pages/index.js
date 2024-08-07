import React from "react";
import Timeline from '../components/Timeline';
import "pure-react-carousel/dist/react-carousel.es.css";
export default function Home() {
  return (
    <div>
      <div
        className="w-full invisible md:visible text-gray-900 md:rounded-b-xl rounded-b-3xl fixed top-0 z-40 drop-shadow-xl bg-white">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a href="#"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg">Lutfi.Dev</a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                ></path>
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
            <a className="px-4 py-2 mt-2 md:mt-0 md:ml-4 hover:font-semibold focus:outline-none focus:shadow-outline"
              href="https://github.com/lutfiharidha" target="_blank" rel="noreferrer">Github</a>
            <a className="px-4 py-2 mt-2 md:mt-0 md:ml-4 hover:font-semibold focus:outline-none focus:shadow-outline"
              href="https://www.linkedin.com/in/lutfiharidha/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="px-4 py-2 mt-2 md:mt-0 md:ml-4 scroll-smooth hover:font-semibold focus:outline-none focus:shadow-outline"
              href="#about">About</a>
            <a className="px-4 py-2 mt-2 md:mt-0 md:ml-4 hover:font-semibold focus:outline-none focus:shadow-outline"
              href="#contact">Contact</a>
            {/* <a className="px-4 py-2 mt-2 bg-gray-800 text-gray-100 rounded-lg md:mt-0 hover:font-semibold focus:outline-none focus:shadow-outline"
              href="#">Resume</a> */}
          </nav>
        </div >
      </div >

      <div className="lg:h-screen lg:py-10 lg:px-40 grid lg:grid-cols-3 md:grid-cols-2 md:place-items-center">
        <div className="lg:pt-10 lg:col-span-1 p-4">
          <img className="rounded-lg" src={`me.png`} alt="" srcSet="" />
        </div>
        <div className="lg:ml-10 lg:py-32 p-4 lg:col-span-2">
          <h1 className="text-4xl lg:text-8xl">Hi there.</h1>
          <p className="pt-4 md:tracking-wider md:leading-loose lg:w-4/5 text-xl font-light">
            Fuelled by a passion for designing compelling apps, I have a deep desire to excel and
            continuously improve in my work. Learn more about my journey below.
          </p>
        </div>
      </div>

      <div id="about" className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 lg:py-6 lg:flex lg:px-40">
        <div className="m-auto w-full p-4">
          <h1 className="text-4xl lg:text-5xl lg:pt-5">My Career So Far.</h1>
          <p className="pt-8 md:tracking-wider md:leading-loose w-full font-light text-lg">
            I have been a software developer for over 3 years and currently working for one of the best B2B supply chain platforms in Indonesia. I&apos;ve worked on web-based, multi-threaded applications as well as back-end development using the newest web technologies.
          </p>
        </div>
        <div className="p-4 lg:pt-20 space-y-2  w-full">
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8 mr-2">
            PHP</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Laravel</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Golang</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Python</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Javascript</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            ReactJs</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Dart</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Flutter</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            SQL</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            GIT</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Linux</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            AWS</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Docker</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Redis</button>
        </div>
      </div>

      <div className="px-4 lg:py-10">
        <Timeline />
      </div>
      <div id="contact" className="lg:pt-32 pt-20 p-4 pb-4 lg:py-6 lg:px-40">
        <div
          className="p-4 lg:py-32 lg:px-20 ring-2 pb-14 ring-offset-4 ring-offset-gray-200 ring-gray-500 rounded-lg grid lg:grid-cols-2">
          <div className="lg:flex">
            <h1 className="lg:m-auto text-4xl lg:text-7xl lg:tracking-wide">Want to get in touch?</h1>
          </div>

          <div className="grid">
            <a href="mailto:me@lutfi.dev" target="_blank" rel="noreferrer">
              <div className="ml-1 pt-4 flex">
                <div>
                  <img src="email.png" width={50} />
                </div>
                <div className="ml-5 items-center flex text-2xl text-gray-600 hover:text-black">me@lutfi.dev</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lutfiharidha/" target="_blank" rel="noreferrer">
              <div className="pt-4 flex">
                <div>
                  <img src="linkedin.png" width={60} />
                </div>
                <div className="ml-4 items-center flex text-2xl text-gray-600 hover:text-black">Lutfi Haridha</div>
              </div>
            </a>
          </div>

        </div>
      </div>

      <div className="lg:pt-14 pt-14 p-4 pb-4 lg:py-6 lg:px-14">
        <p className="text-center font-semibold text-lg">© {new Date().getFullYear()} Lutfi
          Haridha</p>
      </div>

      <div
        className="w-full shadow-[0px_20px_25px_20px_rgba(0,0,0,0.1)] md:rounded-t-xl rounded-t-xl fixed z-40 bottom-0 bg-white">
        <div
          className="p-4 text-center max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 grid grid-cols-4 gap-4 md:hidden">
          <a href="https://github.com/lutfiharidha" target="_blank" rel="noreferrer">
            <svg className="h-7 w-7 mx-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>

          <a href="https://www.linkedin.com/in/lutfiharidha/" target="_blank" rel="noreferrer">
            <svg className="h-7 w-7 mx-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
          </a>

          <a href="#about">
            <svg className="h-7 w-7 mx-auto  text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          </a>

          <a href="#contact">
            <svg className="h-7 w-7 mx-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="22" y1="2" x2="11" y2="13" />  <polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          </a>

          {/* <a href="#">
            <svg className="h-7 w-7 mx-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polygon points="12 2 2 7 12 12 22 7 12 2" />  <polyline points="2 17 12 22 22 17" />  <polyline points="2 12 12 17 22 12" /></svg>
          </a> */}

        </div>
      </div>
    </div >
  )
}
