/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ReactTypingEffect from 'react-typing-effect';



function App() {
  const typingEffect =  <ReactTypingEffect
  text={["Full-Stack Software Engineer", "Team-Player", "Self-Starter with an Entrepreneurial Spirit", "Compassionate Human Being"]}
  cursorRenderer={cursor => <p>{cursor}</p>}
  speed={100}
  typingDelay={1250}
  eraseSpeed={100}
  eraseDelay={1000}
  displayTextRenderer={(text, i) => {
    return (
      <p>
        {text.split('').map((char, i) => {
          const key = `${i}`;
          return (
            <span
              key={key}
              style={i%2 === 0 ? { color: 'black'} : {}}
            >{char}</span>
          );
        })}
      </p>
    );
  }}        
/>
 
  return (
    <>
      <NavBar />
        <div id="about">
          <p>Hey, there!</p>
          <p>I'm Joseph Giardina, but everyone calls me 'Joey'.</p>
          <p>I'm a {typingEffect}from New Jersey now residing in sunny South Florida.</p>
          <p>For collaboration, consultation, or to connect, feel free to use the 'contact me' form or connect via LinkedIn.</p>
        </div>
      <Footer />
    </>
  );
}

export default App;
