import React, { useEffect, useRef } from "react";


const MainPage = ({ tcScroll, ppScroll, setPpScroll, setTcScroll }) => {

    const privacyPolicy = useRef(null);
    const termsAndConditions = useRef(null);
    const aboutUs = useRef(null);

    useEffect(() => {
        if (ppScroll || tcScroll) {
            setTimeout(() => { privacyPolicy.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 1000);
            setPpScroll(false);
            setTcScroll(false);
        }

        else {
            window.scrollTo(0, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ppScroll, tcScroll])


    return (
        <div className="flex-column w-full px-4 sm:px-8 py-4 h-4/5 text-center pt-20 min-w-[355px] max-w-[1440px] mx-auto">
            <div className="px-2">
                <div className="text-xl pt-10 pb-4 sm:pt-4 sm:pb-4 font-semibold text-indigo-500" ref={aboutUs}>About Us</div>
                <div className="pb-16 space-y-6">
                    <div>
                        Welcome to Booksta, your number one source for all your reading needs.
                        We're dedicated to giving you the most popular books, with a focus on dependability, customer service and uniqueness.
                    </div>
                    <div>
                        Founded in 2018 by Keyser Soze, Booksta has come a long way from its beginnings in a home office, Portland.
                        When Keyser Soze first started out, his passion for reading and business drove him to action,and gave him the impetus to turn
                        hard work and inspiration into to a booming online store.
                        We now serve customers all over the country, and are thrilled to be a part of the nerdy wing of the e-commerce industry.
                    </div>
                    <div ref={privacyPolicy}>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
                <div className="text-sm py-2 pt-12 font-medium" >Privacy Policy</div>
                <div className="text-xs pb-8" ref={termsAndConditions}> We will not use or share your personal information with anyone except as described in this Privacy Policy.
                    This Privacy Policy will inform you about the types of personal data we collect, the purposes for which we use the data,
                    the ways in which the data is handled and your rights with regard to your personal data.
                    <div className="pt-2">Data we collect: Your Email address and Cart details.</div>
                </div>
            </div>
            <div className="">
                <div className="text-sm py-2 font-medium">Terms and Conditions</div>
                <div className="text-xs pb-8">These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept
                    all terms and conditions written in here.
                    You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                    Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and
                    materials contained in this Website.

                    You are granted limited license only for purposes of viewing the material contained on this Website.</div>
            </div>



        </div>
    )
}

export default MainPage; 