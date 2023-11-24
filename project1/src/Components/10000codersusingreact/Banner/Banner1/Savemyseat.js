import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import Row from 'react-bootstrap/Row';






function Savemyseat() {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow} style={{
                marginLeft: '50px',
                height: '50px',
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                boxColor: 'orange',
                fontSize: '30px',
                fontWeight: '200',
                boxShadow: '5px'
            }}>
                Save My Seat
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton></Modal.Header>
                <div style={{ color: 'white', width: '100%', display: 'block', backgroundColor: 'black' }}><h4>Ready to level up in your skills? Awesome!</h4>
                    <p style={{ color: 'gray', display: 'block' }}>Attend our free 3-day online boot camp on trending web technologies for B.Tech Graduates who are struggling to find a well-paying IT job. And earn your spot for our job-guaranteed program.</p></div>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                
                            />
                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                required
                                type="tel"
                                placeholder=" Enter Phone number"
                                
                            />
                        </Form.Group>


                        <p>What is your highest degree of qualification?</p>

                        <input type="radio" id="be/b.tech" name="fav_language" value="B.E/B.Tech" />
                        <lable>B.E/B.Tech</lable>
                        <input type="radio" id="me/m.tech" name="fav_language" value="M.E/M.Tech" />
                        <lable>M.E/M.Tech</lable>
                        <input type="radio" id="mca" name="fav_language" value="MCA" />
                        <lable>MCA</lable>
                        <input type="radio" id="other" name="fav_language" value="Other" />
                        <lable>Other</lable>
                        <br></br>
                        <input type="text" class="modal-input" id="name" name="name" />
                        <p class="instant">Your latest degree</p>

                        <p>Pass out year of your highest degree of qualification?</p>
                        <input type="radio" id="poy" name="poy" value="2019" />
                        <lable>2019</lable>
                        <input type="radio" id="poy" name="poy" value="2020" />
                        <lable>2020</lable>
                        <input type="radio" id="poy" name="poy" value="2018" />
                        <lable>2018</lable>
                        <input type="radio" id="poy" name="poy" value="Other" />
                        <lable>Other</lable>
                        <br></br>
                        <input type="text" class="modal-input" id="name" name="name" />
                        <p class="instant">year of graduation or expected year of graduation if you are still pursuing</p>

                        <br></br>
                        <p>Why do you want to join this program?
                            ( please do not use special characters or symbols.)</p>
                        <input type="text" class="modal-input" id="name" name="name" />

                        <Modal.Footer>
                    <Button type="submit" variant="secondary" onClick={handleClose}>
                        Submit
                    </Button>

                </Modal.Footer>

                    </Form>
                </Modal.Body>
                
            </Modal>

        </React.Fragment>
    )
}
export default Savemyseat



