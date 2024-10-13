import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthCheckerComponent } from './password-strength-checker.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PasswordStrengthCheckerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PasswordStrengthCheckerModule { }
