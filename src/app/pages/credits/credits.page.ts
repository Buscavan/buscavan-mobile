import { Component } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage {
  public tagsPreset = {
    mobile: { text: 'mobile', background: '#81A4CD', color: '#ffffff' },
    frontend: { text: 'frontend', background: '#2A2B2A', color: '#ffffff' },
    backend: { text: 'backend', background: '#97DB4F', color: '#000000' },
    design: { text: 'design', background: '#D295BF', color: '#ffffff' },
  };

  constructor() {}
}
