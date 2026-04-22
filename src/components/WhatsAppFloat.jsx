import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsappFloat.css";

const WHATSAPP_LINK = "https://wa.me/919123938200";

const WhatsAppFloat = () => {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;
