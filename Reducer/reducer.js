 export const reducer = (state, action) =>{
   switch(action.type){
     case 'LOGIN_USER':
      let isAuth
      if (action.payload.success){
        isAuth = action.payload.result.access_token
      } else{
        isAuth = {}
      }
       return {...state,user:isAuth}
       case 'SHOW_POSTS':
        return {...state,posts:action.payload.result}
     default:
        return state
   }
 }
