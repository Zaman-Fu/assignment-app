import logo from './logo.svg';
import './App.css';
import NewUserForm from './components/NewUserForm';
import DeleteUserForm from './components/DeleteUserForm';
import UpdateUserForm from './components/UpdateUserForm';

function App() {
  return (
      <div>
          <div className="op-container">
              <NewUserForm></NewUserForm>
              <DeleteUserForm></DeleteUserForm>
              <UpdateUserForm></UpdateUserForm>
              

          </div>
          <div className = "display-container"></div>
      
    </div>
  );
}

export default App;
