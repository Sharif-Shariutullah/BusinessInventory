import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestAPIService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements  OnInit {
  authList: any;
 
  constructor(
    public authService: AuthService,
    private router: Router,
    public restAPI: RestAPIService
  ) {}

  ngOnInit(): void {
  }

// library : inject 





 signFrom : FormGroup = new FormGroup ({

    inputEmail4 : new FormControl(''),
    inputPassword4 : new FormControl(''),
    inputAddress : new FormControl(''),
    inputAddress2 : new FormControl(''),
    inputCity : new FormControl(''),
    inputZip : new FormControl(''),
    gridCheck : new FormControl(''),
    inputState : new FormControl('')
  
  });




//submit button 

  onSub(){
console.log(this.signFrom.value);
this.signFrom.value.role = 'employee';
this.authService.addData(this.signFrom.value).subscribe((res : any) => {

this.router.navigateByUrl('/login');


});

  }
}