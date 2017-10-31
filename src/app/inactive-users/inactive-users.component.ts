import { Component, OnInit } from '@angular/core';
import { AvtiveInactiveUsers } from '../ActiveInactiveUsers.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string [];

  constructor (private _activeInactive: AvtiveInactiveUsers){}

  ngOnInit(){
    this.users = this._activeInactive.inactiveUsers;
  }

  onSetToActive(id: number) {
    this._activeInactive.inactiveToActive(id);
  }
}
