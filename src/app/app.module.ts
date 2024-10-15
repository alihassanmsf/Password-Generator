import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './Components/password-generator/password-generator.component';
import { PasswordGeneratorModule } from './Components/password-generator/password-generator.module';
import { PasswordStrengthCheckerComponent } from './Components/password-strength-checker/password-strength-checker.component';
import { PasswordStrengthCheckerModule } from './Components/password-strength-checker/password-strength-checker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordGeneratorModule,
    PasswordStrengthCheckerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
