import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetInfo } from 'src/app/model/get-info';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {

  page = 1
  pageSize: number = 5
  collectionSize = 1

  listBill?: Array<GetInfo>
  searchBillForm: FormGroup = new FormGroup({
    billId: new FormControl(),
    startDate: new FormControl()
  })
  ngOnInit(): void {
    this.customerService.getAllBillByEmail(localStorage.getItem("email")).subscribe(res => {
      this.listBill = res
      this.collectionSize = this.listBill.length
    })
  }

  constructor(private customerService: CustomerService, private router: Router) { }

  searchBillById() {
    this.customerService.searchBillById(this.searchBillForm.value.billId, localStorage.getItem("email")).subscribe(res => {
      this.listBill = res
    })
  }

  searchBillByDate() {
    this.customerService.searchBillByStartDate(`${this.searchBillForm.value.startDate.year}/${this.searchBillForm.value.startDate.month}/${this.searchBillForm.value.startDate.day}`, localStorage.getItem("email")).subscribe(res => {
      this.listBill = res
    })
  }

  openDetail(bill: GetInfo) {
    this.router.navigate(['admin/bill-detail', bill.billId])
  }
}
