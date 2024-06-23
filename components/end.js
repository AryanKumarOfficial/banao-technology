import PropTypes from "prop-types";

const End = ({ className = "" }) => {
    return (
        <div
            className={`self-stretch bg-blue-2 flex flex-col items-start justify-start pt-[6.25rem] pb-[1.875rem] pr-[0.875rem] pl-[6.25rem] box-border gap-[4.437rem] max-w-full text-left text-[2.25rem] text-base-black font-text-sm-bold mq750:gap-[2.188rem] mq750:pl-[3.125rem] mq750:pt-[4.063rem] mq750:pb-[1.25rem] mq750:box-border mq450:gap-[1.125rem] mq450:pl-[1.25rem] mq450:box-border ${className}`}
        >
            <div className="w-[90rem] h-[41.375rem] relative bg-blue-2 hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
                <h1 className="m-0 h-[3.375rem] relative text-inherit inline-block italic font-medium font-inherit max-w-full z-[1] mq1050:text-[1.813rem] mq450:text-[1.375rem]">
                    <span>{`Your `}</span>
                    <span className="text-primary-full">Hobby</span>
                    <span>{`, Your `}</span>
                    <span className="text-blue-1">Community...</span>
                </h1>
                <div className="self-stretch flex flex-col items-end justify-start gap-[0.437rem] max-w-full text-[0.625rem] text-primary-full">
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="w-[81.25rem] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                                <button className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-primary-full rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-plum">
                                    <div className="relative text-[1.25rem] font-semibold font-text-sm-bold text-grey-white text-left inline-block min-w-[7.188rem]">
                                        Get started
                                    </div>
                                </button>
                            </div>
                            <div className="h-[2.5rem] w-[2.5rem] relative z-[2] flex items-center justify-center">
                                <img
                                    className="h-full w-full z-[2] object-contain absolute left-[0rem] top-[0.5rem] [transform:scale(1.6)]"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/top.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="shadow-[0px_0px_5px_rgba(120,_120,_120,_0.14)] rounded-sm bg-grey-white flex flex-row items-start justify-start p-[0.187rem] whitespace-nowrap z-[1]">
                        <div className="relative tracking-[0.04em] leading-[0.75rem] font-medium inline-block min-w-[7.688rem]">
                            Go to top (Ctrl+Home)
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[78.75rem] flex flex-row items-end justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[4.437rem] max-w-full lg:flex-wrap mq750:gap-[2.188rem] mq450:gap-[1.125rem]">
                <div className="h-[17.563rem] w-[33.188rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border min-w-[33.188rem] max-w-full lg:flex-1 mq750:min-w-full">
                    <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1] lg:self-stretch lg:w-auto"
                        loading="lazy"
                        alt=""
                        src="/assets/group-1.svg"
                    />
                </div>
                <img
                    className="h-[18.875rem] flex-1 relative max-w-full overflow-hidden min-w-[25.938rem] z-[1] mq750:min-w-full"
                    loading="lazy"
                    alt=""
                    src="/assets/group-2.svg"
                />
            </div>
        </div>
    );
};

End.propTypes = {
    className: PropTypes.string,
};

export default End;
