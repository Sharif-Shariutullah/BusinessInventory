import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/user';
import { EmpService } from 'src/app/service/emp.service';
import { OrderListService } from 'src/app/service/order-list.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {
  constructor(
    public apiService: OrderListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}



  id!: any;
  userData!: User;



  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.getDataById(this.id);
  }





  getDataById(id: any) {
    this.apiService.getByID(id).subscribe((v: any) => {
    this.userData = v;
    this.userForm.setValue(this.userData);



    });
  }






  userList: User[] = [];

  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    inputEmail4: new FormControl(''),
    inputPassword4: new FormControl(''),
    inputAddress: new FormControl(''),
    inputAddress2: new FormControl(''),
    inputCity: new FormControl(''),
    inputZip: new FormControl(''),
    inputState: new FormControl(''),
  });




  onSub() {
this.apiService.updateData(this.userForm.value).subscribe((res : any) => {

  this.router.navigateByUrl('/orderList');
})



  }
}

