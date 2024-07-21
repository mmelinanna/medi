/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionsComponent } from './product-suggestions/product-suggestions.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { MeasurementsComponent } from './measurements/measurements.component';
//import { StepperComponent } from './stepper/stepper.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'prescription/1' },
  { path: 'productsuggestions', component: ProductSuggestionsComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'questionaire/:step', component: QuestionaireComponent },
  { path: 'prescription/:step', component: PrescriptionComponent},
  { path: 'measurements', component: MeasurementsComponent},
  {path: 'cart', component: SelectedProductComponent},
  //{ path: 'stepper', component: StepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
