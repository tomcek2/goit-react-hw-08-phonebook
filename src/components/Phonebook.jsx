import { Routes, Route } from 'react-router-dom';

import { Contacts } from 'pages/Contacts';
import { Navigation } from './Navigation';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';

export const Phonebook = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index elemnet={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigation />} />
        </Route>
      </Routes>
    </div>
  );
};
