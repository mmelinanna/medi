import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   //Collect data from questionaire and prescription scan

  private prescriptionData: {
    medicalData: any;
    personalData: any;
  } = {
      medicalData: null,
      personalData: null
    };

  private questionaireData: any = null;

  constructor() { }


  setPrescriptionData(medicalData: any, personalData: any) {
    this.prescriptionData.medicalData = medicalData,
      this.prescriptionData.personalData = personalData
  }

  getPrescriptionData(){
    return this.prescriptionData;
  }

  setQuestionaireData(formData: any){
    this.questionaireData = formData
  }

  getQuestionaireData(){
    return this.questionaireData;
  }


  //Consolidate data
  getAllData(){
    console.log("All Data", this.prescriptionData, this.questionaireData);
    return {
      prescriptionData: this.prescriptionData,
      questionaireData: this.questionaireData
    }
  }
}
