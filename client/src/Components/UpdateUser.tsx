import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../Graphql/Mutations'

const UpdateUser = () => {
    const [username, setUsername] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [updateUser] = useMutation(UPDATE_USER);

    return (
        <div>
            <input type="text" placeholder='username..' onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='current password..' onChange={(e) => setOldPassword(e.target.value)} />
            <input type="text" placeholder='new password..' onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={() => updateUser({ variables: { username, oldPassword, newPassword } })}>update</button>
        </div>
    )
}

export default UpdateUser