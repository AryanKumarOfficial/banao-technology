import PropTypes from "prop-types";
import Logo from "@/public/assets/logo.png";
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = ({ className = "" }) => {

  const hanlderMenuClick = () => {
    const sidebar = document.querySelector(`.${styles.sidebar}`);
    sidebar.classList.toggle(`${styles.sidebar__active}`);
  };

  return (
    <div
      className={`self-stretch flex flex-wrap flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border top-[0] z-[99] sticky max-w-full ${className} mq450:px-[1.25rem] mq750:px-[2.5rem] mq450:pb-[0.625rem] mq750:pb-[0.75rem] mq450:pt-[0.25rem] mq750:pt-[0.5rem] mq450:top-[0] mq750:top-[0] mq450:z-[99] mq750:z-[99] mq450:sticky mq750:sticky mq450:gap-[1.375rem] mq750:gap-[2.813rem]`}
    >
      <header className="flex-1 flex flex-wrap flex-row items-start mq450:items-center justify-center py-[0.625rem] px-[1.25rem] box-border relative gap-[5.625rem] max-w-full text-left text-[0.75rem] text-darkgray font-text-sm-bold mq750:gap-[2.813rem] mq450:gap-[1.375rem] mq450:px-[0rem]">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]  bg-grey-white" />
        <div href={'/'} className="w-[39.25rem] flex flex-wrap flex-row mq450:flex-row items-start justify-start gap-[2.168rem] max-w-full mq750:gap-[1.063rem] mq450:items-center">
          <Link href="/">
            <img
              className="h-[3.75rem] w-[18.331rem] relative object-cover z-[1] mq450:w-[9rem] mq450:h-[1.875rem] mq750:w-[18rem] mq750:h-[3.75rem] mq750:object-cover"
              loading="lazy"
              alt=""
              src={`/assets/logo.png`}
            />
          </Link>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[0.75rem] relative gap-[1.25rem] mq450:gap-1 mq450:pl-0 z-[1] mq450:hidden">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-lg bg-grey-hover box-border mix-blend-normal border-[1px] border-solid border-grey-lighter mq450:hidden" />
              <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] mq450:hidden">
                <a className="[text-decoration:none] relative leading-[1rem] font-light text-[inherit] inline-block min-w-[4.938rem] whitespace-nowrap z-[1]">
                  Search here...
                </a>
              </div>
              <div className="h-[2.5rem] w-[2.5rem] relative z-[1]">
                <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-primary-full w-full h-full mq450:hidden" />
                <img
                  className="absolute top-[0.75rem] left-[0.75rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-[1rem] h-[1rem] overflow-hidden z-[1] "
                  alt=""
                  src="/assets/search-sm.svg"
                />
                <img
                  className="absolute top-[0.75rem] left-[0.75rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-[1rem] h-[1rem] overflow-hidden z-[1] mq450:hidden"
                  alt=""
                  src="/assets/search.png"
                />
              </div>
            </div>
          </div>
          <div className="hidden mq450:flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/assets/search-sm.svg"
            />
          </div>
          <div className="hidden mq450:flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/assets/notifications.svg"
            />
          </div>
          <div className="hidden mq450:flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/assets/menu.svg"
              onClick={hanlderMenuClick}
            />
          </div>

        </div>
        <div className={`${styles.sidebar}`}>
          <div className={`${styles.sidebar__content}`}>
            <div className={`${styles.sidebar__content__header}`}>
              <div className={`${styles.sidebar__content__header__logo}`}>
                <Link href="/"
                  onClick={() => {
                    const sidebar = document.querySelector(`.${styles.sidebar}`);
                    sidebar.classList.remove(`${styles.sidebar__active}`);
                  }}
                >
                  <img
                    className={`${styles.sidebar__content__header__logo__img}`}
                    src="/assets/logo-sm.svg"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className={`${styles.sidebar__content__header__close}`}
                onClick={hanlderMenuClick}
              >
                <img
                  className={`${styles.sidebar__content__header__close__img}`}
                  src="/assets/close.svg"
                  alt="close"
                  onClick={hanlderMenuClick}
                />
              </div>
            </div>
            <div className={`${styles.sidebar__content__search}`}>
              <input
                type="text"
                placeholder="Search here..."
                className={`${styles.sidebar__content__search__input}`}
              />
              <img
                className={`${styles.sidebar__content__search__img}`}
                src="/assets/search-sm.svg"
                alt="search"
              />
            </div>
            <div className={`${styles.sidebar__content__menu} mx-20`}>
              <div className={`${styles.sidebar__content__menu__item}`}>
                <img
                  className={`${styles.sidebar__content__menu__item__img}`}
                  src="/assets/explore.svg"
                  alt="explore"
                />
                <span className={`${styles.sidebar__content__menu__item__text}`}>
                  Explore
                </span>
              </div>
              <div className={`${styles.sidebar__content__menu__item}`}>
                <img
                  className={`${styles.sidebar__content__menu__item__img}`}
                  src="/assets/hobbies.svg"
                  alt="hobbies"
                />
                <span className={`${styles.sidebar__content__menu__item__text}`}>
                  Hobbies
                </span>
              </div>
              <div className={`${styles.sidebar__content__menu__item}`}>

                <img
                  className={`${styles.sidebar__content__menu__item__img}`}
                  src="/assets/bookmark.svg"
                  alt="bookmark"
                />
                <span className={`${styles.sidebar__content__menu__item__text}`}>
                  Notifications
                </span>
              </div>
              <div className={`${styles.sidebar__content__menu__item}`}>

                <img
                  className={`${styles.sidebar__content__menu__item__img}`}
                  src="/assets/notifications.svg"
                  alt="notifications"
                />
                <span className={`${styles.sidebar__content__menu__item__text}`}>
                  Notifications
                </span>
              </div>
              <div className={`${styles.sidebar__content__menu__item}`}>
                <img
                  className={`${styles.sidebar__content__menu__item__img}`}
                  src="/assets/cart.svg"
                  alt="cart"
                />
                <span className={`${styles.sidebar__content__menu__item__text}`}>
                  Cart
                </span>
              </div>
            </div>
            <div className={`${styles.sidebar__content__signin}`}>
              <span className={`${styles.sidebar__content__signin__text}`}>
                Sign In
              </span>
            </div>
          </div>
        </div>
        <div className="w-[32.813rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full text-[0.875rem] text-base-black mq450:hidden ">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/assets/explore.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative leading-[1.375rem] font-medium text-[inherit] inline-block min-w-[3.188rem]">
                    Explore
                  </a>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/assets/down-arrow.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                <div className="h-[1.5rem] w-[1.5rem] relative">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full overflow-hidden"
                    alt=""
                    src="/assets/hobbies.svg"
                  />
                  <div className="absolute top-[0rem] left-[0rem] w-full h-full flex flex-row items-center justify-center gap-[0.625rem] z-[1]">
                    <img
                      className="h-[1.188rem] w-[1.188rem] relative"
                      alt=""
                      src="/assets/polygon.svg"
                    />
                    <img
                      className="h-[0.75rem] w-[0.75rem] absolute !m-[0] top-[0.35rem] left-[0.375rem] rounded-12xs-4 z-[1]"
                      alt=""
                      src="/assets/star.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <a className="[text-decoration:none] relative leading-[1.375rem] font-medium text-[inherit] inline-block min-w-[3.625rem]">
                    Hobbies
                  </a>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  alt=""
                  src="/assets/down-arrow.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/assets/bookmark.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/assets/notifications.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/assets/cart.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start text-primary-full">
              <div className="flex flex-row items-start justify-start pt-[0.625rem] px-[2rem] pb-[0.875rem] relative whitespace-nowrap">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-lg bg-grey-white box-border border-[1px] border-solid border-primary-full" />
                <a className="[text-decoration:none] relative leading-[1rem] font-semibold text-[inherit] inline-block min-w-[3rem] z-[1]">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
