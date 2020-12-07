import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  dogs = [
    {
      imageUrl: 'https://tinyurl.com/yyb53oeu',
      name: 'Golden Retriever',
    },
    {
      imageUrl: 'https://tinyurl.com/y2x5yxmq',
      name: 'Husky',
    },
    {
      imageUrl: 'https://tinyurl.com/y6svov4s',
      name: 'Pug',
    },
  ];

  trackByDogName = (index: number, dog: Dog) => {
    return dog.name;
  };
}
