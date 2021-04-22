import React from 'react'

const UserTable = props => {
	const handleDeleteUser = id => {
		let answer = window.confirm('Are you sure?')

		if (answer) {
			props.deleteUser(id)
		}
	}
	return (
		<table>
			<thead>
			<tr>
				<th>NAME</th>
				<th>EMAIL</th>
				<th>USER STATUS</th>
			</tr>
			</thead>
			<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.userStatus}</td>
						<td>
							<button
								onClick={() => {
									props.editRow(user)
								}}
								className="button muted-button"
							>
								Edit
							</button>
							<button
								className="button muted-button"
								onClick={() => handleDeleteUser(user.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
			</tbody>
		</table>
	)
}
export { UserTable }