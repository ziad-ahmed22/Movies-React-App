import { BsFillEnvelopeFill, BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export const contactInfo = [
  {
    id: 1,
    name: "Email Us",
    icon: (
      <BsFillEnvelopeFill className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
    ),
  },
  {
    id: 2,
    name: "Call Us",
    icon: (
      <BsFillTelephoneInboundFill className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
    ),
  },
  {
    id: 3,
    name: "Location",
    icon: (
      <MdLocationOn className="text-red bg-dark-blue mt-5 mb-4 rounded-circle" />
    ),
  },
];
