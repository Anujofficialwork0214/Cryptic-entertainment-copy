const pageTransition = {
    initial: {
        x: "100%",
        transition: { type: "tween" },
        opacity: 0,
    },
    animate: {
        x: 0, 
        opacity: 1,
        transition: { type: "tween", delay: "0.4", duration: "0.6" },
    },
    exit: { x: "-100%", opacity: 0,  transition: { type: "tween", duration: 0.5 } },
};

export default pageTransition;
