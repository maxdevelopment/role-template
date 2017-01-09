import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AlertService, UserService} from '../_services/index';
import {Education,Experience} from '../_models/index';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
    model: any = {};
    cafes: Array<any>;
    loading = false;
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService,
                private userService: UserService) {
        this.cafes = [
            {name: 'пр-т. Машерова 78', value: '0', checked: false},
            {name: 'ул. Я.Коласа 37 (РЦ "Айсберг")', value: '1', checked: false},
            {name: 'ул. Притыцкого 83', value: '2', checked: false},
            {name: 'пр-т. Рокоссовского 78', value: '3', checked: false},
            {name: 'ул. Шафарнянская 11 (БЦ "Порт")', value: '4', checked: false},
            {name: 'ул. Уманская 54 (ТЦ "Глобо")', value: '5', checked: false}
        ];
        this.model.educations = [];
        this.model.experience = [];
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    selectedOptions(arr: Array<any>) {
        return arr
        .filter(opt => opt.checked)
        .map(opt => opt.value);
    }

    initOptions(ids: Array<any>, arr: Array<any>) {
        arr.forEach(function (item, i, arr) {
            arr[i].checked = ids.some(id => id == item.id);
        });
    }

    addFormRow(name: string) {
        if (name === 'educations') {
            this.model.educations.push(new Education());
        } else if (name === 'experience') {
            this.model.experience.push(new Experience());
        }
        return false;
    }

    submit_register() {
        this.loading = true;
        this.model.cafes = this.selectedOptions(this.cafes);
        this.userService.form_register(this.model)
        .subscribe(
            data => {
                if (data.success) {
                    this.router.navigate([this.returnUrl]);
                } else {
                    this.loading = false;
                    this.alertService.error(data.msg);
                }
            },
            error => {
                console.log('error login');
                this.alertService.error(error);
                this.loading = false;
            });
    }


}
