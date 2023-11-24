import React from 'react';

class MountingPhase extends React.Component {

    state = {
        usersData: []
    };

    getUsersData = async () => {
        const response = await fetch('https://dummyapi.io/data/v1/user?page=1&limit=10',{
            method: "GET" ,
            headers :{
                "app-id" : "62aaa7d74fa1b86b1ec956a1"
            }
        });
        const data1 = await response.json();
        console.log(data1);
        return this.setState({ usersData: data1.data });
        
    }
    


    componentDidMount() {
        this.getUsersData();
    }

    render() {
        return (
           <React.Fragment>
            
            <div>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usersData.map((user) => (                       
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td> <img  src={user.picture}></img></td>
                                </tr>
                                
                                

                            ))

                        }
                    </tbody>
                </table>
            </div>
            </React.Fragment> 
        )
    }
}

export default MountingPhase
