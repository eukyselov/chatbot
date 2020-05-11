import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedWelcome = () => (
  <Typing>
    <Typing.Speed ms={100} />
    Hello Mr...
    <Typing.Backspace count={5} speed={50} delay={1000} />
    <Typing.Speed ms={100} />
    Mrs...
    <Typing.Backspace count={6} speed={10} delay={1000} />
    <Typing.Speed ms={10} />
    Human!

    <Typing.Backspace count={13} speed={10} delay={1000} />
    <Typing.Speed ms={70} />
    Welcome to our chat bot presentation. :)
    <Typing.Reset count={1} delay={1000} />
    My name is Ky. How can we call you?
  </Typing>
);

export default AnimatedWelcome;
