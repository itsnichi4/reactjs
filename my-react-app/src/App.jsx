import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import AdminPanel from './components/AdminPanel';
import ShoppingList from './components/ShoppingList';
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />User: "admin"<br />Pass: "admin123"</p>
      <img className="avatar" />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
    content = (
      <>
        <AdminPanel />
        <div className='shopping-list'><p>Here's your shopping list demo</p>
        <ShoppingList /></div>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  } else {
    content = <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      <AboutPage />
      {content}
      <Profile />
    </div>
  );
}

export default App;
