import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(): ReactElement {
  return (
    <div>
      OOPS NOT FOUND
      <Link to="/dashboard">DASHBOARD</Link>
    </div>
  );
}
