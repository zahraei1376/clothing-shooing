import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import '../../sassStyle/layout/navigation.styles.scss';

const Navigation = ({ currentUser }) => (
    <div className='navigation'>
        <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
        <label className='navigation__btn' htmlFor='navi-toggle'>
            <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
            <ul className='navigation__list'>
                <li className='navigation__item'><Link to='shop' className='navigation__link'>Shop</Link></li>
                {
                    currentUser ?
                        <div className='navigation__item' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <li className='navigation__item'><Link to='signin' className='navigation__link'>sign in</Link></li>
                }
            </ul>
        </nav>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navigation);