import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService, SocketService } from '../_services/index';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormComponent} from '../form/form.component';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    worksheets: Array<any> = [];

    constructor(private userService: UserService, private socket: SocketService, public modal:MdDialog) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.listenWorksheets();
    }

    private listenWorksheets () {
        this.socket.on('worksheets').subscribe(worksheets => {
            this.worksheets = worksheets;
            console.log(this.worksheets)
        });
    }

    showInfo () {
        let dialogRef = this.modal.open(FormComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(result)
        });
    }
}