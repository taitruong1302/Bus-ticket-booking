import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-create-new-bus',
  templateUrl: './create-new-bus.component.html',
  styleUrls: ['./create-new-bus.component.css']
})
export class CreateNewBusComponent {

  @Output() newItemEvent = new EventEmitter<User>()
  @Input() modalForm = NgbModal
  
  addNewBusForm: FormGroup = new FormGroup({
    name: new FormControl("")
  })

  addNewBus(){

  }
}
