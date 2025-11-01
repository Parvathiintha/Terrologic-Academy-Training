import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LifeCycleDemo from './lifecycle';
import FunctionalLifecycle from './FunctionalLifecycle';
import PostList from './PostAxios'

function App() {
  return (
    <div>
      <LifeCycleDemo />
      <FunctionalLifecycle />
      <PostList />
    </div>
  );
}

export default App;
