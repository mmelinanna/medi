import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-suggestions',
  templateUrl: './product-suggestions.component.html',
  styleUrls: ['./product-suggestions.component.css']
})
export class ProductSuggestionsComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 4;

  filters = {
    brand: 'alle',
    material: 'alle',
    color: 'alle',
    premium: 'kein-premium'
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    //this.loadProducts();
    // const hilfsmittelnummer = '17.06.01.0001';
    // const type = 'AD';

    
    // this.productService.getProductsByHilfsmittelnummer(hilfsmittelnummer)
    //   .subscribe(data => {
    //     console.log(data);
    //     this.filteredProducts = this.products;
    //   });
    this.sendData();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        this.applyFilters(); // Apply filters after loading products
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  sendData() {
    this.productService.getProductsByCriteria().subscribe(
      data => {
        this.products = data;
        console.log(this.products)
        this.applyFilters(); // Apply filters after loading products
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  //Enable different filters for productview 
  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      return (this.filters.brand === 'alle' || product.Marke === this.filters.brand) &&
        (this.filters.material === 'alle' || product.Material.split(', ').includes(this.filters.material)) &&
        (this.filters.color === 'alle' || product.Farbe.split(', ').includes(this.filters.color));
        // (this.filters.premium === 'alle' || (this.filters.premium === 'kein-premium' && !product.premium) || (this.filters.premium === 'premium' && product.premium));
    });
    this.currentPage = 1; // Reset to the first page after applying filters
  }

  //manage max amount of products on overview page - max. 4 products
  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  get currentProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  //page navigation 
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  //page navigation 
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  //Get to product detail view 
  viewProductDetails(product: any) {
    this.router.navigate(['/product', product.Hilfsmittelnummer]);
  }
}
