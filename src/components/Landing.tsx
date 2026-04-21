import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {profile.firstName}
              <br />
              <span>{profile.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{profile.landingLead}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{profile.landingTitles[0]}</div>
              <div className="landing-h2-2">{profile.landingTitles[1]}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{profile.landingTitles[1]}</div>
              <div className="landing-h2-info-1">{profile.landingTitles[0]}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
