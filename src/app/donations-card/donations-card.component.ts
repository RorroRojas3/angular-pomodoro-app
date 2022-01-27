import { Component, OnInit } from '@angular/core';
// <a href="https://www.freepik.com/vectors/icon">Icon vector created by rawpixel.com - www.freepik.com</a>
@Component({
  selector: 'app-donations-card',
  templateUrl: './donations-card.component.html',
  styleUrls: ['./donations-card.component.css'],
})
export class DonationsCardComponent implements OnInit {
  constructor() {}

  image: string = '../images/icons/6156.jpg';

  ngOnInit(): void {}
}
