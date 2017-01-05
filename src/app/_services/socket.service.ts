import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
    private host: string = window.location.protocol + "//" + window.location.hostname + ":" + 3000;
    private socket: any;

    constructor() {
        console.log(this.host);
        this.socket = io(this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log('ERROR: "${error}" (${this.host})');
        });
    }

    emit(chanel,message){
        this.socket.emit(chanel, message);
    }

    on(event_name) {
        return new Observable<any> (observer => {
            this.socket.on(event_name, (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }

    getWorksheets() {
        return new Observable<any> (observer => {
            this.socket.on('worksheets', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }

    // Handle connection opening
    private connect() {
        // Auth after connect
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.socket.emit("user_token",currentUser.token);
    }

    // Handle connection closing
    private disconnect() {
        console.log('Disconnected');
    }
}