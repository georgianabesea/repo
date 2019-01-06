import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent }   from './components/login-form/login-form.component';
import { HomepageComponent }   from './components/homepage/homepage.component';
import { SignUpFormComponent }   from './components/sign-up-form/sign-up-form.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'login', component: LoginFormComponent },
	{ path: 'home', component: HomepageComponent },
	{ path: 'signUp', component: SignUpFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
