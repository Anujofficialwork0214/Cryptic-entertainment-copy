import React, { useState } from "react";
import Banner from "../components/common/Banner";
import Index from "../components/Movies";

const Movies = () => {
    return (
        <div>
            {/* <AnimatePresence> */}
            
            {/* </AnimatePresence> */}
            <Banner title1="Movies" />
            <Index />
        </div>
    );
};

export default Movies;
