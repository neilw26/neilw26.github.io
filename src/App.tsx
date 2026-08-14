import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/global.css";
export default function App() {
  return (
    <>
    <ThemeToggle />
      <Header />
      <Hero />
      <Projects />
    </>
  );
}
