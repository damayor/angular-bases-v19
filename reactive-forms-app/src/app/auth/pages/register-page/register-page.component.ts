import { FormUtils } from './../../../utils/form-utils';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule] ,
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {



  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  registerForm : FormGroup = this.fb.group({
    fullname:['', [Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)], [FormUtils.checkingServerResponse]],
    username: ['', [Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern), FormUtils.notStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required]

  },{
    validators: [FormUtils.isFieldOneQualFieldTwo('password', 'password2')]
    }
  );

  onSubmit() {
    console.log(this.registerForm.value)
    this.registerForm.markAllAsTouched()
  }
}
