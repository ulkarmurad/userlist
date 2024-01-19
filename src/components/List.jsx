import UserData from './UserData.json'
import Users from './Users'
import './index.css'

export default function List() {
	console.log(UserData);
return (
	<div className='cards'>
	{UserData.map((user)=>{
		console.log(user);
		return(
			<>
			<Users {...user}/>
			</>
		)
	})}
	</div>
	
)
}