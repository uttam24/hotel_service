import React, {useState} from 'react';
import { Button, Container, Card, Row, Col,  Form } from 'react-bootstrap';


class Contact_touch extends React.Component  {
  constructor(props){
      super(props);
      this.state={
        name:'',
        email:'',
        textarea:'',
        nameError:'',
        emailError:'',
        textareaError:'',
      }
  }



  valid()
  {
    if(!this.state.email.includes('@') && this.state.name.length<4 && this.state.textarea.length<10){
      {
        this.setState(
          {emailError:"Invalid Email",nameError:'Name Length Should be more than 4',textareaError:'Name Length Should be more than 10'}
          );
      }
    }

   if(!this.state.email.includes('@') ){
      {
        this.setState(
          {emailError:"Invalid Email"}
          );
      }
    }

     if(this.state.name.length<4){
      {
        this.setState(
          {nameError:'Name Length Should be more than 4'}
          );
      }
    }

     if(this.state.textarea.length<10){
      {
        this.setState(
          {textareaError:'Name Length Should be more than 10'}
          );
      }
    }
    else{
      return true
    }
  }
  submit(){
    this.setState(
          {emailError:"",nameError:'',textareaError:''}
          )
    if(this.valid()){
        document.querySelector(".thank_modal").classList.add("myStyle");
        setTimeout(() => {  document.querySelector(".thank_modal").classList.remove("myStyle") }, 3000);
    }

   
  }

  render(){
    return (
    <div className="searchBox AccIcon pb-5 pt-5">
      <Container>
        <Row>
          <div className="formMiddle">
          <h1>Feedback Form</h1>
              <Form.Row>
                <Col>
                <Form.Group>
                  <Form.Control type="text"  placeholder=" Name" onChange={(event)=>{this.setState({name:event.target.value})}}/>
                  <p>{this.state.nameError}</p>
                  </Form.Group>
                </Col>
                <Col>
                 <Form.Group>
                  <Form.Control type="email" placeholder=" Email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
                  <p>{this.state.emailError}</p>
                 </Form.Group>
                </Col>
                 <Col xs={12} md={12} lg={12}>
                    <Form.Group>
                    <Form.Control as="textarea" rows={3} type="textarea" placeholder=" Message" onChange={(event)=>{this.setState({textarea:event.target.value})}}/>
                    <p>{this.state.textareaError}</p>
                    </Form.Group>
                 </Col>
                 <Col xs={12} md={12} lg={12}>
                    <Button variant="dark" className='button' type="submit" onClick={()=>this.submit()}><span>Send Message</span></Button>
                 </Col>
              </Form.Row>
           
          </div>
        </Row>
      </Container> 
          
        <div className="thank_modal">
          <div className="thank_modal-content">
            <h3>Thank You for Your Submission</h3>
            <p>Your Feeback has been saved</p>
          </div>
        </div>
       
    </div>
     )
  }
}

export default Contact_touch;