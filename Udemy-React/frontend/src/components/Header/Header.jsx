import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = [
  "Fundamental",
  "Crucial",
  "Core",
  "Essential",
  "Important",
  "Necessary",
  "Vital",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const descripton = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descripton} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
