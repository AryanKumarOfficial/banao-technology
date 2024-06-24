import GroupComponent from "./group-component";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
    return (
        <section
            className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.062rem] box-border max-w-full mt-[-2.063rem] text-left text-[1.5rem] text-base-black font-text-sm-bold ${className}`}
        >
            <div className="flex-1 bg-grey-white flex flex-row items-start justify-center py-[6.25rem] px-[1.25rem] box-border shrink-0 max-w-full mq1050:pt-[3.313rem] mq1050:pb-[4.063rem] mq1050:box-border mq450:pb-[2.625rem] mq450:box-border">
                <div className="h-[51.125rem] w-[90rem] relative bg-grey-white hidden max-w-full" />
                <div className="w-[77.5rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full z-[1]">
                    <div className="self-stretch grid-flow-row-dense  grid grid-cols-2  items-start justify-start gap-[1.5rem] max-w-full mq1050:flex-wrap mq450:grid-flow-col-dense mq450:grid-rows-4 mq450:min-w-[90vh] ">
                        <GroupComponent
                            groupsBlack24dp11="/assets/groups.svg"
                            people="People"
                            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
                            connect="Connect"
                        />
                        <GroupComponent
                            groupsBlack24dp11="/assets/location.svg"
                            people="Place"
                            findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
                            connect="Meet up"
                            propGap="2rem"
                            propMinWidth="4.188rem"
                            propPadding="0.625rem 1.937rem"
                            propMinWidth1="3.625rem"
                        />
                        <GroupComponent
                            groupsBlack24dp11="/assets/product.svg"
                            people="Product"
                            findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
                            connect="Get it"
                            propGap="2rem"
                            propMinWidth="6rem"
                            propPadding="0.625rem 2.562rem"
                            propMinWidth1="2.375rem"
                        />
                        <GroupComponent
                            groupsBlack24dp11="/assets/program.svg"
                            people="Program"
                            findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
                            connect="Attend"
                            propGap="3.687rem"
                            propMinWidth="6.688rem"
                            propPadding="0.625rem 2.187rem"
                            propMinWidth1="3.063rem"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

FrameComponent.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent;
