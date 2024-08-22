import { Injectable } from '@angular/core';
// import { signUp, logIn } from '../graphql/graphql.queries';
// import { Apollo } from 'apollo-angular';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(private apollo: Apollo) {}

  login(data: any) {
    // this.apollo
    //   .mutate({
    //     mutation: logIn,
    //     variables: {
    //       email: data.email,
    //       password: data.password,
    //     },
    //   })
    //   .subscribe(({ data }: any) => {
    //     console.log(data);
    //   });
  }
}
