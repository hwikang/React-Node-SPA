//class의경우 대문자이름
import React from 'react';
        //상황에따라 스크린바꿈, 
import { BrowserRouter , Route} from 'react-router-dom';

const Header =() => <h2>Header</h2>
const Dashboard =() => <h2>Dashboard</h2>
const SurveyNew =() => <h2>SurveyNew</h2>
const Landing =() => <h2>Landing</h2>
//
//es2015
const App =  () =>{
    return(
        <div>
            {/* 얘는 하나의 child 만있어ㅑ함 */}
           <BrowserRouter>
            <div>
            <Header/>
                {/* /는 다포함되기때문에 다른 path에도 적용이됨 */}
                
                <Route exact path="/" component = {Landing} />
                {/* exact를 사용해 정확이 / 일때만 적용시킴 */}
                <Route exact path ="/surveys" component ={Dashboard} />
                <Route path ="/surveys/new" component ={SurveyNew} />
                
            </div>
           </BrowserRouter>
        </div>
    );
};

export default App;
