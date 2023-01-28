import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageMainComponent} from "./page-main/page-main.component";
import {PageProductFormComponent} from "./page-product-form/page-product-form.component";
import {PageProductListComponent} from "./page-product-list/page-product-list.component";


const routes: Routes = [
  {path: "",redirectTo: "home", pathMatch: "full"},
  {path: "main", component: PageMainComponent},
  {path: "product_from", component: PageProductFormComponent},
  {path: "product_list", component: PageProductListComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
