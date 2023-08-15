import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { SizeComponent } from './components/size/size.component';
import { GenderComponent } from './components/gender/gender.component';
import { SharedComponent } from './components/shared/shared.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    SizeComponent,
    GenderComponent,
    SharedComponent,
    FilterComponent,
    ProductDetailComponent,
    VatAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
