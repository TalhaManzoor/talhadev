import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-20 md:pt-20 md:pb-20 lg:pt-20 lg:pb-30"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Innovating the future of technology with world-class mobile and web applications."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "As a skilled Flutter and Web Developer, I specialize in crafting high-performance mobile and web applications. With experience in GetX, BLoC, Firebase, API integration, and responsive design, I bring scalable and efficient solutions to life. My expertise spans multiple industries, from e-commerce to financial systems, ensuring seamless user experiences and optimized performance."
              }
            />
            <AnimatedBody
              text={
                "With hands-on experience at leading companies like Pukat Digital, Apporater, SigmaTec, and Softkel, I have built and maintained robust Flutter applications while collaborating with cross-functional teams. My ability to integrate third-party services, troubleshoot code, and enhance UI/UX has contributed to the success of various applications, making them both commercially viable and user-friendly."
              }
            />
            <AnimatedBody
              text={
                "Beyond my professional work, I am deeply engaged in research and continuously exploring advancements in AI and autonomous systems. I have taken advanced courses in Machine Learning and Applied Machine Learning, achieving top grades, and actively contribute to the AI and robotics community."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I am dedicated to transforming ideas into powerful digital solutions, constantly improving and optimizing mobile and web applications. My portfolio includes diverse projects such as DripDollars, Smart HR, IQProspects and WebPR, showcasing my ability to create scalable, intuitive, and efficient applications. With a strong eye for detail and a commitment to excellence, I strive to deliver innovative and future-ready apps. I'm always open to new opportunities, collaborations, and innovative projects."
              }
            />
            {/* <AnimatedBody
              text={
                "When I'm not coding, you can find me binge-watching anime, hanging out with friends, cheering on Manchester United, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            /> */}
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Programming"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Dart, JavaScript, Python, Java"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Libraries and Frameworks"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Flutter, React, Next.js, NodeJS, Redux, Redux Toolkit, Express.js, Tailwind CSS, Material UI, Firebase, Framer Motion."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Visual Studio Code, Android Studio, Xcode, Visual Studio, Git, Github Figma, MongoDB Compass, Postman."
                }
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div> */}


     

<AnimatedTitle
          text={
            "Work Experience"
          }
          className={
            "mb-5 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

         
            <div className="flex flex-col gap-3 m-2 w-[100%] text-start">
              <AnimatedTitle
                text={"Apporater"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <div className="flex flex-row">
              <AnimatedTitle
                text={"• Mobile App Developer"}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
               <AnimatedTitle
                text={"(Aug, 2024 - Present)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              </div>
           
           
            </div>


            


            <div className="flex flex-col gap-3 m-2 w-[100%] text-start">
              <AnimatedTitle
                text={"SigmaTec"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
             <div className="flex flex-row">
             <AnimatedTitle
                text={"• Mobile App Developer"}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
               <AnimatedTitle
                text={"(Jan, 2024 - July, 2024)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />


             </div>

             
          
            </div>




             <div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"SOFTKEL"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            
               <div className="flex flex-row">
               <AnimatedTitle
                text={"• Mobile & WEB Developer"}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedTitle
                text={"(March, 2023 - Jun, 2024)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
               </div>
            </div>


            <div className="flex flex-col gap-3 m-2 w-[100%] text-start">
              <AnimatedTitle
                text={"PUKAT DIGITAL"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
             <div className="flex flex-row">
             <AnimatedTitle
                text={"• Mobile App Developer"}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
               <AnimatedTitle
                text={"(May, 2020 - Feb, 2023)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />


             </div>

             
          
            </div>

          


          <div className=" h-20"/>

            <AnimatedTitle
          text={
            "Education"
          }
          className={
            "mb-5 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />


<div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"Bachelor of Science in Information Technology"}
                className={
                  "text-[22px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
             
             <div className=" flex flex-row">

              <AnimatedTitle
                text={"• University of Education, Lahore"}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />            
                <AnimatedTitle
                text={"(2016-2020)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
             </div>

              
              
            </div>



            <div className="flex flex-col gap-3 m-2 w-[100%] text-start ">
              <AnimatedTitle
                text={"ICS"}
                className={
                  "text-[22px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              
               <div className=" flex flex-row">
              <AnimatedTitle
                text={"• Punjab Collage, Lahore "}
                className={
                  "text-[10px] text-[#e4ded7] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />            
                <AnimatedTitle
                text={"(2014-2016)"}
                className={
                  "text-[10px] text-[#3c50d8] md:text-[14px] lg:text-[15px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
             </div>
            </div>


         

      </div>
    </section>
  );
};

export default About;
