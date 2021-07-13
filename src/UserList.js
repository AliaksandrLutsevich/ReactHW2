import React,  {Component} from 'react';
import axios from 'axios';


class UserList extends Component {

state = {
    users: []
}
    componentDidMount(){
        axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users').then((response)=> {
            this.setState({users: response.data})
        });
    }

    
    render() {
        
    return (
        <div>
            {this.state.users.map((user) =>{
                return (
                <div key={user._id}>
                    <h4>{user.name.first}</h4>
                    <h5>{user.name.last}</h5>  
                 </div>
                )
            })}
        </div>
    )
}
}
export default UserList