/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, cointainerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${cointainerClass}`}>
      {title.split("<br />").map((line, i) => (
        <div key={i} className="flex-center max-w-full flex-wrap gap-2 px-10 md:ga-3">
          {line.split(" ").map((word, i) => (
            <span key={i} className="animated-word " dangerouslySetInnerHTML={{ __html: word }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
