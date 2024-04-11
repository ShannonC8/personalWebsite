import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const text = "Hi! I'm Shannon";
    const characters = text.split('');

    const animationProps = characters.map((char, index) => {
        const delay = index * 40;
        return useSpring({
            from: { transform: 'translateY(0px)' },
            to: async (next) => {
                await next({ transform: 'translateY(-20px)', delay });
                await next({ transform: 'translateY(0px)' });
            },
            config: { tension: 100, friction: 10 },
            immediate: animate,
        });
    });


    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
            <div>
                {characters.map((char, index) => (
                    <animated.span
                        key={index}
                        style={animationProps[index]}
                        className="text-3xl font-semibold text-gray-800 mb-4 p-1 inline-block"
                    >
                        {char}
                    </animated.span>
                ))}
            </div>
        </div>
    );
};

export default Home;
