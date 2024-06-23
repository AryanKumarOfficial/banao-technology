import PropTypes from "prop-types";

const Testimonials1 = ({ className = "" }) => {
    return (
        <section
            className={`self-stretch bg-grey-white flex flex-row items-start justify-start pt-[1rem] px-[0rem] pb-[1.875rem] box-border shrink-0 max-w-full z-[2] mt-[-2.063rem] text-left text-[1.125rem] text-grey-darkest font-text-sm-bold mq750:pb-[1.25rem] mq750:box-border ${className}`}
        >
            <div className="h-[20.625rem] w-[77.5rem] relative hidden max-w-full">
                <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-grey-white box-border w-full h-full border-[1px] border-solid border-grey-light" />
                <div className="absolute top-[10.875rem] left-[2.5rem] tracking-[0.02em] leading-[1.875rem] font-light whitespace-pre-wrap inline-block w-[72.5rem]">
                    Are you a teacher or expert? Do you sell or rent out equipment, venue
                    or event tickets? Or, you know someone who should be on hobbycue? Go
                    ahead and Add your Own page
                </div>
                <div className="absolute top-[2.5rem] left-[33.063rem] text-[2.25rem] font-semibold mq1050:text-[1.813rem] mq450:text-[1.375rem]">
                    Add your own
                </div>
                <img
                    className="absolute top-[2.5rem] left-[28.688rem] w-[3.375rem] h-[3.375rem] overflow-hidden"
                    alt=""
                    src="/assets/add.svg"
                />
                <div className="absolute top-[15.625rem] left-[2.5rem] rounded-lg bg-grey-white box-border w-[7.625rem] h-[2.5rem] whitespace-nowrap text-[0.875rem] text-primary-full border-[1px] border-solid border-primary-full">
                    <div className="absolute top-[0.75rem] left-[1.813rem] leading-[1rem] font-semibold inline-block min-w-[3.938rem]">
                        Add new
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-blue-2 flex flex-row items-start justify-center py-[6.25rem] px-[1.25rem] box-border max-w-full z-[3] mq750:pt-[1rem] mq750:pb-[4.063rem] mq750:box-border">
                <div className="w-[77.5rem] flex flex-row items-start justify-start p-[2.5rem] box-border relative max-w-full">
                    <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-lg bg-grey-white box-border border-[1px] border-solid border-grey-light" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full z-[1] mq750:gap-[1rem]">
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[1.5rem]">
                            <img
                                className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 min-h-[2.5rem]"
                                alt=""
                                src="/assets/add.svg"
                            />
                            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                                <h2 className="m-0 relative text-[1.5rem] font-semibold font-text-sm-bold text-grey-darkest text-left mq450:text-[1.188rem]">
                                    Add your own
                                </h2>
                            </div>
                        </button>
                        <div className="self-stretch relative tracking-[0.02em] leading-[1.875rem] font-light whitespace-pre-wrap">
                            Are you a teacher or expert? Do you sell or rent out equipment,
                            venue or event tickets? Or, you know someone who should be on
                            hobbycue? Go ahead and Add your Own page
                        </div>
                        <button className="cursor-pointer py-[0.625rem] px-[1.75rem] bg-grey-white rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-primary-full hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum">
                            <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-primary-full text-left inline-block min-w-[3.938rem]">
                                Add new
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonials1.propTypes = {
    className: PropTypes.string,
};

export default Testimonials1;