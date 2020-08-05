import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const UserList = () => {

    const [listOfUsers, setListOfUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setListOfUsers(result.data)
        };
        fetchData();
    }, []);





    return (<div>

        <Table className="table table-striped">
            <th>Name</th>
            <th>UserName</th>
            <th>E-mail</th>
            <th>Adress</th>
            <th>Company</th>
            <tbody>
                {listOfUsers.map(el => <tr key={el.id}>

                    <td>{el.name}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>{el.address.street + " " + el.address.suite + " " + el.address.city + " " + el.address.zipcode}</td>
                    <td>{`${el.company.name} , catchPhrase : ${el.company.catchPhrase}  , bs: ${el.company.bs}   `}</td>

                </tr>

                )}



            </tbody>



        </Table>


    </div>);
}

export default UserList;