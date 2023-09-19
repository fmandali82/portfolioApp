import { Component } from '@angular/core';
import * as jsonData from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'portfolioApp';

  data: any = jsonData;
}
