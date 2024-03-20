import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/pages/homepage/homepage.component";
import Shop from "./Components/shop/shop.component";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Components/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "../src/Components/firebase/firebase.utils"; // Assuming you've exported auth from your firebaseConfig file

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
   
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
