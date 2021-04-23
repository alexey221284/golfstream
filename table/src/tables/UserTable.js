import React from 'react'

const UserTable = props => {

	let dateNow = function getCurrentDate() {
		let newDate = new Date();
		let date_raw = newDate.getDate();
		let month_raw = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		let date, month;
		if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
		if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}

		return (
			<div>{date}/{month}/{year}</div>
		);
	};

	const handleDeleteUser = id => {
		let answer = window.confirm('Are you sure you want  to delete user ?');

		if (answer) {
			props.deleteUser(id)
		}
	}
	return (
		<table>
			<thead>
			<tr className="tableControlPanel">
				<button>Filter</button>
				<input type="text"/>
				<button>+ ADD USER</button>
			</tr>
			<tr className="tableHead">
				<th>NAME</th>
				<th>USER STATUS</th>
				<th>PAYMENT STATUS</th>
				<th>AMOUNT</th>
				<th></th>
			</tr>
			</thead>
			<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr className="tableRow" key={user.id}>
						<td><div className="userName">{user.name}</div><div className="userEmail">{user.email}</div></td>
						<td>
							<div className={`userStatus ${user.userStatus}`}>
								<li>{user.userStatus}</li>
							</div>
							<div className="dateNow">{dateNow()}</div>
						</td>
						<td >
							<div className={`paymentStatus ${user.paymentStatus}`}>
								<li>{user.paymentStatus}</li>
							</div>
							<div className="dateNow">{dateNow()}</div>
						</td>
						<td>${user.amount}</td>
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