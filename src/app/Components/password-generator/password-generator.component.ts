import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  passwordForm = this.fb.group({
    length: [8, [Validators.required, Validators.min(4), Validators.max(32)]],
    includeUppercase: [true],
    includeLowercase: [true],
    includeNumbers: [true],
    includeSpecial: [true]
  });
  
  password: string = '';
  copyMessage: string = ''; // Message to show after copying

  constructor(private fb: FormBuilder,private clipboard: Clipboard) {}


  ngOnInit(): void {
  }
  generatePassword(): void {
    if (this.passwordForm.valid) {
      const length = this.passwordForm.get('length')?.value || 8;
      const includeUppercase = this.passwordForm.get('includeUppercase')?.value;
      const includeLowercase = this.passwordForm.get('includeLowercase')?.value;
      const includeNumbers = this.passwordForm.get('includeNumbers')?.value;
      const includeSpecial = this.passwordForm.get('includeSpecial')?.value;
  
      let characters = '';
      if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
      if (includeNumbers) characters += '0123456789';
      if (includeSpecial) characters += '!@#$%^&*()_+';
  
      if (!characters) {
        this.password = 'Please select at least one character type';
        return;
      }
  
      // Function to generate a password and ensure all characters are unique
      const generateUniquePassword = () => {
        let generatedPassword = '';
        let attempts = 0;
        const maxAttempts = 10; // Limit attempts to avoid infinite loops
  
        while (attempts < maxAttempts) {
          generatedPassword = Array.from({ length }, () =>
            characters.charAt(Math.floor(Math.random() * characters.length))
          ).join('');
  
          // Check for unique characters
          const uniqueChars = new Set(generatedPassword);
          if (uniqueChars.size === generatedPassword.length) {
            return generatedPassword; // Password is unique
          }
          attempts++;
        }
        return 'Unable to generate a unique password, try with different settings';
      };
  
      this.password = generateUniquePassword();
    }
  }

  copyPassword(): void {
    if (this.password) {
      this.clipboard.copy(this.password);
      this.copyMessage = 'Password copied!';
      setTimeout(() => this.copyMessage = '', 2000); // Clear message after 2 seconds
    }
  }
  
  
}
