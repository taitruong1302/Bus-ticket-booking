import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfo } from 'src/app/model/get-info';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit{

  bill?: GetInfo|null
  
  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.adminService.getBillById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
      this.bill = res
      console.log(this.bill)
    })
  }

  goToHome(){
    this.router.navigateByUrl("customer/home")
  }

}
