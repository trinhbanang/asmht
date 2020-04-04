import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, SlideComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
