import { init } from "../utils/init";

export const productsReducer=(state=init,action)=>{
    switch(action.type){
        case 'API_DATA':
            return {
                ...state,
                data:action.payload
            }
        default:
            return state;
       
    }

}