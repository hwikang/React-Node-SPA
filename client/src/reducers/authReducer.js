//component 

//create reducer
//function 하나를 export할 때 export default function()
export default function(state ={} , action){
    //switch문 if
            //변수명
    console.log("action =",action);
    switch(action.type){
         //조건

        //조건에해당안하면
        default:
            return state;
    }
}