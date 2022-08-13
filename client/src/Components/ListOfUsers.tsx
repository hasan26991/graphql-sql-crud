import { useQuery, useMutation } from '@apollo/client'
import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries'
import { DELETE_USER } from '../Graphql/Mutations'

const ListOfUsers = () => {
    const { data } = useQuery(GET_ALL_USERS)
    const [deleteUser] = useMutation(DELETE_USER)

    return (
        <div>
            {data && data.getAllUsers.map((user: any, index: any) => {
                return (
                    <div key={index}>
                        {user.name} / {user.username}
                        <button onClick={() => deleteUser({ variables: { id: user.id } })}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfUsers