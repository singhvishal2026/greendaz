import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
  //  NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }