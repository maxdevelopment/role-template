import { Component } from '@angular/core';
import { User } from './_models/index';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    currentUser: User;
    side_bar: boolean = false;
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.side_bar = !!(localStorage.getItem('currentUser'));
            }
        });
    }
}
