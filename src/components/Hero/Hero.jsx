import "./Hero.css";

function Hero({ title, description, input, btn, password, content, userName }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="design">
        <input type="email" placeholder="Enter your email" required />
        {btn && <button>{btn}</button>}
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Hero;
