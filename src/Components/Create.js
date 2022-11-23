import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'
const Create = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendApiToData = () => {
        axios.post('https://63733ad5348e9472990661cd.mockapi.io/Crud',{
            firstName,
            lastName
        }) .then(()=>{
            navigate('/read')
        } )
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                           placeholder='First Name'
                            onChange={(e)=>setFirstName(e.target.value)}
                     />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" 
                            placeholder='Last Name'
                            onChange={(e)=>setLastName(e.target.value)}
                     />
                </Form.Field>
                <Button type='submit' onClick={sendApiToData}>Submit</Button>
            </Form>
        </div>
    )
}
export default Create;