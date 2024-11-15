import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const AddEditEmployee = () => {
    const { id } = useParams(); // Get ID from URL for editing
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        username: "",
        email: "",
        status: "Active",
    });

    useEffect(() => {
        if (id) {
            // Fetch employee data for editing
            fetch(`https://em-server-7j39.onrender.com/employees/${id}`)
                .then((response) => response.json())
                .then((data) => setEmployee(data));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            // Update employee
            fetch(`https://em-server-7j39.onrender.com/employees/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employee),
            }).then(() => navigate("/home")); // Redirect to home after editing
        } else {
            // Add new employee
            fetch(`https://em-server-7j39.onrender.com/employees`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employee),
            }).then(() => navigate("/home")); // Redirect to home after adding
        }
    };

    return (
        
            <div style={{marginTop:'-50px'}} className="add-edit-container">
                <Link to={'/home'}>Back to Home</Link>

                <h1>{id ? "Edit Employee" : "Add Employee"}</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={employee.username}
                        onChange={(e) => setEmployee({ ...employee, username: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={employee.email}
                        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        required
                    />
                    <select
                        value={employee.status}
                        onChange={(e) => setEmployee({ ...employee, status: e.target.value })}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <button type="submit">{id ? "Update Employee" : "Add Employee"}</button>
                </form>
            </div>
    );
};

export default AddEditEmployee;
