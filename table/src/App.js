import React, { useState } from 'react'
import { AddUserForm } from './forms/AddUserForm'
import { EditUserForm } from './forms/EditUserForm'
import { UserTable } from './tables/UserTable'
import './App.css'
import './Fonts.css'

const App = () => {
    const usersData = [
        { id: 1, name: 'Justin Septimus', email: 'example@email.com', userStatus: "Active", paymentStatus: "Paid", amount: "200" },
        { id: 2, name: 'Anika Rhiel Madsen', email: 'example@email.com', userStatus: "Active", paymentStatus: "Overdue", amount: "300" },
        { id: 3, name: 'Miracle Vaccaro', email: 'example@email.com', userStatus: "Active", paymentStatus: "Paid", amount: "250" },
        { id: 4, name: 'Mira Herwitz', email: 'example@email.com', userStatus: "Active", paymentStatus: "Paid", amount: "200" },
        { id: 5, name: 'Erin Levin', email: 'example@email.com', userStatus: "Active", paymentStatus: "Unpaid", amount: "200" },
        { id: 6, name: 'Jaxson Siphron', email: 'example@email.com', userStatus: "Active", paymentStatus: "Paid", amount: "750" },
        { id: 7, name: 'Mira Levin', email: 'example@email.com', userStatus: "Active", paymentStatus: "Unpaid", amount: "200" },
        { id: 8, name: 'Lincoln Levin', email: 'example@email.com', userStatus: "Active", paymentStatus: "Paid", amount: "370" },
    ]

    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const initialFormState = {id: null, name: '', email: '', userStatus: '', paymentStatus: '', amount: ''};
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({
            id: user.id,
            name: user.name,
            email: user.email,
            userStatus: user.userStatus,
            paymentStatus: user.paymentStatus,
            amount: user.amount
        })
    }

    return (
        <div className="container">
            <div className="flex-row">

                <div className="userTable">
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
                </div>

                <div className="crudUser">
                    {editing ? (
                        <div className="createUser">
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div className="createUser">
                            <h2>Create User</h2>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export {App}