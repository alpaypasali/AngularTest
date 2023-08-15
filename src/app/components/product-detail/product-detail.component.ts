import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductImage } from 'src/app/models/productImage';
import { ProductService } from 'src/app/services/product.service';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  products: ProductDetail[]=[];
  productImagePaths:string[]=[];
  productDetails:ProductDetail;
  productImages:ProductImage[]=[];
  dataLoaded = false;
  imageUrl:string="https://localhost:44374/Uploads/Images/";
  state:boolean=false;
  isFirstRender:boolean=true;
  sizenumber:string;
  constructor(private productService: ProductService, 
    private productImageService:ProductImageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["productId"]) {
        this.getProductDetailByProductId(params["productId"]);
      }
    })
  }

  getProductDetailByProductId(productId: number) {
    this.productService.getProductById(productId).subscribe(response => {
      this.products = response.data;
      this.productDetails = response.data[0];
      this.productImagePaths = this.productDetails.imagePath;
     this.sizenumber=this.productDetails.sizes[0];
      this.dataLoaded = true;
    })
}

}


