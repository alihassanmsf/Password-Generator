import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss']
})
export class PasswordStrengthCheckerComponent implements OnInit {

  strengthForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(4)]]
  });
  strength: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  checkStrength(): void {
    if (this.strengthForm.valid) {
      const password = this.strengthForm.get('password')?.value || '';
      const lengthCriteria = password.length >= 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+]/.test(password);

      const strengthScore = [lengthCriteria, hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length;

      if (strengthScore === 5) {
        this.strength = 'Strong';
      } else if (strengthScore >= 3) {
        this.strength = 'Moderate';
      } else {
        this.strength = 'Weak';
      }
    }
  }

}
