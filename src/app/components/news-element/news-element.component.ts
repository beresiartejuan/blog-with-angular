import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent {

  @Input() title: string = "Titulo de la noticia";
  @Input() date: string = "XX-XX-XXXX";
  @Input() image: string = "";
  @Input() content: string = "Cuerpo de la noticia";

}
