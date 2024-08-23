import { Injectable } from '@angular/core';
import { signUp, logIn,confirmEmail,sendCode } from '../graphql/graphql.queries';
import { Apollo } from 'apollo-angular';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private Apollo: Apollo) {}

  login(data: any):any {

    return this.Apollo.query({
      query: logIn,
      variables: {
        email: data.email,
        password: data.password,
      },
    })
  }



  signUp(data: { createUserInput: any }): any {
    return this.Apollo.mutate({
      mutation: signUp,
      variables: {
        createUserInput: data.createUserInput,
      },
    });
  }

  confirm(data:any ): any {
    return this.Apollo.mutate({
      mutation: confirmEmail,
      variables: {
        email: data.email,
        code :data.code,
      },
    });
  }
  sendCode(data:any ): any {
    return this.Apollo.mutate({
      mutation: sendCode,
      variables: {
        email: data.email,
      },
    });
  }
}
