import {useContext} from "react"
import './App.css';
import Sidebar from "./component/sidebar/sidebar";
import Topnav from "./component/main/topNav/mainTopNav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Consumer} from "./component/context/context";
import {Dashboard }from "./component/main/main-content/Dashboard/dashboard";
import {Form} from "./component/main/main-content/main-form/form";
import {List} from "./component/main/main-content/expenseList/expenseList";
import PrivateRoute from './component/priveRouter/prive';
import {HookContext} from "./component/context/context";
import Login from "./component/access/Login";
import SignUp from "./component/access/Signup";

//  import PrivateRoute from "./component/priveRouter/prive"
// import {DataContext} from "./component/context/context";





function App() {
  const {list,handlelist} = useContext(HookContext)

  return (
    <div className="App">
            <BrowserRouter>
            
           <div className="main-container">
                            <Sidebar />
                            <div className="main-content"> 
                                <Topnav/>
                                <div className="main-content-body">
                                    <Routes>
                                            <Route path="/login" element={<Login />} />
                                            <Route path="/signup" element={<SignUp />} />
                                            <Route path="/" element={<PrivateRoute element={<Dashboard list={list} />}/>} />
                                            <Route  exact path="/expense" element={<PrivateRoute element={ <Form  handlelist={handlelist}/>}/> } />
                                            <Route   path="/list" element={<PrivateRoute element={<List list={list}/>} /> } />
                                            <Route path="*" element={`no route match`} />
                                  </Routes>
                              </div>
                          </div>
                  
              </div>          
          </BrowserRouter>
    </div>
  );
}















function Bpp() {

  return (
    <div className="App">
            <BrowserRouter>
            
           <div className="main-container">
                  <Sidebar />
                  
                  <Consumer>
                       {(props)=>{  
                          return(
                            <div className="main-content"> 
                                <Topnav/>
                                <div className="main-content-body">
                                    <Routes>
                                            <Route path="/login" element={<Login />} />
                                            <Route  end path="/" element={<PrivateRoute isAuth={props.isAuth} element={<Dashboard list={props.list} />}/>} />
                                            {/* <Route exact path="/" element={<Dashboard  list={props.list}/>} /> */}
                                            <Route  exact path="/expense" element={<Form  handlelist={props.handlelist}/>} />
                                            <Route   path="/list" element={<List list={props.list}/>} />
                                            <Route path="*" element={`no route match`} />
                                  </Routes>
                              </div>
                          </div>)}}
                    </Consumer>
              </div>          
          </BrowserRouter>
    </div>
  );
}

export default App;
