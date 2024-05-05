import React from "react";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <Map/>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
