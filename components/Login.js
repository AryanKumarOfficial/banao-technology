import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";
import zxcvbn from "zxcvbn";

const LoginComponent = ({ className = "" }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSignInVisible, setIsSignInVisible] = useState(true);
    const [passwordScore, setPasswordScore] = useState(0);
    const [password, setPassword] = useState("");


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        const passwordStrength = zxcvbn(passwordValue);
        setPasswordScore(passwordStrength.score);
    };

    const toggleForm = (isSignIn) => {
        setIsSignInVisible(isSignIn);
    };

    const getPasswordStrength = (score) => {
        switch (score) {
            case 0:
                return "Very Weak";
            case 1:
                return "Weak";
            case 2:
                return "Fair";
            case 3:
                return "Good";
            case 4:
                return "Strong";
            default:
                return "";
        }
    };

    const getPasswordStrengthColor = (score) => {
        switch (score) {
            case 1:
                return "bg-red-500";
            case 2:
                return "bg-orange-500";
            case 3:
                return "bg-orange-500";
            case 4:
                return "bg-green-500";
            default:
                return "bg-gray-300";
        }
    };

    const getPasswordStrengthWidth = (score) => {
        switch (score) {
            case 0:
                return "20%";
            case 1:
                return "40%";
            case 2:
                return "60%";
            case 3:
                return "80%";
            case 4:
                return "100%";
            default:
                return "0%";
        }
    };


    return (
        <section
            className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.687rem] box-border max-w-full ${className}`}
        >
            <form className="m-0 flex-1 bg-purple-3 flex flex-col items-center justify-start pt-[6.25rem] px-[1.25rem] pb-0 box-border gap-[1.5rem] shrink-0 max-w-full z-[2] mq750:pt-[4.063rem] mq750:box-border" onSubmit={handleSubmit}>
                <div className="w-[90rem] h-[42.375rem] relative bg-purple-3 hidden max-w-full" />
                <div className="w-[77.5rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] lg:flex-wrap">
                    <div className="w-[44.188rem] flex flex-col items-start justify-start gap-[2rem] min-w-[44.188rem] max-w-full lg:flex-1 mq750:gap-[1rem] mq1050:min-w-full">
                        <h1 className="m-0 relative text-[2.25rem] tracking-[0.02em] inline-block italic font-semibold font-text-sm-bold text-left max-w-full z-[1] mq1050:text-[1.813rem] mq450:text-[1.375rem] mq450:tracking-tighter">
                            <span className="text-base-black">Explore your</span>
                            <span className="text-blue-1"> hobby</span>
                            <span className="text-base-black">{` or `}</span>
                            <span className="text-primary-full">passion</span>
                        </h1>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
                            <div className="self-stretch relative text-[0.875rem] tracking-[0.02em] leading-[1.875rem] font-light font-text-sm-bold text-base-black text-justify z-[1]">
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[0.062rem] box-border max-w-full">
                                <div className="flex-1 relative text-[0.875rem] tracking-[0.02em] leading-[1.875rem] font-light font-text-sm-bold text-base-black whitespace-pre-wrap text-justify inline-block max-w-full z-[1] mq450:hidden">
                                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                                </div>
                            </div>
                        </div>
                        <div className="w-[43.569rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[43.569rem] max-w-full lg:flex-1 mq1050:min-w-full mq450:order-4 mq450:hidden">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0.9rem] max-w-full mq750:flex-wrap mq450:flex-row">
                                <img
                                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[5rem] min-h-[13.5rem] shrink-0 z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/people1.svg"
                                />
                                <img
                                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full min-w-[5rem] min-h-[13.5rem] shrink-0 z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/assets/people2.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[25.625rem] flex flex-col items-start justify-start pt-[0.187rem] px-0 pb-0 box-border min-w-[25.625rem] max-w-full lg:flex-1 mq750:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq450:gap-[1rem]">
                            <div className="w-[10.563rem] flex flex-row items-start justify-between gap-[1.25rem] z-[1]">
                                <div className={`w-[4.375rem] mq750:mx-14 flex flex-col items-start justify-start gap-[0.125rem] cursor-pointer ${isSignInVisible ? "hover:text-primary-full text-primary-full" : "text-darkgray"}`} onClick={() => toggleForm(true)}>
                                    <div id="signBtn" className="relative text-[1.25rem] font-semibold font-text-sm-bold text-left inline-block min-w-[4.313rem] mq450:text-[1rem]">Sign In</div>
                                    <div className={`self-stretch h-[0.125rem] relative ${isSignInVisible ? "bg-primary-full" : ""}`} />
                                </div>
                                <div className={`flex flex-col items-start cursor-pointer justify-start ${!isSignInVisible ? "hover:text-primary-full text-primary-full" : "text-darkgray"}`} onClick={() => toggleForm(false)}>
                                    <div id="joinBtn" className="relative text-[1.25rem] font-semibold font-text-sm-bold text-left inline-block min-w-[4.188rem] mq450:text-[1rem]">Join In</div>
                                    <div className={`h-[0.125rem] w-[4.188rem] relative ${!isSignInVisible ? "bg-primary-full" : "hidden"}`} />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col mq450:flex-col-reverse items-start justify-start gap-[1.75rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] mq450:order-1">
                                    <button className="cursor-pointer py-[0.625rem] px-[1.5rem] bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[5.5rem] whitespace-nowrap z-[1] border-[1px] border-solid border-primary-full hover:bg-plum hover:text-white hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[2.75rem]">
                                        <img className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]" alt="" src="/assets/google.svg" />
                                        <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-left">Continue with Google</div>
                                    </button>
                                    <button className="cursor-pointer py-[0.625rem] px-[1.5rem] bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[4.937rem] whitespace-nowrap z-[1] border-[1px] border-solid border-primary-full hover:bg-plum hover:text-white hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[2.438rem]">
                                        <img className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]" alt="" src="/assets/facebook.svg" />
                                        <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-left">Continue with Facebook</div>
                                    </button>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] z-[1] mq450:flex-wrap mq450:order-2">
                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-0 pb-0 box-border min-w-[6.063rem]">
                                        <div className="self-stretch h-[0.125rem] relative bg-grey-light" />
                                    </div>
                                    <div className="relative text-[0.75rem] leading-[1rem] font-semibold font-text-sm-bold text-base-black text-left inline-block min-w-[6.063rem]">Or connect with</div>
                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-0 pb-0 box-border min-w-[6.063rem]">
                                        <div className="self-stretch h-[0.125rem] relative bg-grey-light" />
                                    </div>
                                </div>
                                {isSignInVisible ? (
                                    <div id="sign_in" className="self-stretch flex flex-col items-start justify-start gap-[1rem] mq450:order-5">
                                        <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-2 px-3 z-[1] border border-solid border-grey-lighter focus-within:border-primary-full focus-within:ring focus-within:ring-purple-2">
                                            <input className="w-full border-none outline-none font-text-sm-bold text-[0.75rem] bg-transparent h-1 leading-4 text-darkgray text-left p-2" placeholder="Email" type="text" aria-label="Email" />
                                        </div>
                                        <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-2 px-3 z-[1] border border-solid border-grey-lighter focus-within:border-primary-full focus-within:ring focus-within:ring-purple-2">
                                            <input className="w-full border-none outline-none font-text-sm-bold text-[0.75rem] bg-transparent h-1 leading-4 text-darkgray text-left p-2" placeholder="Password" type={isPasswordVisible ? "text" : "password"} aria-label="Password" />
                                            <button type="button" onClick={togglePasswordVisibility} className="cursor-pointer overflow-hidden shrink-0 relative bg-transparent">
                                                <img className="w-full h-full object-cover" alt="" src={isPasswordVisible ? "/assets/eye-on.svg" : "/assets/password.svg"} />
                                            </button>
                                        </div>
                                        <div className="w-full flex flex-col gap-10 items-start justify-between mq450:w-full">
                                            <div className="self-stretch flex flex-row items-center justify-between w-[25rem] gap-[1.25rem] mq450:flex-wrap">
                                                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                                                    <input
                                                        className="m-0 h-[1rem] w-[1rem] relative z-[1] accent-plum"
                                                        type="checkbox"
                                                        id="remember-me"
                                                    />
                                                    <label htmlFor="remember-me" className="relative text-[0.75rem] leading-[1rem] font-text-sm-bold text-plum cursor-pointer font-semibold text-left inline-block min-w-[5.75rem] z-[1] hover:text-primary-full transition-colors duration-300">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <Link href={'/forget'} className="flex flex-row items-start justify-start gap-[0.487rem] no-underline text-plum hover:text-primary-full">
                                                    <img
                                                        className="h-[1rem] w-[0.988rem] relative overflow-hidden shrink-0 min-h-[1rem] z-[1]"
                                                        alt=""
                                                        src="/assets/lock_black.svg"
                                                    />
                                                    <div className="relative text-[0.75rem] leading-[1rem] font-text-sm-bold font-bold text-left inline-block min-w-[6.713rem] shrink-0 z-[1]">
                                                        Forgot password?
                                                    </div>
                                                </Link>
                                            </div>
                                            <button type="submit" className="cursor-pointer py-[0.625rem] px-[1.25rem] bg-[transparent] self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-primary-full text-primary-full hover:bg-[#8064a2] hover:!text-white hover:box-border hover:border-transparent transition-colors duration-500">
                                                <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold  text-left inline-block min-w-[4.125rem]">
                                                    Conntinue
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div id="join_in" className="self-stretch flex flex-col items-start justify-start gap-[1rem] mq450:order-5">
                                        <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-2 px-3 z-[1] border border-solid border-grey-lighter focus-within:border-primary-full focus-within:ring focus-within:ring-purple-2">
                                            <input className="w-full border-none outline-none font-text-sm-bold text-[0.75rem] bg-transparent h-1 leading-4 text-darkgray text-left p-2" placeholder="Email" type="text" aria-label="Email" />
                                        </div>
                                        <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-2 px-3 z-[1] border border-solid border-grey-lighter focus-within:border-primary-full focus-within:ring focus-within:ring-purple-2">
                                            <input onChange={handlePasswordChange} className="w-full border-none outline-none font-text-sm-bold text-[0.75rem] bg-transparent h-1 leading-4 text-darkgray text-left p-2" placeholder="Password" value={password} type={isPasswordVisible ? "text" : "password"} aria-label="Password" />
                                            <button type="button" onClick={togglePasswordVisibility} className="cursor-pointer  overflow-hidden shrink-0 bg-transparent relative">
                                                <img className="w-full h-full object-cover" alt="" src={isPasswordVisible ? "/assets/eye-on.svg" : "/assets/password.svg"} />
                                            </button>
                                        </div>

                                        <div className="self-stretch flex justify-between items-center flex-row gap-2">
                                            <div className="relative w-56 h-2 bg-gray-200 rounded">
                                                <div
                                                    className={`h-full rounded ${getPasswordStrengthColor(passwordScore)}`}
                                                    style={{ width: getPasswordStrengthWidth(passwordScore) }}
                                                ></div>
                                                <div className="absolute top-0 left-1/3 w-0.5 h-full bg-white"></div>
                                                <div className="absolute top-0 left-2/3 w-0.5 h-full bg-white"></div>
                                            </div>
                                            <div className=" flex justify-center items-center text-[0.75rem] leading-[1rem] font-semibold font-text-sm-bold text-darkgray text-left  min-w-[6.063rem]">
                                                Password Strength
                                            </div>
                                        </div>
                                        <div className="w-[10rem] flex flex-col gap-10 items-start justify-between mq450:w-full text-sm">
                                            <div className="self-stretch  flex-col items-center justify-between w-[25rem] gap-[1.25rem] mq450:flex-wrap text-wrap mq450:text-[0.60rem]">
                                                By continuing, you agree to our <Link href={'/terms'} className="text-darkslategray-400 font-bold no-underline hover:text-primary-full">Terms of Service</Link> and <Link href={'/privacy'} className="text-darkslategray-400 hover:text-primary-full no-underline font-bold">Privacy Policy</Link>.
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col gap-10 items-start justify-between mq450:w-full">
                                            <button type="submit" className="cursor-pointer py-[0.625rem] px-[1.25rem] bg-[transparent] self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-primary-full text-primary-full hover:bg-[#8064a2] hover:!text-white hover:box-border hover:border-transparent transition-colors duration-500">
                                                <div className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold  text-left inline-block min-w-[4.125rem]">
                                                    Agree and Conntinue
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section >
    );
};

LoginComponent.propTypes = {
    className: PropTypes.string,
};

export default LoginComponent;
