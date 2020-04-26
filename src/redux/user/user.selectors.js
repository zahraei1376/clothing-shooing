import { createSelector } from 'reselect';
import { createStore } from 'redux';

const selectUser = state => state.user;
// const selectCart = state => state.hidden;
export const selectCurrentUser=createSelector(
    [selectUser],
    (user) =>user.currentUser
    // [selectUser,selectCart],
    // (user , cart) =>user.currentUser
)