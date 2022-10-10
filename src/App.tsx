import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { StorageBar } from './components/StorageBar';
import './styles/App.css';

export const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <StorageBar />
    </div>
  );
};
