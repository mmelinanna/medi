import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  showRemoveConfirmation = false;
  productName: string | null = null;
  imagePath: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){  this.route.queryParams.subscribe(params => {
    this.productName = params['name'];
    this.imagePath = params['imagePath'];
    console.log('Received product:', { name: this.productName, imagePath: this.imagePath });
  });}

  removeProduct() {
    this.showRemoveConfirmation = true;
  }

  confirmRemove() {
    // Logik zum Bestätigen des Entfernens
    this.showRemoveConfirmation = false;
    // Weitere Logik, z.B. Entfernen des Produkts aus dem Warenkorb
  }

  checkStock() {
    // Logik zum Prüfen des Lagerstands
  }

  orderNow() {
    // Logik zum Bestellen des Produkts
  }

  goBack() {
    this.router.navigate(['/previous-page']);
  }

}
