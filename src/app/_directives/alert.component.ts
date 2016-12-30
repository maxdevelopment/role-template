import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';
import {MdSnackBar} from '@angular/material';

@Component({
	selector: 'alert',
	templateUrl: './alert.component.html'
})

export class AlertComponent {
	message: any;

	constructor(private alertService: AlertService,public snackBar: MdSnackBar) { }

	ngOnInit() {
		this.alertService.getMessage().subscribe(message => { 
			//this.message = message; 
			if (message) {
				this.snackBar.open(message.text, 'Undo', { duration: 3000 });
			}
		});
	}
}