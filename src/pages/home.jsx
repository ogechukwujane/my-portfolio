import React, { useState } from "react";
import MyPicture from "../assets/oge2.jpg";
import S from "../styles/index.module.scss";
import {
  experiences,
  myProfile,
  links,
  frameworks,
  languages,
  tools,
  others,
  myContacts,
  myProjects,
} from "../constant";

export const Home = () => {
  const [active, setActive] = useState("Overview");
  const year = new Date().getFullYear();
  return (
    <div className={S.Home}>
      <div className={S.navbar}>
        <div className={S.logo_wrap}>
          <p className={S.logo}>OP</p>
          <p className={S.my_name}>Ogechi</p>
        </div>
        <div className={S.desktop_nav}>
          <div className={S.links_container}>
            {links.map((link) => (
              <p
                key={link}
                className={`${active === link ? S.active_link : S.link}`}
                onClick={() => setActive(link)}
              >
                <span>#</span>
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={S.home_content}>
        <div className={S.about_container}>
          <div className={S.about_content}>
            <div className={S.image_container}>
              <div className={S.image_wrap}>
                <img src={MyPicture} alt="my picture" />
              </div>
              <div>
                <p className={S.name}>Onyejekwe Ogechukwu</p>
                <p className={S.role}>Frontend Developer</p>
              </div>
            </div>
            <p className={S.about_me}>
              I am an enthusiastic frontend developer with proven experience in
              crafting modern web applications. I'm goal driven,
              industrious and love human interaction. Problem solving is one
              thing I love doing. I am interested in freelance opportunities. Contact me and you will be happy  you did.
            </p>
          </div>
        </div>
        <div className={S.mobile_navs}>
          <div className={S.links_container}>
            {links.map((link) => (
              <p
                key={link}
                className={`${active === link ? S.active_link : S.link}`}
                onClick={() => setActive(link)}
              >
                <span>#</span>
                {link}
              </p>
            ))}
          </div>
        </div>
        <div className={S.main_content}>
          {/* about me */}
          {active === "Overview" && (
            <div>
              <div>
                <p className={S.subHeading}>My Profile:</p>
                {myProfile.map((profile) => (
                  <div className={S.paragraph_wrap} key={profile.subtitle}>
                    <p className={`${S.sub_title} ${S.max_width}`}>
                      {profile.subtitle}
                    </p>
                    <p className={S.paragraph}>{profile.text}</p>
                  </div>
                ))}
              </div>
              <div className={S.content_wrap}>
                <p className={S.subHeading}>Work Experience:</p>
                <div className={S.experience_container}>
                  {experiences.map((experience, i) => (
                    <div className={S.company_card} key={i}>
                      <p className={S.title}>{experience.company}</p>
                      <p className={`${S.small_text} ${S.italic}`}>
                        {experience.city}
                      </p>
                      <p className={S.sub_title}>{experience.role}</p>
                      <p className={S.small_text}>{experience.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* skilll */}
          {active === "Skills" && (
            <div>
              <div className={S.skill_content}>
                <p className={S.subHeading}>FramwWork:</p>
                <div className={S.flexbox}>
                  {frameworks.map((framework) => (
                    <p key={framework} className={S.skill_wrap}>
                      {framework}
                    </p>
                  ))}
                </div>
              </div>
              <div className={S.skill_content}>
                <p className={S.subHeading}>Languages:</p>
                <div className={S.flexbox}>
                  {languages.map((language) => (
                    <p key={language} className={S.skill_wrap}>
                      {language}
                    </p>
                  ))}
                </div>
              </div>
              <div className={S.skill_content}>
                <p className={S.subHeading}>Tools:</p>
                <div className={S.flexbox}>
                  {tools.map((tool) => (
                    <p key={tool} className={S.skill_wrap}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className={S.skill_content}>
                <p className={S.subHeading}>Others:</p>
                <div className={S.flexbox}>
                  {others.map((tool) => (
                    <p key={tool} className={S.skill_wrap}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* projects */}
          {active === "Projects" && (
            <div className={S.project_container}>
              {myProjects.map((project) => (
                <div className={S.project_card}>
                  <div className={S.project_card_image}>
                    <img
                      src={project.image}
                      alt=""
                      className={S.project_image}
                    />
                  </div>
                  <div className={S.project_tool}>
                    {project.tools.map((tool) => (
                      <p>{tool}</p>
                    ))}
                  </div>
                  <div className={S.about_project}>
                    <p className={S.project_header}>{project.title}</p>
                    <p>{project.aboutProject}</p>
                    <a href={project.link} target="_blank">
                      view
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* contact */}
          {active === "Contacts" && (
            <div>
              <div>
                <p className={S.subHeading}>Contact Me:</p>
                {myContacts.map((profile) => (
                  <div className={S.paragraph_wrap} key={profile.subtitle}>
                    <p className={`${S.sub_title} ${S.max_width}`}>
                      {profile.subtitle}
                    </p>
                    <a
                      target="_blank"
                      href={profile.url}
                      className={S.paragraph}
                    >
                      {profile.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={S.footer}>
        <p>&copy; {year} By onyejekwe ogechukwu</p>
      </div>
    </div>
  );
};
