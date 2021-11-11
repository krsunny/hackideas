import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
  ]
})
export class LayoutModule { }
