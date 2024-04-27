import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search-trips',
  templateUrl: './search-trips.component.html',
  styleUrls: ['./search-trips.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SearchTripsComponent {

  @Input()
  text: String = 'PRÓXIMA PARADA?';

  @Input()
  placeholder: String = 'Ex: praça da uva...';

  constructor() { }

}
