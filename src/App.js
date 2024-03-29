import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import ShowImage from './images/eye.svg';
import UpdateImage from './images/pencil.svg';
import { useSelector, useDispatch } from 'react-redux';
import FormDetail from "./components/FormDetail"
import TableData from "./components/TableData"
import UpdateDetail from "./components/UpdateDetail"

function App() {
  const tableData = useSelector((state)=> state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TableData />} />
        <Route path="/FormDetail" element={<FormDetail />} />
        <Route path="/UpdateDetail/:id" element={<UpdateDetail />} />
      </Routes>
    </div>
  );
}

export default App;
