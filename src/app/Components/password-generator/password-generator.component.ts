import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  passwordForm = this.fb.group({
    length: [8, [Validators.required, Validators.min(4), Validators.max(32)]]
  });
  password: string = '';

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
  }
  generatePassword(): void {
    if (this.passwordForm.valid) {
      const length = this.passwordForm.get('length')?.value || 8;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
      this.password = Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      ).join('');
    }
  }
}
