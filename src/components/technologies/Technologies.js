import React from "react";
import "./technologies.styles.css";
import { iconsData } from "./iconsData";

const Technologies = () => {
  return (
    <section className="technologies-container">
      <h2 className="technologies-header">Technologies I am familiar with</h2>
      <div className="technologies-icons">
        {iconsData.map((iconData) => {
          return (
            <img
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
              className="technology-icon"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
