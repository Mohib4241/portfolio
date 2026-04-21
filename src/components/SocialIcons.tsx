import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbFileCv,
  TbMail,
} from "react-icons/tb";
import "./styles/SocialIcons.css";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { profile } from "../data/profile";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;
    const cleanups: Array<() => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <TbBrandGithub />
          </a>
        </span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <TbBrandLinkedin />
          </a>
        </span>
        <span>
          <a href={`mailto:${profile.email}`}>
            <TbMail />
          </a>
        </span>
        <span>
          <a href={profile.resumeHref} download={profile.resumeFileName}>
            <TbFileCv />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={profile.resumeHref}
        download={profile.resumeFileName}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbFileCv />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
