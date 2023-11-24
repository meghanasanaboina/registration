import React from 'react';


class MountingAndUpdating extends React.Component{

    state={
        usersdata : [],
        id :  '60d0fe4f5311236168a109ca'
    }
    OnCardClick =(user)=>{
        this.setState({id:user});
    }
    dummyUsersData = async()=>{
        try{
            const response = await fetch('https://dummyapi.io/data/v1/user?page=1&limit=10',{
                method : 'GET',
                headers: {
                    'app-id':'62aaa7d74fa1b86b1ec956a1',
                }
            })
            const data = await response.json();
            this.setState({usersdata : data.data})
        }catch(error){
            console.error(error);
        }
    }
    componentDidMount(){
        this.dummyUsersData();
    }
    
    componentDidUpdate(){
        this.dummyUsersData();
    }
    
    
    render(){
        return(
            <React.Fragment>
                
            <div className="container mt-4">
                <div className='row'>
                    {
                      this.state.usersdata.map((user)=>(
                        <div className="col-md-6">
                            <div className="card p-5 mt-4" style={{cursor:'pointer'}} >
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={user.picture} alt="userpicture" className='img-fluid' />
                                    </div>
                                    <div className='col-md-8 ps-2' key={user.id}>
                                        <p>{user.id}</p>
                                        <strong>{user.title} {user.firstName} {user.lastName}</strong>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                      ))
                    }
                </div>

            </div>
            
            </React.Fragment>
        )
    }


}
export default MountingAndUpdating