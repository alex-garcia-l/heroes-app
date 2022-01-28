import { authType } from '../types/auth';

export const authReducer = (state = {}, action) => {
console.log(action.type);
  switch (action.type) {
    case authType.login:
      return {
        ...action.payload,
        logged: true
      }
    case authType.logout:
      return {
        logged: false
      }
  
    default:
      return state;
  }

}