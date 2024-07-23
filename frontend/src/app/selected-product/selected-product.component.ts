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
    //console.log('Received product:', { name: this.productName, imagePath: this.imagePath });
  });}

  removeProduct() {
    // Display the remove confirmation prompt
    this.showRemoveConfirmation = true;
  }
  
  confirmRemove() {
    // Logic to confirm the removal of the product
    this.showRemoveConfirmation = false;
    // Additional logic, e.g., removing the product from the cart
  }
  
  checkStock() {
    // TBD:Logic to check the stock availability of the product
  }
  
  orderNow() {
    // TBD: Logic to place an order for the product
  }
  
  //page navigation
  goBack() {
    this.router.navigate(['/previous-page']);
  }

}
