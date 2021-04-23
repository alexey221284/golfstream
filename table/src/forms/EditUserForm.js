import React, {useState, useEffect} from 'react'

const EditUserForm = props => {
	const [user, setUser] = useState(props.currentUser)

	useEffect(
		() => {
			setUser(props.currentUser)
		},
		[props]
	)

	const handleInputChange = event => {
		const {name, value} = event.target

		setUser({...user, [name]: value})
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (!user.name || !user.email || !user.userStatus || !user.paymentStatus || !user.amount) return

		props.updateUser(user.id, user)
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

			<button>Update user</button>
			<button
				onClick={() => props.setEditing(false)}
				className="button muted-button"
			>
				Cancel
			</button>
		</form>
	)
}

export {EditUserForm}