import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  currentStep: number | undefined;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkCurrentStep();
    });

    this.checkCurrentStep();
  }
 

  editMode = {
    comments: false
  };
  // Scan prescription not technically implemented, therefore we use here dummy data (hard coded)
  personalData = {
    name: 'Max Mustermann',
    insurance: 'Techniker Krankenkasse',
    insuranceNumber: 'A54894162534',
    doctor: 'Dr. Musterarzt',
    gender: 'male',
    street: 'Univeristätsstraße 30',
    postalcode: '95447',
    city: 'Bayreuth',
    dob: '1951-05-02',
    comments: ''
  };
  // Scan prescription not technically implemented, therefore we use here dummy data (hard coded)
  medicalData = {
    type: 'Hilfsmittel',
    aidNumber: '17.06.01.0',
    aidDescription: 'knielanger, Kompressionsstrumpf',
    aidDescription2: 'Paar, Kompressionsklasse 1',
    diagnosis: 'Varikosis primär'
  };

  checkCurrentStep() {
    this.route.paramMap.subscribe(params => {
      this.currentStep = parseInt(params.get('step')!, 10);
    });
  }

  nextStep(): void {
    if (this.currentStep !== undefined && this.currentStep < 5) {
      this.router.navigate([`/prescription/${this.currentStep + 1}`]);
    }
  }

  previousStep(): void {
    if (this.currentStep !== undefined && this.currentStep > 1) {
      this.router.navigate([`/prescription/${this.currentStep - 1}`]);
    }
  }


  //Enable edit mode, no edit mode 
  toggleEditMode(field: keyof typeof this.editMode) {
    this.editMode[field] = !this.editMode[field];
  }

  //Change gender if checkbox is clicked 
  updateGender(gender: string) {
    this.personalData.gender = gender;
  }

  // Send data to DataService
  submitForm() {
    console.log('Form data:', {
      personalData: this.personalData,
      medicalData: this.medicalData
    });
    this.dataService.setPrescriptionData(this.personalData, this.medicalData)
  }
}
