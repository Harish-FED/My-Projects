import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

const Update = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendApiToData = () => {
        axios.put(`https://63733ad5348e9472990661cd.mockapi.io/Crud/${ID}`,{
            firstName,
            lastName
        }).then(()=>{
            navigate('/read')
        })

    }

    useEffect(()=>{
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'))
    },[])
    
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                           placeholder='First Name'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                     />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" 
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                     />
                </Form.Field>        
                <Button type='submit' onClick={sendApiToData}>Update</Button>
                
            </Form>
        </div>
    )
}
export default Update;
