export const attachWords  = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    hidden: {
        x: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

export const dropIn = {
    hidden: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 500,
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
    },
};