import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/service/auth.service';
import { EmpService } from 'src/app/service/emp.service';
import { OrderListService } from 'src/app/service/order-list.service';

@Component({
  selector: 'app-oder-list',
  templateUrl: './oder-list.component.html',
  styleUrls: ['./oder-list.component.scss']
})
export class OderListComponent implements OnInit{



  constructor(public api : OrderListService,  public authService: AuthService){}
  
  ngOnInit(): void {
    this.getAll();
  
    };
  


  userList: User[] = [];
  
  
  getAll(){
  this.api.getAll().subscribe((val: any) =>{
  
    this.userList = val;
  })
  
  }
  
  
  
  
  delete(id: any) {
    this.api.deleteByID(id).subscribe((del: any) =>{
  
      this.userList = del;
      alert("data deleted");
  
      this.getAll();
  })}
  
  
  

  userForm: FormGroup = new FormGroup({
  
  
    inputEmail4 : new FormControl(''),
    inputPassword4 : new FormControl(''),
    inputAddress : new FormControl(''),
    inputAddress2 : new FormControl(''),
    inputCity : new FormControl(''),
    inputZip : new FormControl(''),
    gridCheck : new FormControl(''),
    inputState : new FormControl('')
  
  });


  
  
  
  
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
  
  // // tow way binding
  
  // public random = ""
  
  
  
  // //event bindings
  
  
  
  
  // onlcick() {
  //   alert("hello world!");
  // console.log("thanks for subscribing ")
  // }
  
  
  // // onClickBTN() {
  // //   if (this.age!=true) {
  // //     this.image = "/assets/"
  // //     this.age = true;
  // //   } else {
  // //     this.image = "/assets/"
  // //     this.age = false;
  // //   }
  // // }
  
  
  
  
  
  
  
  // // poperty binding
  
  // year = 5;
  // public pic = "/assets/java-logo-vert-blk.png";
  
  
  // ngOnInit(): void {
  //     this.setImg(6);
  // }
  
  
  // setImg ( abc : number) {
  // if ( abc > 5){
  //   this.pic = "/assets/esteban-bonilla-cJBezX84KWA-unsplash.jpg"
  // }else{
  //   this.pic = "/assets/neom-HegvNcZXWTE-unsplash.jpg"
  // }
  // };
  
  
  
  
  
  
  
  
  // // interpolation binding
  // public name = "Bangladesh";
  // public salary = 1000;
  // public topic = "Economy";
  
  
  }
  