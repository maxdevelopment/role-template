import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService,UserService } from '../_services/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService) {
  	this.model.cafe = {};
  }

  ngOnInit() {
  	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit_register() {
        this.loading = true;
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
