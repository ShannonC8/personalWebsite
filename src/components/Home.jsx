import React, { useEffect } from 'react';
import './Home.css';
import image from '../assets/IMG_9889.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: ".website-content",
            start: "-20% top",
            end: "bottom bottom",
            onEnter: () => {
                gsap.set(".website-content", { position: 'absolute', top: '256%' });
            },
            onLeaveBack: () => {
                gsap.set(".website-content", { position: 'fixed', top: '0' });
            }
        });

        gsap.to(".header .letters:first-child", {
            x: () => -window.innerWidth * 3,
            scale: 10,
            ease: "power2.inOut",
            scrollTrigger: { start: "top top", end: "+=200%", scrub: 1 }
        });

        gsap.to(".header .letters:last-child", {
            x: () => window.innerWidth * 3,
            scale: 10,
            ease: "power2.inOut",
            scrollTrigger: { start: "top top", end: "+=200%", scrub: 1 }
        });

        gsap.to(".img-holder", {
            rotation: 0,
            scale: 5,
            //scale: 1,
            ease: "power2.inOut",
            scrollTrigger: { start: "top top", end: '+=200%', scrub: 1 }
        });

    }, []);

    return (
        <div className="h-screen">
            <div className="header fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full z-50">
                <div className="letters flex flex-row">
                    <div>HI, IM</div>
                </div>
                <div className="letters flex flex-row">
                    <div>SHANNON</div>
                </div>
            </div>
            <div className="website-content fixed top-0 w-full min-h-screen">
                <div className="img-holder fixed">
                    <img src={image} alt={""} className="image" />
                </div>
                <div className="content-holder relative top-[-5px] w-full bg-black text-white h-[300vh]">
                    <div className="row">
                        <h1>Im Cool</h1>
                    </div>
                    <div className="row">
                        <h1>ur Cool</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
