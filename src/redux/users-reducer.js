const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
        { id: 1, photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png", followed: true, status: "My name Alexia, i'm from Argentina ", city: "Argentina", name: "Alexia Johnson"},
        { id: 2, photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png", followed: false, status: "Follow me please :) ", city: "Florencia", name: "Most beautiful man" },
        { id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png", followed: true, status: "I'm a barby girl, where is my Ken? >.< ",  city: "Boston", name: "Blaze Barby"},
        { id: 4, photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png", followed: true, status: "Good boy, play on piano, follow me!", city: "New York", name: "Teddy Andrew" },
  ],
};

export const usersReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case FOLLOW:
      stateCopy = {
        ...state,
        users: state.users.map (u => {
            if (u.id === action.usersId) {
             return {...u, followed: true}
            }
            return u;
         })
         
      };
    
    case UNFOLLOW:
      stateCopy = {
        ...state,
        users: state.users.map (u => {
            if (u.id === action.usersId) {
             return {...u, followed: false}
            }
            return u;
         })
      };
   

      case SET_USERS: {
        return {...state, users: [...state.users, action.users]}
    };
    default:
      return state;
  }
};

export const followAC = (usersId) => {
    return {
       type: FOLLOW,
       usersId
    }
  };

  export const unfollowAC = (usersId) => {
    return {
      type: UNFOLLOW,
      usersId
    
    }
  };
  
  export const setUsersAC = (users) => {
      return {
        type: SET_USERS,
        users
      
      }
    };
  
  export default usersReducer;
