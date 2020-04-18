import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//import các trang
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';

//cấu hình chuyển trang

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }