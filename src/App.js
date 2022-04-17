import logo from './logo.svg';
import './App.css';
 import List from './component/List';
import  Button from "./component/Button"

import Employee from "./component/Employee"
import { Todo } from "./component/Todo" 
// import { TodoList } from "./Day3/TodoList" 
import { Single } from './component/Single';
import { Joinus } from './component/Joinus';
import { Timer } from './day3/Timer';
import { Settings } from './component/Settings';
import { Login } from './component/Login';
import { Search } from './component/Search';
import { Help } from './component/Help';
import { Home } from './component/Home';
import { Download } from './component/Download';
import { Contactus } from './component/Contactus';
import { Static } from './component/Static';
function App() {
  return (
    <div className="App">
    {/* <h1 class="header"></h1> */}
     
     {/* <Button/>    */}
      {/* <List/>    */}
       {/* <Employee/>  */}
        <Static/>
       <br/>
         <br/>
      
         {/* <Todo />    */}
         <div className="Parent"> 
         <div>
         <Joinus/>
         <Settings/>
         <Login/>
         <Contactus/>
         </div>
         <div>
         <Search/>
         <Help/>
         <Home/>
         <Download/>
      </div>
         </div>
         <br/>
         <br/>
         <div className="parent2">
          <div>
        
         <Single  props="JOIN US"/>
         
       
         <Single props="SETTINGS"/>
         
         <Single props="LOGIN"/>
         
        
         <Single props="CONTACT US"/>
         </div>
         <div>
         <Single props="SEARCH"/>
         
         <Single props="HELP"/>
         
         <Single props="HOME"/>
         
          <Single props="DOWNLOAD"/>
         </div> 
         {/* <TodoList />    */}

         {/* <Timer/> */}
         {/* </div> */}
         {/* <payment */}
         </div>
         </div>
    
  );
} 



export default App;
