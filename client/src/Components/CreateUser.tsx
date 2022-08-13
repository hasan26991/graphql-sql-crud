import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_USER } from '../Graphql/Mutations'


const CreateUser = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [createUser] = useMutation(CREATE_USER);

    return (
        <div>
            <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => createUser({ variables: { name, username, password } })} >create user</button>
        </div>
    )
}

export default CreateUser