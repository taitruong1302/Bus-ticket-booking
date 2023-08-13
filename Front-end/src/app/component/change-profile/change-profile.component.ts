import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {
  user?: User
  changeProfileForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(),
    confirmPassword: new FormControl(""),
    phoneNumber: new FormControl("", [Validators.pattern("[0-9]*"), Validators.maxLength(12)]),
    address: new FormControl(""),
  })

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("username") === null) {
      this.router.navigateByUrl("/login")
    }
    this.customerService.findUserByEmail(localStorage.getItem("email")).subscribe(res => {
      this.user = res
      this.changeProfileForm.patchValue({
        username: this.user?.userName,
        phoneNumber: this.user?.phoneNumber,
        address: this.user?.address
      })
    })

  }

  getControl(name: any): AbstractControl | null {
    return this.changeProfileForm.get(name)
  }

  changeProfile() {
    this.userService.updateProfile(this.changeProfileForm.value.username, localStorage.getItem("email"), this.changeProfileForm.value.password, this.changeProfileForm.value.phoneNumber, this.changeProfileForm.value.address).subscribe(res => {
      console.log(res)
    })
  }
}