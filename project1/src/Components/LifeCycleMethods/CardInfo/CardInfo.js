import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

function CardInfo({show,data}){
  console.log(data,show)
  const [display,setDisplay] = useState(show)

    return (
        <Modal
          show={display}
          onHide={() => setDisplay(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              User Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              { data !== undefined ?(
                  <div className="row">
                      <div className="col-md-4">
                          <p>{data.id}</p>
                          <img src={data.picture} alt={data.firstName}/>
                      </div>
                  </div>):(<p>Loading...</p>)
         }
          </Modal.Body>
        </Modal>
    )   
} 
export default CardInfo;