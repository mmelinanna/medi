import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product!: Product;
  imagePath: string = '';

  private readonly placeholderImagePath = 'assets/placeholder_image.png';
  private readonly imagesPath = 'assets/images/';
  private readonly imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

  async ngOnInit(): Promise<void> {
    this.imagePath = await this.findImagePath(this.product.Name);
  }

  // Method to find the image path for a given product name
  private async findImagePath(productName: string): Promise<string> {
    for (const ext of this.imageExtensions) {
      const imageUrl = `${this.imagesPath}${productName}${ext}`;
      //console.log(`Checking image URL: ${imageUrl}`);
      const exists = await this.imageExists(imageUrl);
      //console.log(`Image ${exists ? 'exists' : 'does not exist'}: ${imageUrl}`);
      if (exists) {
        return imageUrl;
      }
    }
    //onsole.log(`Using placeholder image for product: ${productName}`);
    return this.placeholderImagePath;
  }
  
  // Method to check if an image exists at a given URL
  private async imageExists(imageUrl: string): Promise<boolean> {
    try {
      // Create a new image element
      const img = new Image();
      img.src = imageUrl;

      // Return a promise that resolves or rejects based on the image load
      return await new Promise((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    } catch (error) {
      return false;
    }
  }


}
