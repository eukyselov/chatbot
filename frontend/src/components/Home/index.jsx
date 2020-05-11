import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AnimatedTypingComponent from './components/Typing/Typing';
import { Form, Input, Button } from 'reactstrap';

const initUsername = 'Guest';

const Home = () => {

  const [username, setUsername] = useState(initUsername);

  const handleChange = (e) => {
    let name = e.target.value !== '' ? e.target.value : initUsername;
    setUsername(name);
  };

  return (
    <div className="home">
      <img className="greeting_logo" src={'assets/img/rsz_botlogo.png'} />
      <AnimatedTypingComponent scenario="welcome" />
      <Form className="row">
        <div className="d-inline first-name">
          <Input
            type="text" placeholder="please enter your name..." onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="d-inline go">
          <Link to={{ pathname: '/', search: `?username=${username}` }}>
            <Button color="primary">Go</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Home;
