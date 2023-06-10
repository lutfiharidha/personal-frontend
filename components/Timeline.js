import { useState } from 'react';

const Timeline = () => {
  const [selectedExperience, setSelectedExperience] = useState(3);

  const handleItemClick = (index) => {
    setSelectedExperience(index);
  };

  const divStyle = {
    fontFamily: 'Poppins, sans-serif',
  };
  const timelineData = [
    {
      image: 'gits.jpeg',
      date: 'Jul 2019 - Oct 2019',
      title: 'Backend Developer (Intern)',
      company: 'PT GITS Indonesia',
      details: `<p>During my internship at GITS Indonesia, an IT company specializing in software development, I gained valuable experience in various aspects of the industry.</p>
<br>

<p>I had the opportunity to contribute to the development of an operational system, collaborating with senior developers and ensuring its efficiency. I also played a role in fixing bugs, improving the functionality of the software.</p>
<br>

<p>Additionally, I assisted in generating maintenance reports for the general manager, analyzing project needs. This experience deepened my understanding of project management.</p>
<br>

<p>Overall, my internship at GITS Indonesia provided me with practical knowledge in software development and enhanced my problem-solving skills. I am grateful for the opportunity to contribute to the company's success.</p>`,
    },
    {
      image: 'sempoa.png',
      date: 'Jul 2021 - Dec 2021',
      title: 'Backend Developer',
      company: 'PT Sempoa Prima Teknologi',
      details: `<p>At PT Sempoa Prima Teknologi, a leading IT company, I worked on software development for financial and tax services. My role involved developing financing software, conducting program testing, and resolving bugs.</p>
<br>

<p>I contributed to the development of user-friendly software for financing services. Additionally, I ensured the software's quality through thorough testing and promptly fixing any identified bugs.</p>
<br>

<p>Working at Sempoa Prima Teknologi gave me valuable experience in the finance and tax technology industry. I'm proud to have contributed to delivering effective software solutions for businesses in managing their financial and tax processes.</p>
<br>

<p>Throughout my time at Sempoa, I learned the importance of delivering high-quality software and collaborating with diverse teams. It was a rewarding experience that allowed me to make a positive impact in the field of financial and tax services.</p>`,
    },
    {
      image: 'bri.webp',
      date: 'Jan 2022 - Jan 2023',
      title: 'Golang Developer',
      company: 'PT Bank Rakyat Indonesia (Persero) Tbk',
      details: `<p>During my one-year assignment at PT Bank Rakyat Indonesia, I had the opportunity to work on the NDS project. NDS aimed to improve the bank's existing applications and enhance customer service.</p>
<br>
<p>My role involved developing the NDS system using Micro and Nano services. I also helped the MDP team create a transactions limit system, conducted program testing, and fixed bugs.</p>
<br>
<p>Overall, this experience allowed me to contribute to the improvement of the bank's services and gain valuable skills in system development and problem-solving. I'm proud of my contributions to the NDS project and the positive impact it had on customer satisfaction.</p>`,
    },
    {
      image: 'paper.png',
      date: 'Feb 2023 - Present',
      title: 'Back End Engineer',
      company: 'Paper.id',
      details: `<p>As a backend engineer at Paper.id, my main responsibility is designing and building B2B systems for invoicing, payment, and financing. I focus on creating APIs that allow businesses to integrate their financial systems with Paper.id.</p>
<br>

<p>Working at Paper.id has given me valuable experience in developing secure and scalable backend solutions.I collaborate closely with cross - functional teams to ensure smooth system functionality and deliver a seamless user experience.</p>
<br>

<p>I am proud to be part of a team that is revolutionizing financial processes for businesses, contributing to their growth and success.This experience at Paper.id has enhanced my technical skills and allowed me to make a meaningful impact in the world of B2B financial systems.</p>`,
    },
  ];

  return (
    <div className="pt-20 grid lg:grid-cols-2 md:grid-cols-2 lg:py-6 lg:flex lg:px-40">
      <div className="w-full md:w-2/12">
        <div className="relative pl-4">
          <div className="border-t-2 border-gray-300 absolute w-full top-0"></div>
          <ul className="list-none m-0 p-0">
            {timelineData.map((item, index) => (
              <li
                key={index}
                className={`pb-4 cursor-pointer ${selectedExperience === index ? 'font-semibold' : ''
                  }`}
                onClick={() => handleItemClick(index)}
              >
                <div className='flex flex-wrap gap-10'>
                  <div className='p-4'>
                    <img src={item.image} width={index == 2 ? 40 : 40} />
                  </div>
                  <div>
                    <div className="items-center ml-11  ">
                      <p className="text-xl">{item.company}</p>
                    </div>
                    <div className="ml-11">
                      <h4 className="text-lg mb-1">{item.title}</h4>
                      <div className="text-gray-600 flex-1">{item.date}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedExperience !== null && (
        <div className="w-full p-4 px-10 lg:mt-0 ring-2 ring-offset-4 ring-offset-gray-200 ring-gray-500 rounded-lg ">
          <div className="bg-gray-200">
            <h1 className="text-xl mb-4">
              My Story at {timelineData[selectedExperience].company}
            </h1>
            <div className="text-black" style={divStyle} dangerouslySetInnerHTML={{
              __html: timelineData[selectedExperience].details
            }} >

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;