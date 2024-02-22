import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { OrderListService } from 'src/app/service/order-list.service';
import { RestAPIService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  // library : inject 
  
  constructor(public apiService: OrderListService, private router: Router){}
  



  ngOnInit() : void{
    this.getAllData();
  };
  
  
  
  // // tow way binding
  
  // public random = ""
    
  //form binding
  
  
  
  // input in list
  
  // userList!: User[];
  
  userList: User[] = [];
  
  //step 04
  
  userForm: FormGroup = new FormGroup({
  
  
    inputEmail4 : new FormControl(''),
    inputPassword4 : new FormControl(''),
    inputAddress : new FormControl(''),
    inputAddress2 : new FormControl(''),
    inputCity : new FormControl(''),
    inputZip : new FormControl(''),
     inputState : new FormControl('')
  
  });
  
  // to run this component we using METHOD
  
  // onSub(){
  //   console.log( this.userForm.value);
  
  
  
  //   // list
  //   this.userList.push(this.userForm.value); 
  // };
  
  
  
  
  // onSub() {
  //   if (!this.editData) {
  //     console.log(this.userForm.value);
  //     this.userList.push(this.userForm.value);
  //   } else {
  //     for (let index = 0; index < this.userList.length; index++) {
  //       if (this.userList[index].inputEmail4 === this.userForm.value.inputEmail4) {
  //         this.userList[index] = this.userForm.value;
  //       }
  //     }
  //   }
  //   this.clear();
  // }
  
  
  
  
  // new for rest api 
  
  
  onSub() {
  
  console.log(this.userForm.value);
  
  this.apiService.addData(this.userForm.value).subscribe((res : any) => {
    console.log('Post created successfully!') 
  
    // this.getAllData();
    // this.clear();
  
  this.router.navigateByUrl('/orderList');
  
  });
  
  
  }
  
  
  
  getAllData(){
  
    this.apiService.getAll().subscribe((res : any) => {
      console.log('Get all called successfully!')
    
    this.userList = res;
    });
  
  };
  
  
  clear() {
    this.userForm = new FormGroup({
      inputEmail4: new FormControl(''),
      inputPassword4: new FormControl(),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl('')
    });
    this.editData = false;
  }
  
  // to delete 
  
  
  // full object
  
  delete(obj: User){
    console.log("Delete call" + obj);
    
    this.userList = this.userList.filter(item => item !== obj);
  }
  
  
  //single component
  
  // delete(obj: String){
  //   console.log("Delete call" + obj) ;
    
  //   this.userList = this.userList.filter(item => item.inputEmail4 !== obj);
  // }
  
  
  
  // to edit
  editData : boolean = false;
  
  edit(ob : User){
  
  // to set the value of the inputed data on the form
  this.editData = true;
  
  
  this.userForm = new FormGroup ({
  
    inputEmail4 : new FormControl(ob.inputEmail4),
    inputPassword4 : new FormControl(ob.inputPassword4),
    inputAddress : new FormControl(ob.inputAddress),
    inputAddress2 : new FormControl(ob.inputAddress2),
    inputCity : new FormControl(ob.inputCity),
    inputZip : new FormControl(ob.inputZip),
    inputState : new FormControl(ob.inputState)
  
  });
  
  
  
  
  
  };
  }
  