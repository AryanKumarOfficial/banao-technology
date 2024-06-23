import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
    return (
        <section
            className={`self-stretch bg-grey-white flex flex-row items-start justify-center py-[6.25rem] px-[1.25rem] box-border shrink-0 max-w-full z-[4] mt-[-2.063rem] text-left text-[1.5rem] text-grey-darkest font-text-sm-bold mq750:pb-[4.063rem] mq750:box-border ${className}`}
        >
            <div className="w-[77.5rem] rounded-lg bg-purple-3 flex flex-col items-start justify-start p-[2.5rem] box-border gap-[2rem] max-w-full mq750:gap-[1rem] mq750:pt-[6.25rem] mq750:pb-[1.625rem] mq750:box-border">
                <div className="w-[77.5rem] h-[29.5rem] relative rounded-lg bg-purple-3 hidden max-w-full" />
                <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                    <img
                        className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 object-contain min-h-[2.5rem] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/quote@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                        <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.188rem]">
                            Testimonials
                        </h2>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-[1.125rem] text-grey-darker mq750:gap-[1.25rem]">
                    <div className="self-stretch relative tracking-[0.02em] leading-[1.875rem] font-light z-[1]">
                        In a fast growing and ever changing city like Bangalore, it
                        sometimes becomes very difficult to find or connect with like minded
                        people. Websites like hobbycue.com is a great service which helps me
                        get in touch with, communicate, connect, and exchange ideas with
                        other dancers. It also provides the extra benefit of finding
                        products and services that I can avail, which I can be assured is
                        going to be of great quality as it comes recommended by people of
                        the hobbycue community. To have discussions, to get visibility, and
                        to be able to safely explore various hobbies and activities in my
                        city, all under one roof, is an excellent idea and I highly
                        recommend it.
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[5rem] max-w-full text-[0.75rem] text-primary-full lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
                        <div className="h-[6.25rem] flex-1 relative rounded-lg bg-purple-2 min-w-[31.5rem] max-w-full z-[1] mq750:h-auto mq750:min-h-[100] mq750:min-w-full">
                            <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-purple-2 w-full h-full hidden" />
                            <div className="absolute top-[1.875rem] left-[2rem] w-[2.5rem] h-[2.5rem]">
                                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-grey-white w-full h-full z-[1]" />
                                <img
                                    className="absolute top-[0.5rem] left-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/play-arrow-black-24dp-1.svg"
                                />
                            </div>
                            <div className="absolute top-[2.75rem] left-[7rem] rounded-[50%] bg-primary-full w-[0.75rem] h-[0.75rem] z-[2]" />
                            <img
                                className="absolute top-[1.188rem] left-[42.75rem] rounded-[50%] w-[3.75rem] h-[3.75rem] object-contain z-[1]"
                                loading="lazy"
                                alt=""
                                src="/ellipse-26@2x.png"
                            />
                            <img
                                className="absolute top-[2.938rem] left-[42rem] w-[2rem] h-[2rem] overflow-hidden z-[2]"
                                alt=""
                                src="/mic-black-24dp-1.svg"
                            />
                            <div className="absolute top-[2.625rem] left-[7.375rem] w-[31.625rem] flex flex-row items-start justify-start gap-[0.75rem] max-w-full mq750:flex-wrap">
                                <div className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[19rem] max-w-full">
                                    <div className="self-stretch h-[0.125rem] relative rounded-sm bg-grey-white z-[1]" />
                                </div>
                                <div className="relative leading-[1rem] inline-block min-w-[1.625rem] z-[1]">
                                    0:00
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[1.5rem] min-w-[19rem] text-[1.125rem] mq1050:flex-1 mq450:flex-wrap">
                            <img
                                className="h-[6.25rem] w-[6.25rem] relative rounded-[50%] object-cover z-[1] mq450:flex-1"
                                loading="lazy"
                                alt=""
                                src="/ellipse-12@2x.png"
                            />
                            <div className="flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem]">
                                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                                    <div className="relative tracking-[0.02em] font-semibold z-[1]">
                                        Shubha Nagarajan
                                    </div>
                                    <div className="relative text-[0.875rem] tracking-[0.02em] text-blue-1 inline-block min-w-[7.688rem] z-[1]">
                                        Classical Dancer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonials.propTypes = {
    className: PropTypes.string,
};

export default Testimonials;
