import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit {

  public eventCards = [
    {
      title: 'Мастер-класс',
      description: 'Прототип нового сервиса - это как глас грядущего поколения',
      imageUrl: '/assets/images/event-picture.png'
    },
    {
      title: 'Дайджест',
      description: 'Высококачественный прототип будущего проекта связывает нас',
      imageUrl: '/assets/images/event-picture.png'
    },
    {
      title: 'Встреча',
      description: 'Британские ученые заявили, что прототип - не панацея',
      imageUrl: '/assets/images/event-picture.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
