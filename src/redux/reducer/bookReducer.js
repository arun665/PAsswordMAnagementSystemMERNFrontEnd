import {ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT ,DELETE_PASSCAT} from "../action/passType.js";


const initialState={
    category:'',
    allCategories:[],
    action:"Add",
    id:'',
     user_id:'',
     password:'',
     addmsg:''
   
}

const passReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADD_PASSCAT:return{
            ...state,
        category:action.payload,
        password:action.password,
        addmsg:action.msg
        }
        case FETCH_PASSCAT:return{
            ...state,
            allCategories:action.payload
        }
        case EDIT_PASSCAT:return{
            ...state,
            action:'Edit',
            category:action.payload,
            id:action.id
            
        }
        case UPDATE_PASSCAT:return{
            ...state,
         
            category:action.payload,
            action:'Add',
            password:action.password,
            msg:"category udapted succesfully"
         
            
        }
        case DELETE_PASSCAT:return{
            ...state,
            action:'Add',
            msg:"category deleted successfully"
        }
        case "REMOVE_ADD" :return{
      ...state,
       addmsg:''
            
        }
        

        default:return state
    }

}

export default passReducer;