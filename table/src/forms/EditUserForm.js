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
		if (!user.name || !user.email) return

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
			<input
				placeholder="User Status"
				type="text"
				name="userStatus"
				value={user.userStatus}
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