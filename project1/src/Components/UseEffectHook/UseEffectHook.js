import React,{useState,useEffect} from 'react';

const UseEffectHook = () => {

    const [userData,setUserData] = useState([]);
    const [pageNumber,setpageNumber] = useState(0);
    
    

    const getUserData = async()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
            headers : {
                "app-id": '62b551719c7c3339909b4313'
            }
        });
        const data1 = await response.json();
        //const num = await response.json();
        setUserData(data1.data);
        
        //console.log(data);
    }
    
    useEffect(()=>{
        getUserData();
        
    },[pageNumber]);

    return userData.length? (
        <React.Fragment>
          <div className="container mt-4">
            <div className="row">
              {userData.map((user) => (
                <div className="col-md-6"  >
                  <div className="card p-5 mt-4" key={user.id} >
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
              onClick={() => 
                setpageNumber(num)
              }
            >
              {num}
            </button>
          ))}
          
        </React.Fragment>
      ) : (
        <p className="text-center">Loading...</p>
      );
}

export default UseEffectHook;