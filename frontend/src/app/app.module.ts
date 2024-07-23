/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductSuggestionsComponent } from './product-suggestions/product-suggestions.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductCardComponent,
    ProductSuggestionsComponent,
    QuestionaireComponent,
    PrescriptionComponent,
    MeasurementsComponent,
    SelectedProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule, 
    FormsModule, 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
