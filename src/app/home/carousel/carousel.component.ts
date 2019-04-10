import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imageArray:object[]
  constructor() { }

  ngOnInit() {
    this.imageArray=[
      {
        path:'assets/img/carousel/slide1.jpg',
        heading:'Eat the way you have always desired',
        content:'Everyday we bring you 30+ new choices for your taste buds'
      },
      {
        path:'assets/img/carousel/slide2.jpg',
        heading:'Enjoy each bite of freshness',
        content:'Rest assured for they will reach you before hunger crawls'
      },
      {
        path:'assets/img/carousel/slide3.jpg',
        heading:'We pack your tiffins with lot of love and hygiene',
        content:'Food is packed in disposable and microwavable containers and from farm to fork we create a culture where food and nutrition is our prime concern'
      },
      {
        path:'assets/img/carousel/slide4.jpg',
        heading:'Maintaining your Work-Food-Life Balance',
        content:"Whether you're a busy executive, a fitness fanatic, a mom on the go or a savvy singleton seeking a healthier diet , GreenDaz is the solution"
      }
    ]
  }

}
