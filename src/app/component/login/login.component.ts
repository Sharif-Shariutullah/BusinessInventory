import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements  OnInit {
 
  constructor(
    public authService: AuthService,
    private router: Router,
    public restAPI: RestAPIService
  ) {}

  ngOnInit(): void {
    this.isLogin();
  }

  isLogin() {
    let login = localStorage.getItem('isLogin');
    console.log(login);

    if (login == 'true') {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  loginForm: FormGroup = new FormGroup({
    inputEmail4: new FormControl(''),
    inputPassword4: new FormControl(''),
    Check12: new FormControl(''),
    role: new FormControl(''),
  });

  // login(){

  // console.log(this.loginForm.value);

  // };

  authList: any[] = [];

  login() {
console.log(this.loginForm.value);

    
    this.authService.getAll().subscribe((res: any) => {
      this.authList = res;

      let flag = false;

      for (let index = 0; index < this.authList.length; index++) {

        console.log(this.loginForm.value.inputEmail4);
        console.log(this.loginForm.value.inputPassword4);
        console.log(this.authList[index].inputEmail4);
        console.log(this.authList[index].inputPassword4);

        if (
          this.loginForm.value.inputEmail4 == this.authList[index].inputEmail4 &&
          this.loginForm.value.inputPassword4 == this.authList[index].inputPassword4
        ) {
          console.log("true--------------------");
          
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('username', this.loginForm.value.inputEmail4);
          localStorage.setItem('role', this.authList[index].role);
          flag = true;
        }
      }

      if (flag == true) {
        console.log("true-flag-------------------");

        this.restAPI.changeMessage('true');
        this.router.navigateByUrl('/dashboard');

      } else {
        console.log("-flag--False-----------------");

        alert('Incorrect UserName Or Password!');
      }
    });



  }
}
