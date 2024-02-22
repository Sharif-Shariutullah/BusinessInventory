import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class EmpService {


  constructor(private httpClient: HttpClient) { }

  private apiURL = 'http://localhost:3500/empList';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(user: User) {
    console.log('Call from service  ', user.inputEmail4);

    return this.httpClient.post(this.apiURL, user);
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


  updateData(user: User) {

    return this.httpClient.put(this.apiURL + "/" + user.id, user);
  }






  // ----------

  private messagesource = new BehaviorSubject('false');
  currentMessage = this.messagesource.asObservable();


  changeMessage(message: string) {
    this.messagesource.next(message);

  }
}


