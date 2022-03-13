import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPages from "./pages/sign_in_and_sign_up/sing_in_and_sign_up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth){
      const userSnap =  await createUserProfileDocument(userAuth);
      this.setState({
        currentUser: {
          id: userSnap.id,
          ...userSnap.data()
        }
        
      });
  
    }

    this.setState({currentUser: userAuth});

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPages />} />
        </Routes>
      </div>
    );
  }
}

export default App;
