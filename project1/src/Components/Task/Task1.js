import React,{useState,useEffect} from "react";


const Task1 = () => {

    const [userData,setUserData] = useState([]);
    const [pageNumber,setpageNumber] = useState(0);
    
    

    const getUserData = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products?page=${pageNumber}&limit=20`);
        const data1 = await response.json();
        //const num = await response.json();
        setUserData(data1);
        
        console.log(data1);
    }
    
    useEffect(()=>{
        getUserData();
        
    },[]);

    return  (
        <React.Fragment>
          <div className="container mt-4">
           {/* // {userData == null && <button type='button' onClick={getUserData}>Click</button>} */}
            <div className="row">
              {userData && userData.map((user) => (
                <div className="col-md-6"  >
                  <div className="card p-5 mt-4" key={user.id} >
                    <div className="row" >
                      <div className="col-md-4">
                        <img src={user.image} className="img-fluid" />
                      </div>
                      <div className="col-md-8 ps-2">
                        <p>{user.id}</p>
                        <strong>
                          {user.title} 
                        </strong>
                        <p>
                        {user.discription} 
                        </p>
                        <p>{user.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
        </React.Fragment>
      ) 
}

export default Task1;