import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SharinganBackground = () => {
    const [sharinganEyes, setSharinganEyes] = useState([])

    useEffect(() => {
        // Generate random Sharingan eyes across the viewport
        const generateSharinganEyes = () => {
            const eyes = []
            const numberOfEyes = 8 // Number of Sharingan eyes

            for (let i = 0; i < numberOfEyes; i++) {
                eyes.push({
                    id: i,
                    top: Math.random() * 100, // Random position (%)
                    left: Math.random() * 100, // Random position (%)
                    size: 80 + Math.random() * 100, // Random size between 80-180px
                    opacity: 0.08 + Math.random() * 0.12, // Random opacity 0.08-0.2
                    animationDuration: 15 + Math.random() * 20, // 15-35s rotation
                    floatDuration: 8 + Math.random() * 12, // 8-20s float
                    delay: Math.random() * 5 // Random delay 0-5s
                })
            }
            setSharinganEyes(eyes)
        }

        generateSharinganEyes()
    }, [])

    return (
        <div className="sharingan-background">
            {sharinganEyes.map((eye) => (
                <motion.div
                    key={eye.id}
                    className="sharingan-eye"
                    style={{
                        top: `${eye.top}%`,
                        left: `${eye.left}%`,
                        width: `${eye.size}px`,
                        height: `${eye.size}px`,
                        opacity: eye.opacity
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{
                        opacity: eye.opacity,
                        scale: [1, 1.1, 1],
                        rotate: 360,
                        y: [0, -30, 0]
                    }}
                    transition={{
                        opacity: { duration: 2, delay: eye.delay },
                        scale: {
                            duration: eye.floatDuration,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        rotate: {
                            duration: eye.animationDuration,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        y: {
                            duration: eye.floatDuration,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }
                    }}
                >
                    <img src="/sharingan-eye.png" alt="" />
                </motion.div>
            ))}
        </div>
    )
}

export default SharinganBackground
