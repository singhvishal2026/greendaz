import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  // { path: 'home', component: MainComponent },  
]

@NgModule({
  declarations: [MainComponent, CarouselComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})

export class HomeModule {
  
 }