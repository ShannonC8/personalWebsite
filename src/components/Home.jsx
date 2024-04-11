import React from 'react';
import AnimatedText from './AnimatedText.jsx'; // Corrected import path

const Home = () => {
    const sentence = "Test".split("");
    return (
        <div className={"text-9xl"}>
            {sentence.map((letter, index) => { // Corrected syntax for mapping over the string
                return (
                    <AnimatedText key={index}>
                        {letter}
                    </AnimatedText>
                );
            })}
        </div>
    );
}

export default Home;
