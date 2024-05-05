import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactLinks = () => {
  return (
    <>
      <ul
        className="
          flex
          text-sm  
          flex-col
          gap-2
        "
      >
        <li className="text-lg font-semibold">Contact Us</li>
        <li className="flex gap-2 items-center">
          <Phone size={20} />
          +91 817184007
        </li>
        <li className="flex gap-2 items-center">
          <Mail size={20} />
          friends007mail@gmail.com
        </li>
        <li className="flex gap-2 items-center">
          <MapPin size={20} />
          Lamachaur, Fatehpur road,
          <br />
          Haldwani (Uttarakhand)
        </li>
      </ul>
    </>
  );
};

export default ContactLinks;
