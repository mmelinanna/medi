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
  imagePath: string | undefined;

  private readonly placeholderImagePath = 'assets/placeholder_image.png';
  private readonly imagesPath = 'assets/images/';
  private readonly imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

  ngOnInit(): void {
    this.imagePath = this.findImagePath(this.product.Name);
  }

  private findImagePath(productName: string): string {
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

}
