import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bus } from 'src/app/model/bus';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  page = 1
  pageSize: number = 5
  collectionSize = 1

  busId: number = 0
  listBus?: Array<Bus>
  closeResult: string = ''
  addNewBusForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    seats: new FormControl(),
    departure: new FormControl(""),
    destination: new FormControl("")
  })

  editBusForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    seats: new FormControl(),
  })

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllBus()
  }

  getAllBus() {
    this.adminService.getAllBus().subscribe(res => {
      this.listBus = res
      this.collectionSize = this.listBus.length
    })
  }

  openForm(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addNewBus() {
    this.adminService.addBus(this.addNewBusForm.value.name, this.addNewBusForm.value.seats).subscribe(res => {

      this.ngOnInit()
      return res
    })
    this.modalService.dismissAll()
  }

  openEdit(form: any, bus: Bus) {
    this.modalService.open(form, {
      backdrop: 'static',
      size: 'lg'
    });
    this.busId = bus.busId
    this.editBusForm.patchValue({
      name: bus.name,
      seats: bus.seat
    })
  }

  editBusInfo() {
    this.adminService.editBus(this.busId, this.editBusForm.value.name, this.editBusForm.value.seats).subscribe(res => {
      if (res.includes("Update Success")) {
        this.modalService.dismissAll()
        this.ngOnInit()
      }
    })
  }

  openDelete(form: any, bus: Bus) {
    this.modalService.open(form, {
      backdrop: 'static',
      size: 'lg'
    });
    this.busId = bus.busId
  }

  onDelete() {
    this.adminService.deleteBus(this.busId).subscribe(res => {
      if (res.includes("Deleted Success")) {
        this.modalService.dismissAll()
        this.ngOnInit()
      }
    })
  }

}
