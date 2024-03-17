import  { useState } from "react";
import styles from "./Faq.module.css";
import Faq from "./Faq";



const Faq1 = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqArray = [
    
      {
        "heading": "What is Agreya and its objectives?",
        "para": "Agreya is an annual tech fest. Its objectives include promoting innovation, fostering collaboration, and showcasing talent in various fields of technology."
      },
      {
        "heading": "How to register for events",
        "para": "Sign in to the website and click on the 'event register' button."
      },
      {
        "heading": "How to make payment?",
        "para": "On the corresponding event page, there is a button called 'make QR Payment.' Click on it, scan the QR code for payment."
      },
      {
        "heading": "Why does the profile show 'payment pending' after being paid?",
        "para": "It is because of the verification process. If the payment status is pending even after 6 hours, contact the event coordinators."
      },
      {
        "heading": "Does every event have spot registration?",
        "para": "All events except the hackathon have spot registration."
      },
      {
        "heading": "How to add team members?",
        "para": "Ensure all members are registered. The team leader should register for the event and add his team members."
      },
      {
        "heading": "How can I sponsor or partner with Agreya?",
        "para": "If you're interested in sponsoring or partnering with Agreya, please contact our sponsorship team for more information."
      }
    ]

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
