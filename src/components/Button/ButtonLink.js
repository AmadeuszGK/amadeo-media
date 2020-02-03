import React from 'react';
import './Button.scss';
import { Link } from 'gatsby';

const ButtonLink = props => (
  <Link to={props.href} className={props.class}>
    {props.text}
  </Link>
);

export default ButtonLink;
