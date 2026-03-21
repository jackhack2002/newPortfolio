import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  projects = [
    {
      id: 1,
      title: 'Business Portfolio for Airways Placement Services',
      description: 'Professional business portfolio for a startup company featuring Home, Job Description, About Us sections, user-friendly contact form, and Google Forms integration.',
      image: 'aps_project.jpg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Google Forms'],
      links: {
        github: 'https://github.com/jackhack2002/airwayplacementservices.git',
        live: 'https://airwaysplacementservices.netlify.app/'
      }
    },
    {
      id: 2,
      title: "J's Cart: E-commerce Website",
      description: 'Full-featured e-commerce platform with product catalog, shopping cart management, secure payment processing, and fully responsive design.',
      image: 'jscart.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      links: {
        github: 'https://github.com/jackhack2002/J-s-Cart.git',
        live: 'https://jackhack2002.github.io/JsCarts/'
      }
    },
    {
      id: 3,
      title: 'Portfolio Using HTML and TailwindCSS',
      description: 'Clean and responsive portfolio website built with utility-first CSS framework, featuring smooth animations and modern design principles.',
      image: 'port-folio-logo.png',
      tags: ['HTML5', 'TailwindCSS', 'JavaScript', 'Responsive Design'],
      links: {
        live: 'https://port-folio-tailwind.netlify.app/'
      }
    },
    {
      id: 4,
      title: 'Digital Ambulance Service App',
      description: 'Mobile-responsive application for real-time ambulance service requests, connecting users with nearby emergency service providers.',
      image: 'projectlogo1.jpg',
      tags: ['Flutter', 'Firebase', 'Google Maps API', 'Real-time Database'],
      links: {
        github: 'https://github.com/jackhack2002/Emergency-Ambulance-Service-.git'
      }
    }
  ];
}
