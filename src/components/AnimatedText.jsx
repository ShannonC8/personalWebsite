import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
    const rubberBand = {
        transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.4, 0.55, 1)",
            "scale3d(0.75, 1.25, 1)",
            "scale3d(1.25, 0.85, 1)",
            "scale3d(0.9, 1.05, 1)",
            "scale3d(1, 1, 1)",
        ]
    };

    return (
        <motion.span
            whileHover={rubberBand} // Scale the text to 1.4 on hover
            style={{ display: "inline-block" }} // Ensure the span behaves as a block element
        >
            {children}
        </motion.span>
    );
};

export default AnimatedText;
