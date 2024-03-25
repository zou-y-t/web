import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Contest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ marginRight: '20px' }}>
        <center>CONTEST PAGE</center>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/contest/tictactoe">Tictactoe</Link></li>
      </div>

      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Contest;