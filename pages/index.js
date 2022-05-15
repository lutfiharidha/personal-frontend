import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from "axios";
import Image from 'next/image'

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
            <a className="px-4 py-2 mt-2 bg-gray-800 text-gray-100 rounded-lg md:mt-0 hover:font-semibold focus:outline-none focus:shadow-outline"
              href="#">Resume</a>
          </nav>
        </div >
      </div >

      <div className="lg:h-screen lg:py-10 lg:px-40 grid lg:grid-cols-3 md:grid-cols-2 md:place-items-center">
        <div className="lg:pt-10 lg:col-span-1 p-4">
          <img className="rounded-lg" src="lutfi.jpg" alt="" srcSet="" />
        </div>
        <div className="lg:ml-10 lg:py-32 p-4 lg:col-span-2">
          <h1 className="text-4xl lg:text-8xl">Hi there.</h1>
          <p className="pt-4 md:tracking-wider md:leading-loose lg:w-4/5 text-xl font-light">
            I have been a software developer for over 3 years and currently work for one of the biggest banks in Indonesia. I've worked on web-based, multi-threaded applications as well as back-end development using the newest web technologies.
          </p>
        </div>
      </div>

      <div id="about" className="pt-20 grid lg:grid-cols-3 md:grid-cols-2 lg:py-6 lg:flex lg:px-40">
        <div className="m-auto w-full p-4">
          <h1 className="text-4xl lg:text-5xl lg:pt-5">My Career So Far.</h1>
          <p className="pt-8 md:tracking-wider md:leading-loose w-full font-light text-lg">
            I am a Back End Developer who has experience in making several projects and internships at a
            software house company in Bandung, and now I work in an IT company that develops ERP applications in
            Jakarta as a Backend Developer. I&apos;m also a fast learner and fuelled by a passion to learn new
            technologies.
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
            GIN</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Python</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Fast API</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Javascript</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            ReactJs</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Dart</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Flutter</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            GIT</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Linux</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            AWS</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Docker</button>
          <button className="rounded-md font-semibold border-solid border hover:bg-gray-200 border-gray-300 py-2 px-8  mr-2">
            Database</button>
        </div>
      </div>
      <div className="lg:py-6 lg:px-40">
        <div className="md:grid overflow-hidden md:grid-cols-4 p-10 md:grid-rows-2 gap-4 place-items-center m-auto">
          <div className="md:row-span-2 md:col-span-2 transition hover:-translate-y-1 hover:scale-110 rounded-xl">
            <img className="rounded-xl" src="https://global-uploads.webflow.com/5f16d69f1760cdba99c3ce6e/5faa6fd9acf77395069ca442_mLLt3yhA4MokLjW9Z-lH_Z64a5VBY8ePdWsIfXC7kexpiHuhnTAp50DI09PgywDsVe_7jGwv4G1iLQ0iZdM5ZuraXxZTE99plA7cfl5TOQXp2cCndmlqTFPejC-QrLVDT8alEZPF.png" alt="" />
          </div>
          <div className="md:col-start-3 md:col-span-0 transition hover:-translate-y-1 hover:scale-110">
            <img className="rounded-xl" src="https://miro.medium.com/max/1400/0*45HvkjFB_eQEGxgi.jpeg" alt="" />
          </div>
          <div className="md:col-start-3 md:col-span-0 transition hover:-translate-y-1 hover:scale-110">
            <img className="rounded-xl" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d0bac985516221.5d7e861fd007a.jpg" alt="" />
          </div>
          <div className="md:row-start-1 md:col-start-4 transition hover:-translate-y-1 hover:scale-110">
            <img className="rounded-xl" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d0bac985516221.5d7e861fd007a.jpg" alt="" />
          </div>
          <div className="md:col-start-4 transition hover:-translate-y-1 hover:scale-110 hover:w-full">
            <img className="rounded-xl" src="https://miro.medium.com/max/1400/0*45HvkjFB_eQEGxgi.jpeg" alt="" />
          </div>
        </div>
      </div>

      <div className="pt-20 p-4 lg:py-6 lg:px-40">
        <div className="w-3/4 md:w-1/3 bg-white lg:h-full h-1/2 absolute z-0 rounded-md" />
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container z-40">
          <h1 className="pb-6 text-4xl lg:text-5xl relative">On Working <br />With Me.</h1>
          <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={1}>
            <Slider>
              {
                // clientList.data.map((client, index) => (
                <Slide index={0} key={0}>
                  <div className="flex">
                    <div className="mt-14 md:flex">
                      <div className="relative md:w-1/2 sm:w-96 xl:h-96">
                        <img src={`https://i.ibb.co/88yb225/ff7f69a0-0218-4f1e-a4e9-1aa467c7a421.jpg`} alt="image of profile" className="sm:m-auto w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded-md" />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between ">
                        <div>
                          <p className="text-xl font-medium leading-8 mt-4 text-gray-600">Lutfi is one of the best employees who is able to learn the flow business quickly, he is also able to learn technology that is not in his field from frontend developers to mobile developers quickly. </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-lg font-medium leading-4 text-gray-800">Ivan Tanu</p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">CEO at PT Sempoa Prima Teknologi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                // ))
              }
            </Slider>
            <div className={`flex items-center mt-8 absolute`}>
              <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
              </ButtonBack>

              <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div >
      <div id="contact" className="lg:pt-32 pt-20 p-4 pb-4 lg:py-6 lg:px-40">
        <div
          className="p-4 lg:py-32 lg:px-20 ring-2 pb-14 ring-offset-4 ring-offset-gray-200 ring-gray-500 rounded-lg grid lg:grid-cols-2">
          <div className="lg:flex">
            <h1 className="lg:m-auto text-4xl lg:text-7xl lg:tracking-wide">Want to get in touch?</h1>
          </div>

          <form className="grid lg:grid-cols-2 lg:gap-3">
            <div className="pt-4 lg:grid">
              <label className="text-slate-400 font-semibold">Name</label>
              <input type="text" className="rounded-lg bg-white w-full py-4 px-6" placeholder="Enter your name" />
            </div>
            <div className="pt-4 grid">
              <label className="text-slate-400 font-semibold">Email Address</label>
              <input type="text" className="rounded-lg bg-white w-full py-4 px-6" placeholder="Enter your Email" />
            </div>

            <div className="pt-4 grid lg:col-span-2">
              <label className="text-slate-400 font-semibold">Message</label>
              <textarea type="text" rows="5" cols="49" className="rounded-lg bg-white w-full py-4 px-6"
                placeholder="Enter your Message"></textarea>
            </div>

            <div className="pt-4">
              <input className="py-3 px-6 rounded-lg bg-gray-900 text-white" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      <div className="lg:pt-14 pt-14 p-4 pb-4 lg:py-6 lg:px-14">
        <p className="text-center font-semibold text-lg">© 2022 Lutfi
          Haridha</p>
      </div>

      <div
        className="w-full shadow-[0px_20px_25px_20px_rgba(0,0,0,0.1)] md:rounded-t-xl rounded-t-xl fixed z-40 bottom-0 bg-white">
        <div
          className="p-4 text-center max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 grid grid-cols-5 gap-5 md:hidden">
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

          <a href="#">
            <svg className="h-7 w-7 mx-auto text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polygon points="12 2 2 7 12 12 22 7 12 2" />  <polyline points="2 17 12 22 22 17" />  <polyline points="2 12 12 17 22 12" /></svg>
          </a>

        </div>
      </div>
    </div >
  )
}