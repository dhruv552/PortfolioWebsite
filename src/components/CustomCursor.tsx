import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Improved spring config for faster response
    const springConfig = { damping: 15, stiffness: 800, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Set position directly to mouse coordinates - CSS handles centering
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Add click effects
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Add hover effects for interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, select, [role="button"], [data-cursor-hover], .cursor-hover'
            );

            interactiveElements.forEach((element) => {
                element.addEventListener('mouseenter', () => setIsHovering(true));
                element.addEventListener('mouseleave', () => setIsHovering(false));
            });

            return () => {
                interactiveElements.forEach((element) => {
                    element.removeEventListener('mouseenter', () => setIsHovering(true));
                    element.removeEventListener('mouseleave', () => setIsHovering(false));
                });
            };
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const cleanup = addHoverListeners();

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cleanup();
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="custom-cursor"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
                }}
                transition={{
                    opacity: { duration: 0.05 },
                    scale: { duration: 0.08, ease: "backOut" }
                }}
            />

            {/* Cursor glow/shadow */}
            <motion.div
                className="custom-cursor-glow"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 1.5 : isHovering ? 2.2 : 1.6,
                }}
                transition={{
                    opacity: { duration: 0.05 },
                    scale: { duration: 0.12, ease: "easeOut" }
                }}
            />

            {/* Enhanced shadow ring for hover state */}
            <motion.div
                className="custom-cursor-ring"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isHovering ? 0.6 : 0,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    opacity: { duration: 0.1 },
                    scale: { duration: 0.15, ease: "easeOut" }
                }}
            />
        </>
    );
};

export default CustomCursor;