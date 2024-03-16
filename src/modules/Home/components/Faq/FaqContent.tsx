import  { useState } from "react";
import styles from "./Faq.module.css";
import Faq from "./Faq";



const Faq1 = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqArray = [
    {
      heading: "What is the maximum team size allowed?",
      para: "Teams can consist of 2 to 4 members for participation in the hackathon.",
    },
    {
      heading: "Is there a registration fee for the hackathon?",
      para: "Registration is entirely free of charge. No fees are required for participation.",
    },
    {
      heading: "Can we work on pre-existing projects?",
      para: "No, participants are strictly required to develop a prototype within a 24-hour timeframe, based on the problem statements provided.",
    },
    {
      heading: "How can I qualify for participation?",
      para: "The hackathon follows a two-phase structure. Participants who successfully clear the first online phase will have the opportunity to participate in the subsequent offline hackathon. Problem statements for the first phase will be released on October 22nd. Your performance in this phase will determine your eligibility for entry into the final offline hackathon.",
    },
    {
      heading: "Who's eligible to dive into this hackathon adventure?",
      para: "This hackathon is open to all the brilliant minds out there, whether you're currently a student or a seasoned graduate.",
    },
    {
      heading: "What benefits await you in this coding extravaganza?",
      para: "Participating here means diving into real-world tech challenges, expanding your network with fellow tech enthusiasts and mentors, honing your coding and problem-solving skills, and unlocking a world of limitless opportunities for your tech future. It's not just a hackathon; it's a ticket to tech excellence.",
    },
  ];

  return (
    <div id="FAQs" className={styles.faqWrapper}>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "7px",
        }}
      >
        {faqArray.map(({ heading, para }, i) => (
          <Faq
            heading={heading}
            para={para}
            isOpen={openIndex === i}
            onToggle={() => {
              if (openIndex === i) {
                setOpenIndex(-1); // Close the currently open FAQ
              } else {
                setOpenIndex(i); // Open the clicked FAQ and close others
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq1;
