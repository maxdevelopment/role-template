import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-hr-modal',
    templateUrl: './hr-modal.component.html',
    styleUrls: ['./hr-modal.component.scss']
})
export class HrModalComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    messages: Array<any>;
    actions: Array<any>;
    folders: Array<any>;
    notes: Array<any>;

    constructor() {
        this.model.cafe = {};

        //demo vars
        this.model = {
            username: 'Golosay Volodymyr',
            birthdate: 'xx.xx.xxxx',
            address: 'Романовская слобода 4',
            phone: '+38 063 611 26 85',
            position: 'Senior Front-End developer',
            how_long: 'Пока нравится=)'
        };
        this.messages = [1,2,3,4];
        this.actions = [
            {value: 'accept-0', viewValue: 'Принять'},
            {value: 'accept-1', viewValue: 'Принять с замечанием'},
            {value: 'decline', viewValue: 'Отклонить'}
        ];
        this.folders = [
            {
                name: 'Принят на работу',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Повышен',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Ушел по собственному желанию',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Жалоба #1',
                updated: new Date('1/18/16'),
            },
            {
                name: 'Жалоба #2',
                updated: new Date('2/20/16'),
            }
        ];
    }

    ngOnInit() {
    }

}
