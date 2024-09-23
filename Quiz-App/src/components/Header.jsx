import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="logo Quiz React" />
      <h1>Quiz React</h1>
    </header>
  );
}
