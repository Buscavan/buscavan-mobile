import { Component } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
})
export class CreditsPage {
  public tagsPreset = {
    mobile: { text: 'mobile', background: '#3880FF', color: '#ffffff' },
    frontend: { text: 'frontend', background: '#2A2B2A', color: '#ffffff' },
    backend: { text: 'backend', background: '#6DB33F', color: '#ffffff' },
    design: { text: 'design', background: '#F24E1E', color: '#ffffff' },
  };

  constructor() {}
}
