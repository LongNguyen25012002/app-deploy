import React from 'react';
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const Navigation = () => {


  const singIn =  () => {
  const singinGoogle = new GoogleAuthProvider();
       signInWithPopup(auth,singinGoogle);
  }

  const handleClick = async () => {
     await singIn();
  };
  return (
      <header>
          <div>logo</div>
          <div className="right-action">
              <button onClick={(e) => handleClick()}>login</button>
          </div>
      </header>
  );
}
