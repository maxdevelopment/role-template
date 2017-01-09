import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService, SocketService } from '../_services/index';
import {MdDialog, MdDialogRef} from '@angular/material';
import { HrModalComponent } from '../hr-modal/hr-modal.component';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    worksheets: Array<any> = [];
    items: Array<any> = [];

    constructor(private userService: UserService, private socket: SocketService, public modal:MdDialog) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.items = [1,2,3,4,5,6,7,8];
    }

    ngOnInit() {
        this.listenWorksheets();
    }

    private listenWorksheets () {
        this.socket.on('worksheets').subscribe(worksheets => {
            this.worksheets = worksheets;
            console.log(this.worksheets)
        });
        this.socket.emit('worksheets',true);
    }

    showInfo () {
        let dialogRef = this.modal.open(HrModalComponent,{
            width: '60%'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result)
        });
    }
}