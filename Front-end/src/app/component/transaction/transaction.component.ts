import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfo } from 'src/app/model/get-info';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  listBill?: Array<GetInfo>
  page = 1
  pageSize: number = 5
  collectionSize = 1
  searchBillForm: FormGroup = new FormGroup({
    billId: new FormControl(),
    startDate: new FormControl()
  })
  ngOnInit(): void {
    this.adminService.getAllBill().subscribe(res => {
      this.listBill = res
      this.collectionSize = this.listBill.length
    })

  }

  constructor(private adminService: AdminService, private router: Router) { }

  searchBill() {
    this.adminService.searchBill(this.searchBillForm.value.billId).subscribe(res => {
      this.listBill = res

    })
  }

  searchBillByDate() {
    this.adminService.searchBillByStartDate(`${this.searchBillForm.value.startDate.year}/${this.searchBillForm.value.startDate.month}/${this.searchBillForm.value.startDate.day}`).subscribe(res => {
      this.listBill = res
    })
  }

  openDetail(bill: GetInfo) {
    this.router.navigate(['admin/bill-detail', bill.billId])
  }
}
