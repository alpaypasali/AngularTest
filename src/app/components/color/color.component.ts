import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  categories:Category[]=[];
  currentCategory:Category;
  brands:Brand[]=[];
  currentBrand:Brand;
  colors: Color[] = [];
  currentColor:Color;
  dataLoaded=false;

  constructor(private colorService:ColorService,
    private categoryService:CategoryService,
    private brandService:BrandService,
    ) {}
  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getCategory();
  }

  getCategory(){

    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });

  }
  getBrands(){


    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getColors(){


    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentCategory(category:Category){

    this.currentCategory=category;

  }
  setCurrentBrand(brand:Brand){
this.currentBrand=brand;

  }
  setCurrentColor(color:Color){

    this.currentColor=color;

  }

}