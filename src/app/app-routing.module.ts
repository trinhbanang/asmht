import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { from } from "rxjs";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductListComponent },
  { path: "product/manager", component: ProductManagerComponent },
  // { path: "product/add", component: AddProductComponent },
  // { path: "product/detail/:id", component: ProductDetailComponent },
  // { path: "product/edit/:id", component: ProductEditComponent},
  // { path: "about", component: AboutComponent },
  // { path: "services", component: ServicesComponent },
  // { path: "contact", component: ContactComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
