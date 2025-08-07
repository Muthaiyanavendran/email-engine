import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightPanel } from './right-panel/right-panel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RightPanel],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('email-engine');
}


