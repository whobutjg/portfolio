import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const typingEffect =  <ReactTypingEffect
  text={["Full-Stack Software Engineer", "Team-Player", "Self-Starter with an Entrepreneurial Spirit", "Software Engineer", "Frontend Engineer"]}
  cursorRenderer={cursor => <p>{cursor}</p>}
  speed={100}
  typingDelay={1250}
  eraseSpeed={50}
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

export default typingEffect;