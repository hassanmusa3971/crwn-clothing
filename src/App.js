import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPages from "./pages/sign_in_and_sign_up/sing_in_and_sign_up.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import CollectionPage from "./pages/collection/collection.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if(userAuth){
      const userSnap =  await createUserProfileDocument(userAuth);
      setCurrentUser({
        currentUser: {
          id: userSnap.id,
          ...userSnap.data()
        }
        
      });
  
    }

   setCurrentUser(userAuth);

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/shop/:collectionId" element={<CollectionPage />} />
          <Route  path="/checkout" element={<CheckOutPage />}/>
          <Route  path="/signin" element={this.props.currentUser ? <Navigate to='/' />: <SignInAndSignUpPages />} />
        
        </Routes>
      </div> 
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
