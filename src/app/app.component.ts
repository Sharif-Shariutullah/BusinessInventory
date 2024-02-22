import { Component, OnInit } from '@angular/core';
import { RestAPIService } from './service/rest-api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'school';
  role  :any;


  constructor(public apiService: RestAPIService, private router: Router) { }


  sharedMessage: string = '';
  subscription!: Subscription;



  ngOnInit(): void {
     this.role = localStorage.getItem('role');
    this.isLogin();

    this.subscription = this.apiService.currentMessage.subscribe(message => this.sharedMessage = message);

  }


  isLogin() {
    let login = localStorage.getItem("isLogin");
    if (login == "true") {
      this.apiService.changeMessage("true");
    }
  }

  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('isLogin');
    this.apiService.changeMessage("false");
    this.router.navigateByUrl('/login');
}




}
