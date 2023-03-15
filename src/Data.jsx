/* react-icons */
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

/* main images */
import courses1 from "./assets/images/courses1.jpg";
import courses2 from "./assets/images/courses2.jpg";
import courses3 from "./assets/images/courses3.jpg";
import courses4 from "./assets/images/courses4.jpg";
import courses5 from "./assets/images/courses5.jpg";
import courses6 from "./assets/images/courses6.jpg";
import courses7 from "./assets/images/courses7.jpg";
import courses8 from "./assets/images/courses8.jpg";
import hero from "./assets/images/hero.png";
import aboutImg from "./assets/images/about.jpg";
import teacher1 from "./assets/images/teacher1.png";
import teacher2 from "./assets/images/teacher2.png";

/* logo */
import logo1 from "./assets/images/logo1.png";
import logo2 from "./assets/images/logo2.png";
import logo3 from "./assets/images/logo3.png";
import logo4 from "./assets/images/logo4.png";
import logo5 from "./assets/images/logo5.png";
import logo6 from "./assets/images/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "#home",
    link: "Home",
  },
  {
    id: 2,
    href: "#about",
    link: "About",
  },
  {
    id: 3,
    href: "#courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "#teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "#contact",
    link: "Contact",
  },
];

export const banner = {
  smallText: "your e-learning partner",
  title: "This is the new way to learn online",
  subTitle:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vel fugiat esse iusto soluta asperiores molestias repellendus veritatis dolorum nesciunt excepturi ex amet ipsa, rem quaerat optio error eum!",
  btn1: "Get Started",
  btn2: "Discover",
  img: hero,
};

export const about = {
  img: aboutImg,
  title: "We provide the best online courses",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quisquam fuga nemo soluta amet recusandae enim ab repudiandae illum consequuntur facere officiis voluptatum odio blanditiis vero, corporis fugiat alias veniam!",
};

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Web Design",
    title: "The Complete Web Design Course",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: courses2,
    category: "Web Development",
    title: "FullStack Web Development Course",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: courses3,
    category: "Web Development",
    title: "Python Beginner to Advanced Course",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses4,
    category: "Web Design",
    title: "UI/UX Design Crazy Course With Harrys",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "AI Development",
    title: "AI Development With Python",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 6,
    image: courses6,
    category: "AI Development",
    title: "AI Development With Python",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
];

export const teacher = [
  {
    id: 1,
    img: teacher1,
    title: "Become An Instructor of Our Platform",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sint quo facilis error, adipisci nemo numquam ducimus aliquam ex magnam magni autem praesentium, placeat commodi quidem aperiam molestiae consectetur? Ex.",
    btn: "Start teaching",
  },
  {
    id: 2,
    img: teacher2,
    title: "Start learning today",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sint quo facilis error, adipisci nemo numquam ducimus aliquam ex magnam magni autem praesentium, placeat commodi quidem aperiam molestiae consectetur? Ex.",
    btn: "Get Started",
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const question = [
  {
    id: 1,
    title: "What is Skillex?",
    answer:
      "Strive not to be a success, but rather to be of value. It is never too late to be what you might have been. How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
    answer:
      "The best time to plant a tree was 20 years ago. The second best time is now. The two most important days in your life are the day you are born and the day you find out why.Strive not to be a success, but rather to be of value.It does not matter how slowly you go as long as you do not stop.",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
    answer:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful. You miss 100% of the shots you don’t take. The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
    answer:
      "You can’t use up creativity. The more you use, the more you have. A truly rich man is one whose children run into his arms when his hands are empty. A truly rich man is one whose children run into his arms when his hands are empty.",
  },
];

export const footer = [
  {
    id: 1,
    title: "Company",
    links: ["About", "Work", "Careers", "Pricing"],
  },
  {
    id: 2,
    title: "Services",
    links: ["About Me", "Teams", "Profile", "FAQ"],
  },
  {
    id: 3,
    title: "Contact",
    links: ["Privacy", "Disclaimer", "Terms", "Company"],
  },
];
