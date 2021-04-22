import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', userStatus: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.currentTarget
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!user.name || !user.email || !user.userStatus) return

		props.addUser(user)
		setUser(initialFormState)
	}

	return (
	<form onSubmit={handleSubmit}>
		<input
			placeholder="Name"
			type="text"
			name="name"
			value={user.name}
			onChange={handleInputChange}
		/>
		<input
			placeholder="Email"
			type="text"
			name="email"
			value={user.email}
			onChange={handleInputChange}
		/>
		<input
			placeholder="User status"
			type="text"
			name="userStatus"
			value={user.userStatus}
			onChange={handleInputChange}
		/>
		<button>SAVE</button>
	</form>
)
}

export { AddUserForm }