import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Trip } from 'src/app/interfaces/trip';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trip-modal',
  templateUrl: './trip-modal.component.html',
  styleUrls: ['./trip-modal.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
})
export class TripModalComponent {

  @Input()
  public data!: Trip;

  constructor(private modalController: ModalController) { }

  exit() {
    return this.modalController.dismiss(null, 'exit');
  }

}
