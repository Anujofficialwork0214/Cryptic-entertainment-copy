import React from "react";
import { useEffect } from "react";

const ContentFix = ({ data }) => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20">
      <div className="flex md:hidden flex-col gap-8">
        <iframe
          className="w-full aspect-video  rounded-tr-3xl rounded-bl-3xl px-4"
          src="https://www.youtube.com/embed/9OFtKIWadKQ?autoplay=1&mute=1&loop=1&playlist=9OFtKIWadKQ"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        <ContentSection
          title={"Personal Brand Building"}
          content={data.content}
        />
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:items-center gap-8 max-w-[1200px] mx-auto">
        <>
          <ContentSection
            title={"⭐ Top Rated : Personal Brand Building"}
            content={data.content}
          />

          <iframe
            className="w-full aspect-video  rounded-tr-3xl rounded-bl-3xl"
            src="https://www.youtube.com/embed/9OFtKIWadKQ?autoplay=1&mute=1&loop=1&playlist=9OFtKIWadKQ&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      </div>
    </div>
  );
};

export default ContentFix;

const Image = ({ src, alt, alignContent }) => {
  return (
    <div className="p-4">
      <img
        src={src}
        className={`w-full hover:grayscale transition-all duration-500 ${
          alignContent !== "left"
            ? "rounded-tr-3xl rounded-bl-3xl"
            : "rounded-tl-3xl rounded-br-3xl"
        }`}
        alt={alt}
      />
    </div>
  );
};

const ContentSection = ({ title, content }) => {
  return (
    <div className="p-4 flex flex-col gap-5 justify-center ">
      <h3 className="text-4xl font-medium text-black dark:text-white">
        {title}
      </h3>
      <div className="divider border-b border-rose-500 w-[120px]"></div>
      <p className="text-base text-justify text-gray-800 dark:text-gray-100">
        {content}
      </p>
    </div>
  );
};


// import { useEffect } from "react";

// const InstagramEmbed = () => {
//   useEffect(() => {
//     // Load Instagram embed script
//     const script = document.createElement("script");
//     script.src = "https://www.instagram.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="w-full"
//       dangerouslySetInnerHTML={{
//         __html: `
//         <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C8hc-wTCBIO/" data-instgrm-version="14" style="margin: 0 auto; max-width: 100%;">
//         </blockquote>
//       `,
//       }}
//     />
//   );
// };

// export default InstagramEmbed;

