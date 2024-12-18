import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { SkillsComponent } from "./skills/skills.component";
import { EducationComponent } from "./education/education.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectComponent } from "./project/project.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, SkillsComponent, EducationComponent, ProfileComponent, ProjectComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
