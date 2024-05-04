import React from "react";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d435.2499150702279!2d79.43154918911735!3d29.223574499091924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714826340838!5m2!1sen!2sin"
        width="100%"
        style={{ border: "none" }}
        height="450"
        //@ts-ignore
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
