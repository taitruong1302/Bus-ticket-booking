import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbCalendar, NgbDateStruct, NgbModal, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { Bus } from 'src/app/model/bus';
import { Schedule } from 'src/app/model/schedule';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.css']
})
export class ScheduleManagementComponent implements OnInit {
  page = 1
  pageSize: number = 5
  collectionSize = 1
  schedule?: Array<Schedule>
  closeResult: string = ''
  model: NgbDateStruct
  listBus?: Array<Bus>
  scheduleId?: number
  deleteSchedule?: number
  msg: string = ""

  editScheduleForm: FormGroup = new FormGroup({
    editStartTime: new FormControl(""),
    editEndTime: new FormControl(""),
    editDeparture: new FormControl(""),
    editDestination: new FormControl(""),
    editStartDate: new FormControl("")
  })

  createSchedule: FormGroup = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(),
    totalSeat: new FormControl(),
    seatLeft: new FormControl(),
    startDate: new FormControl(),
    destination: new FormControl(),
    departure: new FormControl(),
    bus: new FormControl()
  })

  constructor(private adminService: AdminService, private modalService: NgbModal, private calendar: NgbCalendar) {
    this.model = calendar.getToday()
  }

  ngOnInit(): void {
    this.getAllSchedule()
    this.getAllBus()
  }

  getAllSchedule() {
    this.adminService.getAllSchedule().subscribe(res => {
      this.schedule = res
      this.collectionSize = this.schedule.length
    })
  }

  openForm(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
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

  getAllBus() {
    this.adminService.getAllBus().subscribe(res => {
      this.listBus = res
    })
  }

  addNewSchedule() {
    this.adminService.addschedule(`${this.createSchedule.value.startTime.getHours().toString()}:${this.createSchedule.value.startTime.getMinutes().toString()}`, `${this.createSchedule.value.endTime.getHours().toString()}:${this.createSchedule.value.endTime.getMinutes().toString()}`, `${this.createSchedule.value.startDate.year}/${this.createSchedule.value.startDate.month}/${this.createSchedule.value.startDate.day}`, this.createSchedule.value.departure, this.createSchedule.value.destination, this.createSchedule.value.bus).subscribe(res => {
      this.modalService.dismissAll()
      this.ngOnInit()
      return res
    })
  }

  openEdit(editForm: any, schedule: Schedule) {
    this.modalService.open(editForm, {
      backdrop: 'static',
      size: 'lg'
    });
    this.scheduleId = schedule.scheduleId
    this.editScheduleForm.patchValue({
      editStartTime: schedule.startTime,
      editEndTime: schedule.endTime,
      editDeparture: schedule.departure,
      editDestination: schedule.destinations,
      editStartDate: schedule.startDate
    })
  }

  editSubmit() {
    this.adminService.editSchedule(this.scheduleId, `${this.editScheduleForm.value.editStartTime.getHours().toString()}:${this.editScheduleForm.value.editStartTime.getMinutes().toString()}`, `${this.editScheduleForm.value.editEndTime.getHours().toString()}:${this.editScheduleForm.value.editEndTime.getMinutes().toString()}`, `${this.editScheduleForm.value.editStartDate.year}/${this.editScheduleForm.value.editStartDate.month}/${this.editScheduleForm.value.editStartDate.day}`, this.editScheduleForm.value.editDeparture, this.editScheduleForm.value.editDestination).subscribe(res => {

    })
  }

  openDelete(deleteConfirm: any, schedule: Schedule) {
    this.deleteSchedule = schedule.scheduleId
    this.modalService.open(deleteConfirm, {
      backdrop: 'static',
      size: 'lg'
    })
  }

  onDelete() {
    this.adminService.deleteSchedule(this.deleteSchedule).subscribe(res => {
      this.msg = res
      console.log(this.msg)
      if (res === "Can't Deleted" || res === "Can't found Schedule") {

      }
      else {
        this.modalService.dismissAll()
        this.ngOnInit()
      }
    })
  }
}
