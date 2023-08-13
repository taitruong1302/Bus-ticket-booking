import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: User
  msg?: string
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem("username")!==null){
      this.router.navigateByUrl("/customer/home")
    }
  }

  login(){
    this.customerService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res=>{
      this.user = res
      if(this.user == null){
        this.msg = "*Wrong email or password"
      }
      else{
        localStorage.setItem("role",res.role)
        localStorage.setItem("username", res.userName)
        localStorage.setItem("email", res.email)
        localStorage.setItem("phoneNumber",res.phoneNumber)
        if(this.user.role === "User"){
          this.router.navigateByUrl("customer/home")
        }
        if(this.user.role === "Admin"){
          this.router.navigateByUrl("customer/home")
        }
      }
    })
  }
}
