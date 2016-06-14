import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
import {isBoolean} from "@angular/common/src/facade/lang";

@Component({
    selector: 'my-template-form',
    template: `
        <div class="col-md-6 col-md-offset-3">
        <h2>Sign-up Form</h2>
          <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group form-group-sm">
              <label for="mail" class="col-sm-2 control-label">Mail</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="mail"
                    [ngFormControl]="myForm.controls['email']"
                    #mail="ngForm">
                    <span class="validation-error" *ngIf="!mail.valid">Not Valid</span>
            </div> 
               <div class="form-group form-group-sm">
                    <label for="password" class="col-sm-2 control-label">Password</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="password"
                    [ngFormControl]="myForm.controls['password']"
                    #password="ngForm">
                    <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
               </div>
               <div class="form-group form-group-sm">
                    <label for="confirm-password" class="col-sm-2 control-label">Confirm</label>
                  <input 
                    type="text" 
                    class="form-control"
                    id="confirm-password"
                    [ngFormControl]="myForm.controls['confirmPassword']"
                    #confirmPassword="ngForm">
                    <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
                <div class="form-group">
                  <button 
                    type="submit" 
                    class="btn btn primary">Submit</button> 
                </div>
            </div><!-- /.row -->
            </form>
            <h2>You submitted</h2>
            <div>Mail: {{user.email}}</div>
            <div>Password: {{user.password}}</div>
        </div>
    `
})

export class TemplateDrivenFormComponent implements OnInit{
    myForm: ControlGroup;
    user = {email: '', password: ''};

    constructor(private _formBuilder: FormBuilder) {}

    onSubmit(form){
        this.user = this.myForm.value;
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword': ['', Validators.required]
        });
    }
}

function hasNumbers(control: Control): {[s: string]: boolean} {
    if(!control.value.match('\\d+'))
    {
        return {noNumbers: true}
    }}