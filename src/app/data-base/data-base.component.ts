import {Component, OnInit} from '@angular/core';
import {User} from '../_models/index';
import {UserService, SocketService} from '../_services/index';
import {MdDialog, MdDialogRef} from '@angular/material';
import {HrModalComponent} from '../hr-modal/hr-modal.component';

@Component({
    selector: 'app-data-base',
    templateUrl: './data-base.component.html',
    styleUrls: ['./data-base.component.scss']
})
export class DataBaseComponent implements OnInit {
    currentUser: User;
    worksheets: Array<any> = [];
    items: Array<any> = [];

    constructor(private userService: UserService, private socket: SocketService, public modal: MdDialog) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.items = [1, 2, 3, 4];
    }

    ngOnInit() {
        this.listenWorksheets();
    }

    private listenWorksheets() {
        this.socket.on('worksheets-db').subscribe(worksheets => {
            this.worksheets = worksheets;
            console.log(this.worksheets)
        });
        this.socket.emit('data-base', true);
    }

    showInfo() {
        let dialogRef = this.modal.open(HrModalComponent, {
            width: '60%'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result)
        });
    }
}
