import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentStep: number = 1;

  //Page navigation 
  nextPage() {
    this.currentStep++;
  }

  //Page navigation 
  previousPage() {
    this.currentStep--;
  }

   // TBD (not scope of project): Handle import logic here
  onImport() {
    //console.log('Import clicked');
  }

  // TBD (not scope of project): Handle manual entry logic here
  onManualEntry() {
    //console.log('Manual entry clicked');
  }

}
