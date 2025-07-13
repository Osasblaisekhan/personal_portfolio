import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserUploadComponent = () => {
    const [users, setUsers] = useState([]);
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data)
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);
        formData.append('email', email);

        try {
            if (editingUserId) {
                await axios.put(`http://localhost:5000/users/${editingUserId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await axios.post('http://localhost:5000/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            clearForm();
            fetchUsers(); // Refresh user list
        } catch (error) {
            console.error('Error uploading user:', error);
        }
    };

    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setFile(null); // Clear file input
        setEditingUserId(user.id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        fetchUsers(); // Refresh user list
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setFile(null);
        setEditingUserId(null);
    };

    return (
        <div>
            <form onSubmit={handleUpload}>
                <h2>{editingUserId ? 'Edit User' : 'Upload User'}</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">{editingUserId ? 'Update User' : 'Upload User'}</button>
                <button type="button" onClick={clearForm}>Cancel</button>
            </form>

            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <img src={user.image} alt={user.name} width="50" />
                        {user.name} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserUploadComponent;