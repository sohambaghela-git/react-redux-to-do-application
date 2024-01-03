import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import { deleteToDo } from '../redux/actions/index'

function TableData(){
    const tableData = useSelector((state)=> state.todoReducers.list);
    const dispatch = useDispatch();

    return(
        <div className="container mt-4">
        <div className='row'>
          <h2 className='col-md-11'>To Do List</h2>
          <Link to="/formDetail" className='col-md-1 btn btn-primary'>Add</Link>
        </div>
        {tableData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => (
                <tr key={item.id}>
                  <td className="w-6">{item.id}</td>
                  <td className="w-24">{item.data.name}</td>
                  <td className="w-34">{item.data.description}</td>
                  <td className="w-24">{item.data.date}</td>
                  <td className="w-24">
                    {/* <Link to={`/detail/${item.id}`}><img src={ShowImage} alt="Logo" className="logo" /></Link>
                    <Link to={`/updateDetails/${item.id}`}><img src={UpdateImage} alt="Logo" className="logo" /></Link> */}
                    <i 
                        className="fa fa-trash-o" 
                        style={{fontSize:"21px",color:"red"}}
                        onClick={() => dispatch(deleteToDo(item.id))}    
                    >
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="row">
              <br/><hr/>
            <b className='col-md-11'>There is no Data present!</b>
          </div>
        )}
      </div>
    )
}

export default TableData;