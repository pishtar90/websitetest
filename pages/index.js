import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '../components/Testimonials';
import LogoSection from '../components/LogoSection'; 
import Hero from '../components/Hero';
import '../styles/global.css'; 
import AnimatedSection from '../components/AnimatedSection';
import '../styles/swiper.css';
import Work from '../pages/work'
import Wie from '../components/wie'
import Warum from '../components/warum'



const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [isHeroVisible, setHeroVisible] = useState(true);

    const [hovering, setHovering] = useState(false); 


    useEffect(() => {
        const handleScroll = () => {
          const heroElement = document.getElementById('hero');
          if (!heroElement) return;
    
          const heroHeight = heroElement.offsetHeight;
          const scrollY = window.scrollY;
    
          setHeroVisible(scrollY < heroHeight - 80); 
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <>
      <Head>
        <title>The Eksperts</title>
      </Head>
      
      <main className="font-matt flex flex-col items-center bg-white px-4">
        <div className="font-matt w-full max-w-[1280px] mx-auto text-center my-2">
        <Hero setHeroVisible={setHeroVisible} />
        </div>

            <Work/>
            <Wie/>
            <Warum/>

            <Testimonials/>

            <AnimatedSection/>

            <LogoSection />

            <section className="bg-white py-16 lg:py-2 lg:max-w-[1280px] mx-auto flex flex-col font-matt space-y-16 lg:space-y-0 ">
            <div className="font-matt flex flex-col items-center text-center space-y-12">
            {/* 100% Section */}
            <div className="font-matt flex flex-col items-center px-4 lg:px-0">
            <div className="w-full max-w-full">
            <svg
            className="responsive-svg" 
            viewBox="0 0 1130 298" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
                        <path d="M0.463898 99.3862H99.6939V0.15625H62.2109C62.2109 34.2583 34.5659 61.9042 0.462891 61.9042V99.3862H0.463898Z" fill="#0009FF"/>
                        <path d="M112.1 297.847V0.15625H153.446C185.415 0.15625 211.33 26.0722 211.33 58.0402V297.847H112.1Z" fill="#0009FF"/>
                        <path d="M438.47 0.15625H289.073C289.073 34.2533 261.426 61.8993 227.33 61.8993V236.104C261.427 236.104 289.073 263.75 289.073 297.847H438.47C438.47 263.75 466.117 236.104 500.213 236.104V61.8993C466.117 61.8993 438.47 34.2533 438.47 0.15625ZM438.195 186.612C433.702 191.091 429.843 194.964 426.191 198.616C418.17 206.637 411.265 213.542 401.383 223.424H326.161L289.349 186.612V111.39C293.842 106.911 297.701 103.038 301.353 99.3862C309.374 91.3652 316.279 84.4602 326.161 74.5782H401.383L438.195 111.39V186.612Z" fill="#0009FF"/>
                        <path d="M727.353 0.15625H577.956C577.956 34.2533 550.309 61.8993 516.213 61.8993V236.104C550.31 236.104 577.956 263.75 577.956 297.847H727.353C727.353 263.75 755 236.104 789.096 236.104V61.8993C755 61.8993 727.353 34.2533 727.353 0.15625ZM727.078 186.612C722.585 191.091 718.726 194.964 715.074 198.616C707.053 206.637 700.148 213.542 690.266 223.424H615.044L578.232 186.612V111.39C582.725 106.911 586.584 103.038 590.236 99.3862C598.257 91.3652 605.162 84.4602 615.044 74.5782H690.266L727.078 111.39V186.612Z" fill="#0009FF"/>
                        <path d="M1071.72 124.316H1062.83C1062.83 176.593 1020.45 218.972 968.174 218.972V240.034C984.897 240.034 998.456 253.593 998.456 270.317H1071.73C1071.73 253.593 1085.29 240.034 1102.01 240.034V154.599C1085.29 154.599 1071.73 141.04 1071.73 124.316H1071.72ZM1071.59 215.763C1069.39 217.958 1067.49 219.858 1065.7 221.65C1061.77 225.585 1058.38 228.97 1053.53 233.818H1016.64L998.587 215.763V178.871C1000.79 176.675 1002.68 174.775 1004.47 172.983C1008.41 169.048 1011.79 165.663 1016.64 160.816H1053.53L1071.59 178.871V215.763Z" fill="#0009FF"/>
                        <path d="M862.907 173.688H871.802C871.802 121.412 914.181 79.0324 966.458 79.0324V57.9701C949.734 57.9701 936.175 44.411 936.175 27.6875H862.904C862.904 44.411 849.345 57.9701 832.621 57.9701V143.405C849.345 143.405 862.904 156.964 862.904 173.688H862.907ZM863.042 82.2417C865.245 80.0461 867.138 78.146 868.929 76.3543C872.864 72.4194 876.25 69.0343 881.097 64.1867H917.989L936.044 82.2417V119.134C933.841 121.329 931.948 123.229 930.157 125.021C926.222 128.956 922.837 132.341 917.989 137.189H881.097L863.042 119.134V82.2417Z" fill="#0009FF"/>
                        <path d="M805.096 297.846H897.469L964.15 156.375L805.096 297.846Z" fill="#0009FF"/>
                        <path d="M1129.54 0.15625H1037.16L970.482 141.623L1129.54 0.15625Z" fill="#0009FF"/>
                        </svg>

                    </div>
                    <p className="font-matt text-lg lg:text-[28px] lg:leading-[37px] font-extrabold uppercase mb-12 mt-10">
                    Unserer Kunden empfehlen uns weiter
                    </p>
                </div>

                {/* 3 Länder Section */}
                <div className="font-matt flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-8  lg:space-x-28 px-4 lg:px-0">
                {/* Left Text */}
                <div className="font-matt text-lg lg:text-[28px] lg:leading-[37px] font-extrabold uppercase ">
                <p>Bereits in</p>
                </div>

                {/* SVG */}
                <div className="font-matt w-full max-w-[100px] lg:max-w-[150px]">
                    <svg
                    className="responsive-svgg"
                    viewBox="0 0 264 299"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M125.798 0.65625H26.5684V99.8862H64.0514C64.0514 65.7842 91.6963 38.1382 125.799 38.1382L125.798 0.65625Z"
                    fill="#0009FF"
                    />
                    <path
                    d="M126.137 99.8867H100.99C100.99 127.289 78.777 149.502 51.375 149.502C78.777 149.502 100.99 171.715 100.99 199.117H126.137V99.8867Z"
                    fill="#0009FF"
                    />
                    <path
                    d="M26.5684 199.118V298.348H125.798V260.865C91.6963 260.865 64.0503 233.22 64.0503 199.117L26.5684 199.118Z"
                    fill="#0009FF"
                    />
                    <path
                    d="M138.203 298.347V0.65625H179.549C211.518 0.65625 237.433 26.5722 237.433 58.5402V240.462C237.433 272.431 211.517 298.346 179.549 298.346H138.203V298.347Z"
                    fill="#0009FF"
                    />
                </svg>
                </div>

                {/* Right Text */}
                <div className="font-matt text-lg lg:text-[28px] lg:leading-[37px] font-extrabold uppercase lg:px-[40px]">
                <p>Länder vertreten und weiter wachsend</p>
                </div>
            </div>

                {/* Hat and 14 Section */}
                <div className="font-matt grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center px-4 lg:px-0 lg:mr-[100px]">
                {/* Hat Section */}
                <div className="font-matt flex flex-col items-center text-center space-y-4 mb-10">
                <div className="w-full max-w-[100px] md:max-w-[150px]">
                    <svg
                    className="custom-svg lg:mx-[-70px] lg:mt-[80px] mx-[-60px]"
                    viewBox="0 0 280 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >            
                    <path d="M269.414 168.168V103.836L134.707 31.5078L0 103.836L134.707 176.165L252.239 113.058V168.169C245.968 171.324 241.653 177.818 241.653 185.304C241.653 195.876 250.254 204.477 260.827 204.477C271.399 204.477 280 195.876 280 185.304C279.999 177.818 275.685 171.324 269.414 168.168Z" fill="#0009FF"/>
                    <path d="M142.831 191.296L134.706 195.659L126.581 191.296L53.1172 151.852V204.687L134.706 248.495L216.295 204.687V151.852L142.831 191.296Z" fill="#0009FF"/>
                    </svg>
                    </div>
                    <p className="font-matt text-lg lg:text-[28px] lg:leading-[37px] font-extrabold mt-4 uppercase">
                    Gründung der <br></br>The Eksperts Academy
                    </p>
                </div>

                {/* 14 Section */}
                <div className="font-matt flex flex-col items-center text-center md:text-left space-y-4 md:space-x-32">
                    <div className="w-full flex lg:justify-center items-center">
                        <div className="w-full max-w-[80px] sm:max-w-[100px] lg:max-w-[150px]">
                        <svg
                            className="custom-svg-472 mx-[-70px] md:mx-[-100px] items-center md:justify-center lg:mt-[-80px] "
                            viewBox="0 0 472 267"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M71.8465 75.8147H147.212V0.449219H118.744C118.744 26.3498 97.747 47.347 71.8457 47.347V75.8147H71.8465Z"
                            fill="#0009FF"
                            />
                            <path
                            d="M156.635 226.547V0.449219H188.037C212.318 0.449219 232 20.1325 232 44.4123V226.547H156.635Z"
                            fill="#0009FF"
                            />
                            <path
                            d="M400.153 141.762V75.8164H371.685C371.685 101.717 350.688 122.714 324.787 122.714V141.762V151.183V226.548H400.153V141.762H400.153Z"
                            fill="#0009FF"
                            />
                            <path d="M315.367 104.078H240.002V179.444H315.367V104.078Z" fill="#0009FF" />
                            <path
                            d="M240.002 104.077H315.367L364.374 0.449219H289.008L240.002 104.077Z"
                            fill="#0009FF"
                            />
                        </svg>
                        </div>
                    </div>
                    <p className="font-matt text-base sm:text-lg lg:text-[28px] lg:leading-[37px] font-extrabold mt-4 uppercase text-center lg:text-left">
                        Erfolgreiche Projekte in <br></br>den letzten 12 Monaten
                    </p>
                    </div>
                </div>
            </div>
            </section>

            <section className="bg-white py-16 lg:py-2 flex flex-col lg:flex-row justify-between items-center lg:min-w-[1280px] mx-auto font-matt space-y-8 lg:space-y-0 lg:mt-[300px] lg:mb-[300px]">
            {/* Left Section: Heading */}
            <div className="flex-1 text-center lg:text-left lg:min-w-[490px]">
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                Haben Sie <br />
                Fragen oder <br />
                eine <br />
                spannende <br/>
                Idee?
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:min-w-[800px] gap-8 lg:gap-14 items-center lg:items-start">
                {/* Center Section: Image */}
                <div className="flex justify-center lg:justify-start">
                <img
                    src="/images/fisniksalihu-theeksperts.png"
                    alt="Fisnik Salihu"
                    className="w-[156px] h-[339px] rounded-[20px] object-cover"
                />
                </div>

                {/* Right Section: Contact Details */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                {/* Name and Title */}
                <h2 className="text-4xl lg:text-7xl font-medium mb-2">FISNIK SALIHU</h2>
                <p className="text-gray-800 text-xl lg:text-3xl mb-8">Co
                -Founder & strategy ekspert</p>

                {/* Email Section */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10 lg:space-y-0 space-y-4 ">
                    <p className="text-black text-lg lg:text-[20px] font-normal lg:mt-[12px] lg:mr-[20px]">
                        Schreiben Sie mir
                    </p>
                    <a
                        href="mailto:fisnik.salihu@the-eksperts.com"
                        className="text-gray-500  border-[2px] border-black text-[16px] lg:text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        fisnik.salihu@the-eksperts.com
                    </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-10 lg:space-y-0 space-y-4">
                    <p className="text-black text-lg lg:text-[20px] font-normal lg:mt-[12px] lg:mr-[-28px]">
                        oder rufen Sie mich an
                    </p>
                    <a
                        href="tel:+41799213000"
                        className="text-gray-500 border-[2px] border-black text-[16px] lg:text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        +41 79 921 30 00
                    </a>
                    </div>

                </div>
            </div>
            </section>

      </main>
    </>
  );
};

export default Home;
