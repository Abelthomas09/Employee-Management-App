import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const response = await axios.get('https://em-server-7j39.onrender.com/employees');
        setEmployees(response.data);
    };

    const deleteEmployee = async (id) => {
        await axios.delete(`https://em-server-7j39.onrender.com/employees/${id}`);
        fetchEmployees();
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <div style={{marginTop:'-300px'}} className="employee-table">
                    <h1>Employee Management</h1>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Link to="/add" className="add-button">Add Employee</Link>
                </div>
                <table className='employee-table-container'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp,index) => (
                            <tr key={emp.id}>
                                <td>{index+1}</td>
                                <td>{emp.username}</td>
                                <td>{emp.email}</td>
                                <td>{emp.status}</td>
                                <td>
                                    <Link to={`/edit/${emp.id}`} className="edit-button">Edit</Link>
                                    <button onClick={() => deleteEmployee(emp.id)} className="delete-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default EmployeeTable;
