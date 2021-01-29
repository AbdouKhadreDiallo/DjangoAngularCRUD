import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import { RoleGuardService } from './service/auth/role/role-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], 
  data: { 
    expectedRole: 'admin'
  } },
  { path: 'teacher', component: TeacherComponent, canActivate: [RoleGuardService], data : {expectedRole: 'teacher'}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
