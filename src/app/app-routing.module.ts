import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './Components/password-generator/password-generator.component';
import { PasswordStrengthCheckerComponent } from './Components/password-strength-checker/password-strength-checker.component';

const routes: Routes = [
  { path: 'generate', component: PasswordGeneratorComponent },
  { path: 'check', component: PasswordStrengthCheckerComponent },
  { path: '', redirectTo: '/generate', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
