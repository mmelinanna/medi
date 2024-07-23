import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {
  
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() { this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.checkCurrentStep();
  });

  this.checkCurrentStep();}

  currentStep: number | undefined;

  //Placeholder for questionaire data 
  formData = {
    occasionAid: '', //Anlass Hilfsmittel
    allergies: '', //Allergien
    complaintDuration: { //Dauer der Beschwerden
      lessThan1Month: false,
      from1To3Months: false,
      from3To6Months: false,
      moreThan6Months: false
    },
    productExperience: false, //Produkterfahrung
    manufacturer: '', //Hersteller
    bloodPressureSystolic: '', //blutdruck_systolisch
    bloodPressureDiastolic: '', //blutdruck_diastolisch
    skin: '', //Haut
    careProducts: { //Pflegeprodukt
      cortisone: false,
      urea: false,
      moisturizer: false
    },
    tissueType: '', //Gewebeart
    leg: {
      openWounds: false,
      bruises: false,
      varicoseVeins: false
    },
    activity: {
      very: false,
      moderately: false,
      hardly: false
    },
    materialPreferences: '',
    comments: {
      medical: '',
      activity: '',
      needs: ''
    }
  };

  editMode = {
    systolisch: false,
    diastolisch: false, 
    comments_medical: false,
    comments_activity: false,
    comments_needs: false,
  };

  // page navigation 
  checkCurrentStep() {
    const urlSegments = this.activatedRoute.snapshot.url;
    this.currentStep = urlSegments.length > 0 ? parseInt(urlSegments[urlSegments.length - 1].path, 10) : undefined;
  }
  // page navigation 
  nextPage(): void {
    if (this.currentStep !== undefined && this.currentStep < 3) {
      this.router.navigate([`/questionaire/${this.currentStep + 1}`]);
    }
  }
  // page navigation 
  previousPage(): void {
    if (this.currentStep !== undefined && this.currentStep > 1) {
      this.router.navigate([`/questionaire/${this.currentStep - 1}`]);
    }
  }

  onProductExperienceChange(value: string) {
    if (value === 'ja') {
      this.formData.productExperience = true;
    } else {
      this.formData.productExperience = false;
      this.formData.manufacturer = '';
    }
  }

  setProductExperience(value: boolean) {
    this.formData.productExperience = value;
    if (!value) {
      this.formData.manufacturer = '';
    }
  }

  // Enable edit mode of different fields
  toggleEditMode(field: keyof typeof this.editMode) {
    this.editMode[field] = !this.editMode[field];
  }

  // Send data to data service
  submitForm() {
    console.log('Daten aus dem Beratungsbogen:', this.formData);
    // Hier können Sie die Formulardaten an einen Server senden oder anderweitig verarbeiten
    this.dataService.setQuestionaireData(this.formData);
  }
}
