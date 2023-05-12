import {createContext,Component, useState,useEffect} from "react";
import {getall,singIn,logUser} from "../../backendroutes/generalRoutes"
const Context = createContext();
const HookContext = createContext();


 const AppContext = (props)=>{
    const [user,setUser] = useState(false);
    const [list,setList] = useState([])
    const handleUser = (found)=>setUser(found);
    const handleList = (newList)=>setList(prev =>[...prev,...newList]);
    const handleLogOut =()=> {
        setUser(false)
        setList([])
    };
    
    const actions = {handleUser,handleList,handleLogOut}
    return(
        <HookContext.Provider value={{user,list,handlelist:handleList,actions}}>
        {props.children}
        </HookContext.Provider>
    )
}

class DataContext extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            user:null,
            isAuth:false,
        };

        this.handleList = this.handleList.bind(this)
    }

    async componentDidMount(){
        console.log("mounting app")
      this.GetData();
        }               
        
      GetData(){
        logUser()
        .then(({user,data})=> {
            this.setState({list:[...data],user:user[0],isAuth:true})
        }).catch( e => console.log(e) )
     }
    
    

    handleList(data){
        
        this.setState((prev)=>{
            return{
                list:[data,...prev.list]
            }
        })
    }

    render(){
        const {list,user,isAuth} = this.state;
        return(
          
            <Context.Provider value={{handlelist:this.handleList,list:list,user:user,isAuth:isAuth}}>
           
               {this.props.children}
            
            </Context.Provider>
            
        )
    }
}
const Consumer = Context.Consumer;
export {Consumer,DataContext,AppContext,HookContext };
