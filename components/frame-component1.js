import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
    return (
        <section
            className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.687rem] box-border max-w-full ${className}`}
        >
            <form className="m-0 flex-1 bg-purple-3 flex flex-col items-center justify-start pt-[6.25rem] px-[1.25rem] pb-[0rem] box-border gap-[1.5rem] shrink-0 max-w-full z-[2] mq750:pt-[4.063rem] mq750:box-border">
                <div className="w-[90rem] h-[42.375rem] relative bg-purple-3 hidden max-w-full" />
                <div className="w-[77.5rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] lg:flex-wrap">
                    <div className="w-[44.188rem] flex flex-col items-start justify-start gap-[2rem] min-w-[44.188rem] max-w-full lg:flex-1 mq750:gap-[1rem] mq1050:min-w-full">
                        <h1 className="m-0 relative text-[2.25rem] tracking-[0.02em] inline-block italic font-semibold font-text-sm-bold text-left max-w-full z-[1] mq1050:text-[1.813rem] mq450:text-[1.375rem]">
                            <span className="text-base-black">Explore your</span>
                            <span className="text-blue-1"> hobby</span>
                            <span className="text-base-black">{` or `}</span>
                            <span className="text-primary-full">passion</span>
                        </h1>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
                            <div className="self-stretch relative text-[0.875rem] tracking-[0.02em] leading-[1.875rem] font-light font-text-sm-bold text-base-black text-left z-[1]">
                                Sign-in to interact with a community of fellow hobbyists and an
                                eco-system of experts, teachers, suppliers, classes, workshops,
                                and places to practice, participate or perform. Your hobby may
                                be about visual or performing arts, sports, games, gardening,
                                model making, cooking, indoor or outdoor activities…
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                                <div className="flex-1 relative text-[0.875rem] tracking-[0.02em] leading-[1.875rem] font-light font-text-sm-bold text-base-black whitespace-pre-wrap text-left inline-block max-w-full z-[1]">
                                    If you are an expert or a seller, you can Add your Listing and
                                    promote yourself, your students, products, services or events.
                                    Hop on your hobbyhorse and enjoy the ride.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[25.625rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[25.625rem] max-w-full lg:flex-1 mq750:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq450:gap-[1rem]">
                            <div className="w-[10.563rem] flex flex-row items-start justify-between gap-[1.25rem] z-[1]">
                                <div className="w-[4.375rem] flex flex-col items-start justify-start gap-[0.125rem]">
                                    <div className="relative text-[1.25rem] font-semibold font-text-sm-bold text-primary-full text-left inline-block min-w-[4.313rem] mq450:text-[1rem]">
                                        Sign In
                                    </div>
                                    <div className="self-stretch h-[0.125rem] relative bg-primary-full" />
                                </div>
                                <div className="flex flex-row items-start justify-start">
                                    <div className="relative text-[1.25rem] font-semibold font-text-sm-bold text-darkgray text-left inline-block min-w-[4.188rem] mq450:text-[1rem]">
                                        Join In
                                    </div>
                                    <div className="h-[0.125rem] w-[4.188rem] relative bg-primary-full hidden" />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                                    <button className="cursor-pointer py-[0.625rem] px-[1.5rem] bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[5.5rem] whitespace-nowrap z-[1] border-[1px] border-solid border-primary-full hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[2.75rem]">
                                        <img
                                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                                            alt=""
                                            src="/assets/google.svg"
                                        />
                                        <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-grey-darkest text-left">
                                            Continue with Google
                                        </div>
                                    </button>
                                    <button className="cursor-pointer py-[0.625rem] px-[1.5rem] bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[4.937rem] whitespace-nowrap z-[1] border-[1px] border-solid border-primary-full hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[2.438rem]">
                                        <img
                                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                                            alt=""
                                            src="/assets/facebook.svg"
                                        />
                                        <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-grey-darkest text-left">
                                            Continue with Facebook
                                        </div>
                                    </button>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] z-[1] mq450:flex-wrap">
                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[6.063rem]">
                                        <div className="self-stretch h-[0.125rem] relative bg-grey-light" />
                                    </div>
                                    <div className="relative text-[0.75rem] leading-[1rem] font-semibold font-text-sm-bold text-base-black text-left inline-block min-w-[6.063rem]">
                                        Or connect with
                                    </div>
                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[6.063rem]">
                                        <div className="self-stretch h-[0.125rem] relative bg-grey-light" />
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                                    <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-[0.625rem] px-[0.75rem] z-[1] border-[1px] border-solid border-grey-lighter">
                                        <input
                                            className="w-[2.063rem] [border:none] [outline:none] font-text-sm-bold text-[0.75rem] bg-[transparent] h-[1rem] relative leading-[1rem] text-darkgray text-left inline-block p-0"
                                            placeholder="Email"
                                            type="text"
                                        />
                                    </div>
                                    <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-between py-[0.625rem] pr-[0.812rem] pl-[0.687rem] gap-[1.25rem] z-[1] border-[1px] border-solid border-grey-lighter">
                                        <div className="relative text-[0.75rem] leading-[1rem] font-text-sm-bold text-darkgray text-left inline-block min-w-[3.625rem]">
                                            Password
                                        </div>
                                        <img
                                            className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
                                            alt=""
                                            src="/assets/password.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[77.5rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] lg:flex-wrap">
                    <div className="w-[43.569rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[43.569rem] max-w-full lg:flex-1 mq1050:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0.9rem] max-w-full mq750:flex-wrap">
                            <img
                                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[13.688rem] min-h-[13.5rem] shrink-0 z-[1]"
                                loading="lazy"
                                alt=""
                                src="/assets/people1.svg"
                            />
                            <img
                                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[14.063rem] min-h-[13.5rem] shrink-0 z-[1]"
                                loading="lazy"
                                alt=""
                                src="/assets/people2.svg"
                            />
                        </div>
                    </div>
                    <div className="w-[25.625rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                                <input
                                    className="m-0 h-[1rem] w-[1rem] relative z-[1]"
                                    type="checkbox"
                                />
                                <div className="relative text-[0.75rem] leading-[1rem] font-text-sm-bold text-base-black text-left inline-block min-w-[5.75rem] z-[1]">
                                    Remember me
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-[0.487rem]">
                                <img
                                    className="h-[1rem] w-[0.988rem] relative overflow-hidden shrink-0 min-h-[1rem] z-[1]"
                                    alt=""
                                    src="/assets/lock_black.svg"
                                />
                                <div className="relative text-[0.75rem] leading-[1rem] font-text-sm-bold text-base-black text-left inline-block min-w-[6.713rem] shrink-0 z-[1]">
                                    Forgot password?
                                </div>
                            </div>
                        </div>
                        <button className="cursor-pointer py-[0.625rem] px-[1.25rem] bg-[transparent] self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-base-black hover:bg-darkslategray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-400">
                            <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-base-black text-left inline-block min-w-[4.125rem]">
                                Continue
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

FrameComponent1.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent1;
