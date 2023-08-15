import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { BrandComponent } from './components/brand/brand.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
//buraya yazdıgımız rootlar ana ekranda ne gösterceğimizi belirler
const routes: Routes = [

{path:"",pathMatch:"full",component:ProductComponent},
{path:"products",component:ProductComponent},
{path:"products/gender/:genderId",component:ProductComponent},
{path:"products/brand/:brandId",component:ProductComponent},
{path:"products/color/:colorId",component:ProductComponent},
{path:"products/category/:categoryId",component:ProductComponent},
{ path: 'products/details/:productId', component: ProductDetailComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
