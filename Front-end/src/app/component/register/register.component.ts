import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg = "*"

  registerForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(12)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", [Validators.required])
  })
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("username") !== null) {
      this.router.navigateByUrl("/customer/home")
    }
  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }

  registerFn() {

  }

  addNewCustomer(): any {
    this.customerService.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.phoneNumber, this.registerForm.value.email, this.registerForm.value.address).subscribe(res => {
      this.msg = this.msg + res
      if (this.msg.includes("Register Successful")) {
        this.router.navigateByUrl("/login")
      }
    })
  }
}
