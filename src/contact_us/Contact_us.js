import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Contact_header from './Contact_header';
import Contact_desc from './Contact_desc';
import Contact_touch from './Contact_touch';
const Contact_us = ()=> {
  return (
  <>
   	<Contact_header/>
   	<Contact_desc/>
   	<Contact_touch/>
  </>
  );
}

export default Contact_us;
