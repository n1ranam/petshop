import { useState } from "react";
import AXIOS from 'axios';
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
function AltUser()
{
    const [user,setUser]=useState([])
    useEffect(()=>
    {
         AXIOS.get('http://localhost:3001/getEmp').then((res)=>
        {
            setUser(res.data.result)
        })
    },[])
    return(
        <>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {user.map((ls)=>{
                return(
        <tr>
        <td>{ls.fname}</td>
        <td>{ls.email}</td>
        <td>{ls.password}</td>
        <td><a href="">Delete</a></td>
      </tr>
                )
        })
}
</tbody>
</Table>
</>)
}export default AltUser;