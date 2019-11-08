import React from 'react'
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Page from '../components/Page.js'
import './styles/contacts.css'

const Contacts = () => {
  return (
    <Page>
      <div id="formTop" >
        <h3 id='formTag'>
          Have questions? Want to talk about the meaning of life?
          <br />
          I would love to hear from you!
        </h3>
        <form id="contact-form" method="POST" action="https://formspree.io/deadcookies@gmail.com">
          <TextField type="text" placeholder="Your name" name="name" style={{ margin:'2% 0% 10% 0', width:'100%'}}/>
          <TextField type="email" placeholder="Your email" name="_replyto"
          style={{ margin:'0% 0% 10% 0', width:'100%' }}/>
          <TextField multiline="true" placeholder="Your message" name="message"
          style={{ margin:'0% 0% 10% 0', width:'100%' }}/>
          <Button id='formSubmitButton' type="submit" value="Send"> Submit </Button>
        </form>
      </div>
    </Page>
  );
}

export default Contacts