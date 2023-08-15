import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDetail } from 'src/app/models/productDetail';
import { ProductImage } from 'src/app/models/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 
  productImage: ProductImage[]=[];
  productDetails: ProductDetail[] = [];
  dataLoaded = false;
  imagebaseUrl :string="/pasali/PasaliAPI/PasaliAPI/WebAPI/wwwroot/Uploads/Images/";
  imageUrl:string="https://localhost:44383/Uploads/Images/"
  imageOfPath: string;
  currentProduct:ProductDetail;
  filterText:"";
 


  constructor(
    private productService: ProductService,
    private productImageService:ProductImageService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["genderId"]) {
        this.getProductsByGender(params["genderId"]);
      } else if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]);
      } else {
        this.getProductDetails();
      }
    });
  }


  getProductDetails() {
    this.productService.getProductDetails().subscribe((response) => {
      this.productDetails = response.data;
         this.dataLoaded = true;
    
    });
  }

  getProductsByGender(genderId:number) {
    this.productService.getProductsByGender(genderId).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductByCategoryId(categoryId).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getProductsByBrand(brandId:number) {
    this.productService.getProductByBrandId(brandId).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByColor(colorId:number) {
    this.productService.getProductByColorId(colorId).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductImagesById(productId: number) {
    this.productImageService.getImagesByProductId(productId).subscribe((response) => {
      this.productImage = response.data;
    });
  }

  
  image(carId: number) {
    this.productImageService.getImagesByProductId(carId).subscribe(response => {
      const imagePath = response.data[0].imagePath
      this.imageOfPath = this.imageUrl + imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
  }

  setCurrentProduct(product: ProductDetail) {
    this.currentProduct = product;
}
}
