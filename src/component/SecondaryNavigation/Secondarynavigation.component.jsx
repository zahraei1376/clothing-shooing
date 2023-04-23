import React from 'react'
import { Link } from 'react-router-dom';
import '../../sassStyle/components/Secondarynavigation.styles.scss';

const Secondarynavigation = ({ linkk, text }) => (
    <div>
        <Link to={linkk}>{text}</Link>
    </div>
);
export default Secondarynavigation;