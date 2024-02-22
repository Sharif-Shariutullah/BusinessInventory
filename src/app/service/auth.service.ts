import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  router: any;

  constructor(private httpClient: HttpClient, private route: Router) {}

  private apiURL = 'http://localhost:3500/auth';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(user: any) {
    console.log('Call from service  ', user.inputEmail4);
    return this.httpClient.post(this.apiURL, user, this.httpOptions);
  }


  getAll() {
    console.log('Call from service  ');
    return this.httpClient.get(this.apiURL);
  }

  getByID(id: any) {
    console.log('Call from service');
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  deleteByID(id: any) {
    console.log('Delete from service ');

    return this.httpClient.delete(this.apiURL + '/' + id);
  }


  updateData(user: any) {
  
    return this.httpClient.put(this.apiURL +  "/" + user.id, user);
  }



// -------------

isLogin() {
  let login = localStorage.getItem('isLogin');
  console.log(login);

  if (login == 'true') {
    this.route.navigateByUrl('/home');
  } else {
    this.route.navigateByUrl('/login');
  }
}


}
