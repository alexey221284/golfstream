import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', amount: ''}
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.currentTarget
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!user.name || !user.email || !user.userStatus || !user.paymentStatus || !user.amount) return

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
		<select
			name="userStatus"
			value={user.userStatus}
			onChange={handleInputChange}
		>
			<option value disabled selected>User Status</option>
			<option>Active</option>
			<option>Inactive</option>
			<option>Wait</option>
		</select>

		<select
			name="paymentStatus"
			value={user.paymentStatus}
			onChange={handleInputChange}
		>
			<option value disabled selected>Payment Status</option>
			<option>Paid</option>
			<option>Overdue</option>
			<option>Unpaid</option>
		</select>

		<input
			placeholder="Amount"
			type="text"
			name="amount"
			value={user.amount}
			onChange={handleInputChange}
		/>
		<button>SAVE</button>
	</form>
)
}

export { AddUserForm }