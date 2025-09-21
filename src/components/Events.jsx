import React, { useState } from "react";
import "../Css/Events.css";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering fundamentals of AI and ML with practical coding exercises.",
    },
    {
      title: "Web Development Bootcamp",
      description:
        "Intensive 3-day bootcamp covering modern web development technologies.",
    },
    {
      title: "Hackathon 2025",
      description:
        "Annual 48-hour coding competition with prizes and mentorship from industry experts.",
    },
  ];

  const pastEvents = [
    {
      title: "Cybersecurity Awareness",
      description:
        "A session on securing digital assets and safe internet practices.",
    },
    {
      title: "Cloud Computing Workshop",
      description:
        "Introduction to cloud services, deployment models, and hands-on AWS practice.",
    },
  ];

  const eventsToShow = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section className="events-section" id="events">
      <h2>Event Section</h2>

      {/* Tabs */}
      <div className="event-tabs">
        <button
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
            Upcoming Events
        </button>
        <button
          className={activeTab === "past" ? "active" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>

      {/* Cards */}
      <div className="event-cards">
        {eventsToShow.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-placeholder"></div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button className="primary-btn">Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
