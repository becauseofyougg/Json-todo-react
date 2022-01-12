import './index.scss';
import TodoList from './components/TodoList';
import NavbarMenu from "./components/NavbarMenu";
import SideBar from './components/SideBar';


function App() {

  return (        
    <div className="wrapper">     
      <NavbarMenu />       
      <SideBar />
      <TodoList />
    </div>
  );
}

export default App;
