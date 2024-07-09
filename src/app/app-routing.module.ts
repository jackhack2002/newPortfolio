import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'skills', component:SkillsComponent},
  {path:'education', component:EducationComponent},
  {path:"projects", component:ProjectComponent},
  {path:'contact', component:ContactComponent},
  {path:'',redirectTo:'profile',pathMatch:'full'},
  {path:'**',redirectTo:'profile',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
