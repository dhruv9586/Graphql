import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { LOAD_USERS } from '../graphql/query';

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const { error, loading, data } = useQuery(LOAD_USERS);
    useEffect(() => {
        if (data) setUsers(data.getAllUsers);
    }, [data]);
    return (
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                {users.map((user) => {
                    const { firstName, lastName, email } = user;
                    return (
                        <tr>
                            <td>{firstName} </td>
                            <td> {lastName} </td>
                            <td> {email} </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default GetUsers;
