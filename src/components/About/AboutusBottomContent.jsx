import React from "react";

const AboutusBottomContent = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-xl rounded-2xl p-8 transition-colors duration-500">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
          {data.heading}
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {data.description}
        </p>

        <ul className="space-y-2 mb-8 pl-6 list-disc text-slate-800 dark:text-slate-300 marker:text-black dark:marker:text-white">
          {data.services?.map((item, idx) => (
            <li key={idx} className="leading-snug">
              {item}
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            {data.whyItMatters?.heading}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            {data.whyItMatters?.description}
          </p>
          <ul className="space-y-1 pl-6 list-disc text-slate-800 dark:text-slate-300 marker:text-black dark:marker:text-white">
            {data.whyItMatters?.outcomes?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            {data.whoWeWorkedWith?.heading}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-3">
            {data.whoWeWorkedWith?.description}
          </p>
          <ul className="space-y-1 pl-6 list-disc text-slate-800 dark:text-slate-300 marker:text-black dark:marker:text-white">
            {data.whoWeWorkedWith?.clients?.map((client, idx) => (
              <li key={idx}>
                <span className="font-medium text-slate-900 dark:text-white">
                  {client.name}
                </span>{" "}
                ({client.company})
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            {data.promise?.heading}
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            {data.promise?.description}
          </p>
        </div>

        <p className="mt-6 text-lg font-semibold italic text-black dark:text-white tracking-tight">
          {data.closingCTA}
        </p>
      </div>
    </div>
  );
};

export default AboutusBottomContent;
