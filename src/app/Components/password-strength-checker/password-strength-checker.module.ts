import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthCheckerComponent } from './password-strength-checker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PasswordStrengthCheckerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class PasswordStrengthCheckerModule { }
