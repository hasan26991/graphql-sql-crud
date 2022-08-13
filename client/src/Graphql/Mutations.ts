import { gql } from '@apollo/client'

export const CREATE_USER = gql`
   mutation createUser($name:String! $username:String! $password:String!){
    createUser(name:$name username:$username password:$password){
      id
      name
      username
    }
   }
`;

export const DELETE_USER = gql`
   mutation deleteUser($id:ID!){
    deleteUser(id:$id){
      successfull
      message
    }
   }
`;

export const UPDATE_USER = gql`
   mutation updateUser($username:String! $oldPassword:String! $newPassword:String!){
    updateUser(username:$username oldPassword:$oldPassword newPassword:$newPassword){
      message
    }
   }
`;