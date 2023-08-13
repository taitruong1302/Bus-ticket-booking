import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  addScheduleForm: FormGroup = new FormGroup({
    startDate: new FormControl(""),
    startTime: new FormControl(""),
    endTime: new FormControl("")
  })

  constructor(private adminService: AdminService) { }

  ngOnInit() {

  }

  addSchedule() {
    // this.adminService.addschedule()
  }
}
