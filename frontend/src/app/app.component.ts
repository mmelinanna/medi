/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styles: [],
})
export class AppComponent {
  title = 'Customer-Support-Tool';

  currentPage: string | undefined;
  currentStep: number | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkCurrentPage();
    });

    this.checkCurrentPage();
  }

  checkCurrentPage() {
    const url = this.router.url.split('/');
    this.currentPage = url[1];
    this.currentStep = url.length > 2 ? parseInt(url[2], 10) : undefined;
  }

  showStepper(): boolean {
    if (this.currentPage === 'productsuggestions' || this.currentPage === 'productdetails') {
      return false;
    }
    if (this.currentPage === 'prescription' && (this.currentStep === 4 || this.currentStep === 5)) {
      return true;
    }
    if (this.currentPage === 'measurements') {
      return true;
    }
    if (this.currentPage === 'questionaire' && this.currentStep !== undefined && this.currentStep >= 1 && this.currentStep <= 5) {
      return true;
    }
    return false;
  }

  goToStep(page: string, step?: number): void {
    if (step !== undefined) {
      this.router.navigate([`${page}/${step}`]);
    } else {
      this.router.navigate([page]);
    }
  }
}
