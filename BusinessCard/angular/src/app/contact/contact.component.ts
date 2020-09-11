import { Component } from '@angular/core';
import { ContactService, ContactModel } from '@services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    public contactForm: FormGroup;
    public contactModel: ContactModel = new ContactModel();
    public errorMessage: string;
    public showConfirmMessage: boolean = false;

    constructor(
        private fb: FormBuilder,
        private service: ContactService,
    ) { }

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.contactForm = this.fb.group({
            "name": [this.contactModel.name, [
                Validators.required
            ]],
            "email": [this.contactModel.email, [
                Validators.required,
            ]],
            "subject": [this.contactModel.subject],
            "message": [this.contactModel.message],
        });
    }

    public saveContact() {
        if (this.contactForm.valid) {
            this.service.saveContact(this.contactModel)
                .subscribe(
                    () => {
                        this.showConfirmMessage = true;
                    },
                    error => this.errorMessage = error);
        }
    }
}
