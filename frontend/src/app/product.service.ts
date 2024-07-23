import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Product } from './models/product'; // Pfad anpassen

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private dataService: DataService, private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductsByHilfsmittelnummer(hilfsmittelnummer: string): Observable<Product> {
    const url = `${this.apiUrl}/search?hilfsmittelnummer=${encodeURIComponent(hilfsmittelnummer)}`;
    return this.http.get<Product>(url);
  }

  // getProductsByHilfsmittelnummer(hilfsmittelnummer: string, type: string): Observable<any[]> {
  //   const url = `${this.apiUrl}/search?hilfsmittelnummer=${encodeURIComponent(hilfsmittelnummer)}&type=${encodeURIComponent(type)}`;
  //   return this.http.get<any[]>(url);
  // }

  getProductsByCriteria(): Observable<Product[]> {
    const allData = this.dataService.getAllData();
    //console.log(allData)
    //console.log(allData.questionaireData.activity, allData.questionaireData.tissueType, allData.prescriptionData.personalData.aidNumber)
    const params = new HttpParams()
     // .set('activity', allData.questionaireData.activity) //Array
      .set('allergies', allData.questionaireData.allergies)
      .set('tissueType', allData.questionaireData.tissueType)
      .set('aidNumber', allData.prescriptionData.personalData.aidNumber)
     // .set('leg', allData.questionaireData.leg) //Array
      .set('skin', allData.questionaireData.skin);

      const url = `${this.apiUrl}/search1`;
      return this.http.get<Product[]>(url, { params });
  }
}
