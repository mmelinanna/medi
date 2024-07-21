import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep$ = this.currentStepSubject.asObservable();

  private stepDataSubject = new BehaviorSubject<any>({});
  stepData$ = this.stepDataSubject.asObservable();

  constructor() {}

  setStep(step: number) {
    this.currentStepSubject.next(step);
  }

  setStepData(data: any) {
    this.stepDataSubject.next({ ...this.stepDataSubject.value, ...data });
  }

  getStepData() {
    return this.stepDataSubject.value;
  }

  submitForm() {
    // Implementieren Sie die Logik zum Absenden des Formulars
    console.log('Gesammelte Formulardaten:', this.getStepData());
  }
}
