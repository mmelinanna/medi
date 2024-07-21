import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { StepperService } from '../stepper.service';
import { MatStepper } from '@angular/material/stepper';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  
  currentPage: string | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.urlAfterRedirects.split('/')[1];
      }
    });
  }

  goToStep(step: string) {
    this.router.navigate([step]);
  }
}

