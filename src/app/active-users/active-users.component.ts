import { Component, OnInit } from '@angular/core';
import { AvtiveInactiveUsers } from '../ActiveInactiveUsers.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];
  constructor (private _activeInactive: AvtiveInactiveUsers ){}

  ngOnInit(){
    this.users = this._activeInactive.activeUsers;
  }
  onSetToInactive(id: number) {
    this._activeInactive.activeToInactive(id);
  }
}
