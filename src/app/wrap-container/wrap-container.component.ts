import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrap-container',
  templateUrl: './wrap-container.component.html',
  styleUrls: ['./wrap-container.component.css']
})
export class WrapContainerComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService){

  }
}
