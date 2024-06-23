import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
    className = "",
    groupsBlack24dp11,
    people,
    findATeacherCoachOrExpert,
    connect,
    propGap,
    propMinWidth,
    propPadding,
    propMinWidth1,
}) => {
    const groupDivStyle = useMemo(() => {
        return {
            gap: propGap,
        };
    }, [propGap]);

    const peopleStyle = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const frameButtonStyle = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const connectStyle = useMemo(() => {
        return {
            minWidth: propMinWidth1,
        };
    }, [propMinWidth1]);

    return (
        <div
            className={`flex-1 rounded-lg bg-grey-white box-border flex flex-col items-start justify-start py-[2.375rem] px-[2.687rem] gap-[2rem] max-w-full text-left text-[1.5rem] text-base-black font-text-sm-bold border-[1px] border-solid border-grey-light mq750:gap-[1rem] mq750:pl-[1.313rem] mq750:pr-[1.313rem] mq750:box-border ${className}`}
            style={groupDivStyle}
        >
            <div className="w-[38rem] h-[18.563rem] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-grey-light" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                    <img
                        className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0 min-h-[2.5rem] z-[1]"
                        loading="lazy"
                        alt=""
                        src={groupsBlack24dp11}
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                        <h2
                            className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[5.188rem] z-[1] mq450:text-[1.188rem]"
                            style={peopleStyle}
                        >
                            {people}
                        </h2>
                    </div>
                </div>
                <div className="self-stretch relative text-[1.125rem] font-light whitespace-pre-wrap z-[1]">
                    {findATeacherCoachOrExpert}
                </div>
            </div>
            <button
                className="cursor-pointer py-[0.625rem] pr-[1.812rem] pl-[1.875rem] bg-grey-white rounded-lg flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-primary-full hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum"
                style={frameButtonStyle}
            >
                <div
                    className="relative text-[0.875rem] leading-[1rem] font-semibold font-text-sm-bold text-primary-full text-left inline-block min-w-[3.813rem]"
                    style={connectStyle}
                >
                    {connect}
                </div>
            </button>
        </div>
    );
};

GroupComponent.propTypes = {
    className: PropTypes.string,
    groupsBlack24dp11: PropTypes.string,
    people: PropTypes.string,
    findATeacherCoachOrExpert: PropTypes.string,
    connect: PropTypes.string,

    /** Style props */
    propGap: PropTypes.any,
    propMinWidth: PropTypes.any,
    propPadding: PropTypes.any,
    propMinWidth1: PropTypes.any,
};

export default GroupComponent;
