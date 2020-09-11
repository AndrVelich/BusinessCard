import { Component } from '@angular/core';
import { ContactService, ContactModel } from '@services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
    selector: 'contact-component',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [fadeAnimation]
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
            "message": [this.contactModel.message, [
                Validators.required,
            ]],
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
        else {
            this.validateAllFormFields(this.contactForm);
        }
    }

    //TODO move to the service
    private validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
