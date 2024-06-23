import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
    return (
        <div
            className={`self-stretch bg-grey-white flex flex-col items-start justify-start pt-[3.75rem] px-[0rem] pb-[0rem] box-border gap-[3.75rem] max-w-full text-left text-[0.875rem] text-grey-darkest font-text-sm-bold mq750:gap-[1.875rem] mq450:pt-[2.438rem] mq450:box-border ${className}`}
        >
            <div className="self-stretch h-[23.75rem] relative bg-grey-white hidden" />
            <div className="w-[88.813rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="w-[76.063rem] flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.687rem] pl-[0rem] gap-[1rem]">
                            <b className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[4.688rem] z-[1]">
                                Hobbycue
                            </b>
                            <a className="[text-decoration:none] relative tracking-[0.01em] leading-[1.125rem] text-[inherit] inline-block min-w-[4rem] z-[1]">
                                About Us
                            </a>
                        </div>
                        <div className="w-[6.625rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1rem]">
                            <b className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[3.875rem] z-[1]">
                                How Do I
                            </b>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[3.375rem] whitespace-nowrap z-[1]">
                                Sign Up
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1rem]">
                            <b className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.188rem] z-[1]">
                                Quick Links
                            </b>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[3.313rem] z-[1]">
                                Listings
                            </div>
                        </div>
                        <div className="w-[22.5rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
                            <b className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.875rem] z-[1]">
                                Social Media
                            </b>
                            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-60.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-61.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-62.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-63.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-59.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-58.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/group-57.svg"
                                />
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
                                    alt=""
                                    src="/group-56.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.563rem] z-[1]">
                                Our Services
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.625rem] z-[1]">
                                Work with Us
                            </div>
                            <a className="[text-decoration:none] relative tracking-[0.01em] leading-[1.125rem] text-[inherit] inline-block min-w-[1.75rem] z-[1]">
                                FAQ
                            </a>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[4.938rem] z-[1]">
                                Contact Us
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.688rem] z-[1]">
                                Add a Listing
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.688rem] z-[1]">
                                Claim Listing
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.625rem] z-[1]">
                                Post a Query
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[7rem] z-[1]">
                                Add a Blog Post
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[6.125rem] z-[1]">
                                Other Queries
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[4.563rem] z-[1]">
                                Blog Posts
                            </div>
                            <div className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[5.5rem] z-[1]">
                                Shop / Store
                            </div>
                            <a className="[text-decoration:none] relative tracking-[0.01em] leading-[1.125rem] text-[inherit] inline-block min-w-[5.313rem] z-[1]">
                                Community
                            </a>
                        </div>
                        <div className="w-[22.5rem] flex flex-col items-start justify-start pt-[3rem] px-[0rem] pb-[0rem] box-border max-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
                                <b className="relative tracking-[0.01em] leading-[1.125rem] inline-block min-w-[6.188rem] z-[1]">
                                    Invite Friends
                                </b>
                                <div className="self-stretch rounded-lg bg-grey-white box-border flex flex-row items-start justify-between py-[0rem] pr-[0.125rem] pl-[0.875rem] max-w-full gap-[1.25rem] z-[1] text-[0.75rem] text-darkgray border-[1px] border-solid border-primary-full mq450:flex-wrap">
                                    <div className="self-stretch w-[22.5rem] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-primary-full" />
                                    <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                                        <div className="relative leading-[1rem] inline-block min-w-[3rem] z-[1]">
                                            Email ID
                                        </div>
                                    </div>
                                    <button className="cursor-pointer [border:none] p-[0.75rem] bg-primary-full rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-start justify-start z-[1] hover:bg-plum">
                                        <div className="h-[2.5rem] w-[3.688rem] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full hidden" />
                                        <div className="relative text-[0.75rem] tracking-[0.01em] leading-[1rem] font-semibold font-text-sm-bold text-grey-white text-left inline-block min-w-[2.188rem] z-[2]">
                                            Invite
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="self-stretch bg-purple-3 flex flex-row items-start justify-center py-[1.875rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full z-[1] text-left text-[0.875rem] text-grey-darkest font-text-sm-bold">
                <div className="h-[4.875rem] w-[90rem] relative bg-purple-3 hidden max-w-full" />
                <div className="relative tracking-[0.01em] leading-[1.125rem] font-medium mix-blend-normal z-[1]">
                    © Purple Cues Private Limited
                </div>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
