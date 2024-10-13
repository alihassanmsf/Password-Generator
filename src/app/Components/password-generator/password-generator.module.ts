import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorComponent } from './password-generator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PasswordGeneratorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PasswordGeneratorModule { }
