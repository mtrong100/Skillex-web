import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Teacher from "./components/teacher/Teacher";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Courses></Courses>
      <Teacher></Teacher>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
