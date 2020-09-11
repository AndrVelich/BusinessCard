import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ContactService {

    private url: string = '/api/contact';

    constructor(private httpClient: HttpClient) { }

    public saveContact(order: ContactModel) {
        return this.httpClient.post(this.url, order);
    }
}

export class ContactModel {
    public name: string;
    public email: string;
    public subject: string;
    public message: string;
}
