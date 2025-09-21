import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/Team.css";
import profile1 from "../assets/profile1.jpg";

const teamMembers = [
  { role: "CHAIRPERSON, ITSA", name: "Shlok Bam", img: profile1 },
  { role: "VICE CHAIRPERSON, ITSA", name: "Harsh Dange" },
  { role: "SECRETARY, ITSA", name: "Aaditya Bhand" },
  { role: "TREASURER, ITSA", name: "Atharv Manatkar" },
  { role: "EVENT HEAD, ITSA", name: "Anushka Nibhande" },
  { role: "EVENT HEAD, ITSA", name: "Yash Nalawade" },
  { role: "TECHNICAL LEAD", name: "Pratik Kedari" },
  { role: "TECHNICAL LEAD", name: "Shreya Dhaytonde" },
  { role: "DATABASE LEAD", name: "To Be Announced" },
  { role: "OPERATIONS LEAD", name: "To Be Announced" },
  { role: "PUBLICITY LEAD", name: "To Be Announced" },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="team-section">
      <h2 data-aos="fade-up">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="team-img">
              {member.img ? (
                <img src={member.img} alt={`Profile of ${member.name}`} />
              ) : (
                <div className="placeholder">{member.name.charAt(0)}</div>
              )}
            </div>
            <h3>{member.role}</h3>
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
