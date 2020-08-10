import React, { ReactElement } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function NotFound(): ReactElement {
  return <Redirect to="/login"></Redirect>;
}
