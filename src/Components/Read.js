import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from 'semantic-ui-react'

const Read = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`https://63733ad5348e9472990661cd.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    })

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
    }

    const getData = () => {
        axios.get(`https://63733ad5348e9472990661cd.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63733ad5348e9472990661cd.mockapi.io/Crud/${id}`)
            .then(() => {
                getData()
            })
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map(data => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button color="green" onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <Link to='/'>
            <Button>Add</Button>
            </Link>
        </div>
    )
}
export default Read;