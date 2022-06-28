import {Routes, Route} from 'react-router-dom'
import UsersTable from "./pages/users-table/UsersTable";
import SingleUser from "./pages/single-user/SingleUser";
import CreateOrEdit from "./pages/user-create-or-edit/CreateOrEdit";
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<UsersTable />}/>
            </Routes>
            <Routes>
                <Route path="/user/:id" element={<SingleUser />}/>
            </Routes>
            <Routes>
                <Route path="/create" element={<CreateOrEdit />}/>
            </Routes>
            <Routes>
                <Route path="/edit/:id" element={<CreateOrEdit />}/>
            </Routes>
        </div>
    );
}

export default App;
