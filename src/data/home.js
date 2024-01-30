import img_1 from "../assets/images/slideImages/1.jpg";
import img_2 from "../assets/images/slideImages/2.jpeg";
import img_3 from "../assets/images/slideImages/3.jpg";
import img_4 from "../assets/images/slideImages/4.jpg";
import img_5 from "../assets/images/slideImages/5.jpg";
import img_6 from "../assets/images/slideImages/6.jpg";

import mobile from "../assets/images/mobile.png";

const mainSliderData = [
  {
    id: 1,
    title: "My Favorite Person",
    year: 2022,
    type: "Western",
    image: img_1,
  },
  {
    id: 2,
    title: "Legand Of The Seeker",
    year: 2022,
    type: "Adventure",
    image: img_2,
  },
  {
    id: 3,
    title: "Lets Be A Crops",
    year: 2022,
    type: "Romantic",
    image: img_3,
  },
  { id: 4, title: "The Conjuring", year: 2022, type: "Musical", image: img_4 },
  { id: 5, title: "Below Her Mouth", year: 2022, type: "Horror", image: img_5 },
  {
    id: 6,
    title: "Army Of The Dead",
    year: 2022,
    type: "Thriller",
    image: img_6,
  },
];

const downloadData = {
  title: "Download Your Movies Watch Offline. Enjoy On Your Mobile",
  describtion: `rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries..`,
  image: mobile,
  list: ["HD 4K", "2K"],
};

export { mainSliderData, downloadData };
