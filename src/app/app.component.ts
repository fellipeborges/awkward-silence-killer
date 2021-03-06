import { Component, OnInit } from '@angular/core';
import { LocalizationService } from './localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public localizationService: LocalizationService) {}

  ngOnInit(): void {
    this.setLocalizationBasedOnBrowser();
  }

  setLocalizationBasedOnBrowser(): void {
    this.localizationService.setLocalization(navigator.language);
  }
}
