import React from "react";
import Banner from "../../components/common/Banner";
import { motion } from "framer-motion";
import pageTransition from "../../animations/pageTransition";



export default function CookiePolicy() {
    return (
        <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-slate-100 dark:bg-slate-900"
        >
            <Banner title1="Cookie" title2="Policy" />
            <div className="bg-slate-100 dark:bg-slate-900 py-6 pt-20">
                <div className="max-w-[1200px] mx-auto px-4 py-8 lg:py-12 text-black dark:text-white policy-page">
                    <h1>Cookies Policy</h1>
                    <p>Last updated: April 13, 2023</p>
                    <p>
                        This Cookies Policy explains what Cookies are and how We
                        use them. You should read this policy so You can
                        understand what type of cookies We use, or the
                        information We collect using Cookies and how that
                        information is used. This Cookies Policy has been
                        created with the help of the{" "}
                        <a
                            href="https://www.freeprivacypolicy.com/free-cookies-policy-generator/"
                            target="_blank"
                        >
                            Free Cookies Policy Generator
                        </a>
                        .
                    </p>
                    <p>
                        Cookies do not typically contain any information that
                        personally identifies a user, but personal information
                        that we store about You may be linked to the information
                        stored in and obtained from Cookies. For further
                        information on how We use, store and keep your personal
                        data secure, see our Privacy Policy.
                    </p>
                    <p>
                        We do not store sensitive personal information, such as
                        mailing addresses, account passwords, etc. in the
                        Cookies We use.
                    </p>
                    <h1>Interpretation and Definitions</h1>
                    <h2>Interpretation</h2>
                    <p>
                        The words of which the initial letter is capitalized
                        have meanings defined under the following conditions.
                        The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in
                        plural.
                    </p>
                    <h2>Definitions</h2>
                    <p>For the purposes of this Cookies Policy:</p>
                    <ul>
                        <li>
                            <strong>Company</strong> (referred to as either "the
                            Company", "We", "Us" or "Our" in this Cookies
                            Policy) refers to Cryptic Entertainment, Industrial
                            Area Phase 2, Chandigarh.
                        </li>
                        <li>
                            <strong>Cookies</strong> means small files that are
                            placed on Your computer, mobile device or any other
                            device by a website, containing details of your
                            browsing history on that website among its many
                            uses.
                        </li>
                        <li>
                            <strong>Website</strong> refers to Cryptic
                            Entertainment, accessible from{" "}
                            <a
                                href="https://crypticentertainments.com/"
                                rel="external nofollow noopener"
                                target="_blank"
                            >
                                https://crypticentertainments.com/
                            </a>
                        </li>
                        <li>
                            <strong>You</strong> means the individual accessing
                            or using the Website, or a company, or any legal
                            entity on behalf of which such individual is
                            accessing or using the Website, as applicable.
                        </li>
                    </ul>
                    <h1>The use of the Cookies</h1>
                    <h2>Type of Cookies We Use</h2>
                    <p>
                        Cookies can be "Persistent" or "Session" Cookies.
                        Persistent Cookies remain on your personal computer or
                        mobile device when You go offline, while Session Cookies
                        are deleted as soon as You close your web browser.
                    </p>
                    <p>
                        We use both session and persistent Cookies for the
                        purposes set out below:
                    </p>
                    <ul>
                        <li>
                            <p>
                                <strong>Necessary / Essential Cookies</strong>
                            </p>
                            <p>Type: Session Cookies</p>
                            <p>Administered by: Us</p>
                            <p>
                                Purpose: These Cookies are essential to provide
                                You with services available through the Website
                                and to enable You to use some of its features.
                                They help to authenticate users and prevent
                                fraudulent use of user accounts. Without these
                                Cookies, the services that You have asked for
                                cannot be provided, and We only use these
                                Cookies to provide You with those services.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Functionality Cookies</strong>
                            </p>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>
                                Purpose: These Cookies allow us to remember
                                choices You make when You use the Website, such
                                as remembering your login details or language
                                preference. The purpose of these Cookies is to
                                provide You with a more personal experience and
                                to avoid You having to re-enter your preferences
                                every time You use the Website.
                            </p>
                        </li>
                    </ul>
                    <h2>Your Choices Regarding Cookies</h2>
                    <p>
                        If You prefer to avoid the use of Cookies on the
                        Website, first You must disable the use of Cookies in
                        your browser and then delete the Cookies saved in your
                        browser associated with this website. You may use this
                        option for preventing the use of Cookies at any time.
                    </p>
                    <p>
                        If You do not accept Our Cookies, You may experience
                        some inconvenience in your use of the Website and some
                        features may not function properly.
                    </p>
                    <p>
                        If You'd like to delete Cookies or instruct your web
                        browser to delete or refuse Cookies, please visit the
                        help pages of your web browser.
                    </p>
                    <ul>
                        <li>
                            <p>
                                For the Chrome web browser, please visit this
                                page from Google:{" "}
                                <a
                                    href="https://support.google.com/accounts/answer/32050"
                                    rel="external nofollow noopener"
                                    target="_blank"
                                >
                                    https://support.google.com/accounts/answer/32050
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                For the Internet Explorer web browser, please
                                visit this page from Microsoft:{" "}
                                <a
                                    href="http://support.microsoft.com/kb/278835"
                                    rel="external nofollow noopener"
                                    target="_blank"
                                >
                                    http://support.microsoft.com/kb/278835
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                For the Firefox web browser, please visit this
                                page from Mozilla:{" "}
                                <a
                                    href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                                    rel="external nofollow noopener"
                                    target="_blank"
                                >
                                    https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                For the Safari web browser, please visit this
                                page from Apple:{" "}
                                <a
                                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                    rel="external nofollow noopener"
                                    target="_blank"
                                >
                                    https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                                </a>
                            </p>
                        </li>
                    </ul>
                    <p>
                        For any other web browser, please visit your web
                        browser's official web pages.
                    </p>
                    <h2>More Information about Cookies</h2>
                    <p>
                        You can learn more about cookies:{" "}
                        <a
                            href="https://www.freeprivacypolicy.com/blog/cookies/"
                            target="_blank"
                        >
                            Cookies: What Do They Do?
                        </a>
                        .
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Cookies Policy, You
                        can contact us:
                    </p>
                    <ul>
                        <li>
                            <p>
                                By email: associations@crypticentertainments.com
                            </p>
                        </li>
                        <li>
                            <p>
                                By visiting this page on our website:{" "}
                                <a
                                    href="https://crypticentertainments.com/Contact"
                                    rel="external nofollow noopener"
                                    target="_blank"
                                >
                                    https://crypticentertainments.com/Contact
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>By phone number: +91 8728039991</p>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

