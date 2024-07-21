import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product'; // Pfad anpassen

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  product: Product | undefined;
  imagePath: string | undefined;

  isLoading: boolean = true; // Flag to track loading state

  private readonly placeholderImagePath = 'assets/placeholder_image.png';
  private readonly imagesPath = 'assets/images/';
  private readonly imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

  ngOnInit(): void {
    const idParam: string | null = this.route.snapshot.paramMap.get('id');

   
    if (idParam) {
      this.productService.getProductsByHilfsmittelnummer(idParam)
        .subscribe({
          next: (data) => {
            if (Array.isArray(data)) {
              this.product = data[0]; // Use the first element if an array is returned
            } else {
              this.product = data;
            }
            console.log('Product selected:', this.product); // Überprüfen Sie hier die Struktur der Daten

            this.isLoading = false; // Data loaded, set loading to false
          },
          error: (error) => {
            console.error('Error fetching product:', error);
            this.isLoading = false; // Even if there's an error, stop the loading indicator
            // Handle error appropriately here
          }
        });
    } else {
      console.error('No id parameter provided');
      this.isLoading = false; // Stop the loading indicator if no id is provided
      // Handle the case where id is null
    }
  }

  private findImagePath(productName: string): string | undefined {
    for (const ext of this.imageExtensions) {
      const imageUrl = `${this.imagesPath}${productName}${ext}`;
      if (this.imageExists(imageUrl)) {
        return imageUrl;
      }
    }
    return this.placeholderImagePath;
  }

  private imageExists(imageUrl: string): boolean {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', imageUrl, false);
    xhr.send();
    return xhr.status !== 404;
  }

  
  addToCart() {
    console.log('Item added to cart!');
    // TBD: Implement your add to cart logic here
  }

  selectProduct(): void {
    if (this.product) {
      console.log('Product selected:', this.product);
      this.router.navigate(['/cart'], { queryParams: { name: this.product.Name, imagePath: this.findImagePath(this.product.Name) } });
    }
    // TBD: Add your logic for selecting the product here
  }

  //Page navigation 
  goBack(): void {
    window.history.back();
  }

  

}
