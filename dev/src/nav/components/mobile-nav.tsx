/**
 * Device menu navigation main component
 * @since 3.0
 */

// framework
import React, { useEffect, useRef, useState } from "react";

// types
import "../../../globals";
import { WmMnavSlideRef } from "../../types";

// components
import SlideMainComp from "./slide-main";
import SlideSub from "./slide-sub";
import AboutSlide from "./device-slides/slide-about";
import IndustriesSlide from "./device-slides/slide-industries";
import SolutionsSlide from "./device-slides/slide-solutions";
import ProductsSlide from "./device-slides/slide-products";
import ServicesSlide from "./device-slides/slide-services";

//assets
import EssLogo from "./ess-logo";
import "../sass/devices_nav.sass";

declare type DevicesNavProps = {
  homeUrl: string;
  templateUrl: string;
};

const MobileNav: React.FC<DevicesNavProps> = ({ homeUrl, templateUrl }) => {
  type HeaderStyle = {
    transition: string;
    backgroundColor?: string;
    borderBottom?: string;
  };

  const getHeaderStyle = (nextIsTop: boolean): HeaderStyle => ({
    transition: "background-color 200ms ease, border-color 200ms ease",
    backgroundColor: nextIsTop
      ? "rgba(255,255,255,0)"
      : "rgba(255,255,255,1)",
    borderBottom: nextIsTop ? "none" : "1px solid rgba(153,153,153,0.35)",
  });

  const [isActive, setIsActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState<HTMLDivElement>();
  const [slidesArray, setSlidesArray] = useState<WmMnavSlideRef[]>([]);

  const Slides = useRef<HTMLDivElement>(null);
  const SlideMain = useRef<HTMLDivElement>(null);
  const SlideAbout = useRef<HTMLDivElement>(null);
  const SlideSolutions = useRef<HTMLDivElement>(null);
  const SlideIndustries = useRef<HTMLDivElement>(null);

  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>({
    transition: "all 200ms ease-in",
  });
  const [isTop, setIsTop] = useState(true);
  const [darkOnTop, setDarkOnTop] = useState(false);

  useEffect(() => {
    setDarkOnTop(document.body.classList.contains("ess-nav-on-dark"));
    const initialIsTop = window.scrollY <= 0;
    setIsTop(initialIsTop);
    setHeaderStyle(getHeaderStyle(initialIsTop));

    setSlidesArray([
      {
        name: "About us",
        el: SlideAbout.current,
      },
      {
        name: "Products",
        el: SlideIndustries.current,
      },
      {
        name: "Services",
        el: SlideSolutions.current,
      },
    ]);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const nextIsTop = window.scrollY <= 0;

      setIsTop((currentIsTop) =>
        currentIsTop === nextIsTop ? currentIsTop : nextIsTop,
      );
      setHeaderStyle((currentHeaderStyle) => {
        const nextHeaderStyle = getHeaderStyle(nextIsTop);

        return currentHeaderStyle.backgroundColor ===
          nextHeaderStyle.backgroundColor &&
          currentHeaderStyle.borderBottom === nextHeaderStyle.borderBottom
          ? currentHeaderStyle
          : nextHeaderStyle;
      });
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollState();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const callSlide = (slide: HTMLDivElement, back: boolean) => {
    if (activeSlide && activeSlide !== slide) {
      const SlideToDismiss = activeSlide;
      window.gsap.to(SlideToDismiss, {
        opacity: 0,
        left: back ? "50%" : "-50%",
        onComplete: () => {
          window.gsap.set(SlideToDismiss, { display: "none" });
        },
      });
    }
    window.gsap.set(slide, {
      left: back ? "-50%" : "50%",
      opacity: 0,
      display: "block",
    });
    window.gsap.to(slide, { left: 0, opacity: 1 });
    setActiveSlide(slide);
  };

  const navToggle = (event: React.MouseEvent<HTMLElement>) => {
    // Trigger ON
    if (!isActive) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      window.essLenis?.stop();

      event.currentTarget.classList.add("is-active");

      window.gsap.set(Slides.current, { display: "block" });
      window.gsap.set(Slides.current, { opacity: 0 });
      window.gsap.to(Slides.current, { opacity: 1 });
      if (SlideMain.current) callSlide(SlideMain.current, false);
    }
    // Trigger OFF
    else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
      window.essLenis?.start();

      window.gsap.to(Slides.current, {
        opacity: 0,
        onComplete: () => {
          window.gsap.set(Slides.current, { display: "none" });
        },
      });
      event.currentTarget.classList.remove("is-active");
    }

    setIsActive(!isActive);
  };

  return (
    <div id="wmnav-wrap">
      <div
        id="wmnav-bar"
        className={`${darkOnTop && isTop ? "on-dark-top" : ""}`}
        style={{ ...headerStyle }}
      >
        <EssLogo
          homeUrl={homeUrl}
          templateUrl={templateUrl}
          inverted={darkOnTop && isTop}
        />

        <div id="wm-burger">
          <button
            onClick={navToggle}
            id="main-nav-toggler"
            className="m-right-base hamburger hamburger--collapse"
            type="button"
            data-toggle="top-menu"
            aria-label="hamburger navigation toggle"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <div id="wmnav-slides" ref={Slides}>
        <div ref={SlideMain} className="wmnav-slide" id="wmnav-slide-main">
          <SlideMainComp
            className="wmnav-slide-inner wmnav-main-slide"
            callSlide={callSlide}
            slideLinks={slidesArray}
          ></SlideMainComp>
        </div>

        <div ref={SlideAbout} className="wmnav-slide" id="wmnav-slide-about">
          <SlideSub
            title="About us"
            className="wmnav-slide-inner"
            callSlide={callSlide}
            slideLinks={[{ name: "main", el: SlideMain.current }]}
          >
            <AboutSlide homeUrl={homeUrl} />
          </SlideSub>
        </div>

        <div
          ref={SlideIndustries}
          className="wmnav-slide"
          id="wmnav-slide-industries"
        >
          <SlideSub
            title="Products"
            className="wmnav-slide-inner"
            callSlide={callSlide}
            slideLinks={[{ name: "main", el: SlideMain.current }]}
          >
            <ProductsSlide homeUrl={homeUrl} templateUrl={templateUrl} />
          </SlideSub>
        </div>
        <div
          ref={SlideSolutions}
          className="wmnav-slide"
          id="wmnav-slide-solutions"
        >
          <SlideSub
            title="Services"
            className="wmnav-slide-inner"
            callSlide={callSlide}
            slideLinks={[{ name: "main", el: SlideMain.current }]}
          >
            <ServicesSlide homeUrl={homeUrl} templateUrl={templateUrl} />
          </SlideSub>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
