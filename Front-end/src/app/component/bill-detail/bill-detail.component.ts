import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfo } from 'src/app/model/get-info';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  bill: GetInfo = new GetInfo(0, "", "", [], 0, "", "", "Paid", "Truong Huu Tai", "0949093726", "")
  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getBillById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
      this.bill = res
    })
  }

  goToTransaction() {
    this.router.navigateByUrl("admin/transaction")
  }

}
