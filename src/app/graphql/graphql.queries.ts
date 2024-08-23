import { gql } from 'apollo-angular';

const signUp = gql`
mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    userName
    email
    password
    role
    emailConfirmationCode
  }
}
`;



const logIn = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      userName
      email
    }
  }
`;

const confirmEmail = gql`
  mutation ConfirmEmail($email: String!, $code: String!) {
    confirmEmail(email: $email, code: $code)
  }
`;
const sendCode = gql`
  mutation sendCode($email: String!) {
    sendCode(email: $email)
  }
`;
export { signUp, logIn,confirmEmail,sendCode };
