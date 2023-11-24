import React from "react";
import CardInfo from "./CardInfo/CardInfo";




class UserData extends React.Component {
  state = {
    usersdata: [],
    pageNumber: 0,
    show : false,
    userInformation  : [],
    id: ''
  };


  

  handleButtonClicked = (num) => {
    this.setState({ pageNumber: num });
 
  };
  handleCardClick = (ide) => {
    this.setState({id:ide})
  
    this.setState({show:true})
   
  
  };

  dummyUsersData = async () => {
    try {
      const response = await fetch(
        `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
        {
          method: "GET",
          headers: {
            "app-id": "62aaa5384fa1b82bf9c9569c",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      this.setState({ usersdata: data.data });
    
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.dummyUsersData();
   
  }

  componentDidUpdate(prevsProps, prevsState) {
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.dummyUsersData();
    }
     
    if(prevsState.id !== this.state.id){
      this.dummyUserInformation();
    }

  }

  dummyUserInformation = async() =>{
   const response = await fetch(`https://dummyapi.io/data/v1/user/${this.state.id}`,{
        method: "GET",
        headers: {
          "app-id": "62aaa5384fa1b82bf9c9569c",
        },  
   })
   const data = await response.json();
   console.log(data)
   this.setState({userInformation : data})
 
  }
 

  render() {
    console.log(this.state)
    return this.state.usersdata.length? (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            {this.state.usersdata.map((user) => (
              <div className="col-md-6"  >
                <div className="card p-5 mt-4" key={user.id} onClick={()=>this.handleCardClick(user.id)}>
                  <div className="row" >
                    <div className="col-md-4">
                      <img src={user.picture} className="img-fluid" />
                    </div>
                    <div className="col-md-8 ps-2">
                      <p>{user.id}</p>
                      <strong>
                        {user.title} {user.firstName} {user.lastName}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            className="btn btn-info ms-3 mt-5 "
            onClick={() => {
              this.handleButtonClicked(num);
            }}
          >
            {num}
          </button>
        ))}
        {this.state.userInformation.length !== 0?
       (<CardInfo data={this.state.userInformation} show={this.state.show}/>):(<p>Loading...</p>)
        }
      </React.Fragment>
    ) : (
      <p className="text-center">Loading...</p>
    );
  }
}
export default UserData;