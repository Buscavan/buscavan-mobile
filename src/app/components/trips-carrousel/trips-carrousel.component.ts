import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Trip } from 'src/app/interfaces/trip';
import { register } from 'swiper/element/bundle';
import { ModalController } from '@ionic/angular';
import { TripModalComponent } from '../trip-modal/trip-modal.component';
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');
register();

@Component({
  selector: 'app-trips-carrousel',
  templateUrl: './trips-carrousel.component.html',
  styleUrls: ['./trips-carrousel.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ]
})
export class TripsCarrouselComponent {

  public trips: Trip[] = [
    {
      name: 'UNISAGRADO',
      price: 1298.99,
      location: 'UNISAGRADO',
      image: 'https://images.vexels.com/media/users/3/128645/isolated/preview/d96ab2658b0f1366bfc2d7074b49730b-van-retro-lustrosa.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
      tripImages: [
        'https://www.socialbauru.com.br/wp-content/uploads/2021/03/unisagrado-bauru-cursos-2021-1240x540.jpg',
        'https://s2-redeglobo.glbimg.com/CTtdCaP34NHPq8ykWMtvgFBC5eM=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/V/1/HlUlMORdKy10WrukLCmg/unisagrado-bauru-sp.jpg',
        'https://cdn.2rscms.com.br/uploads/2008/album/10814/photo_5f732bcfd35f1.jpg',
        'https://cdn.2rscms.com.br/uploads/2008/album/10927/photo_5fb67339cb5b2.jpg',
        'https://cdn.2rscms.com.br/uploads/2008/album/10814/photo_5f732c14c9c6b.jpg',
        'https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/03/13/unisagrado-22543798.jpg',
        'https://marcelomelloweb.net/usc.gif',
        'https://cdn.2rscms.com.br/uploads/2008/album/1176/photo_62cf1739ac492.jpg',
        'https://cdn.2rscms.com.br/uploads/2008/album/10927/photo_5fb6726d01198.jpg',
        'https://s2-redeglobo.glbimg.com/ipuqTfcAex3OXwXDiPPF7houcb4=/0x0:4032x3024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2023/1/8/SupqpERGOEUOhu9QcFSg/img-4072.jpg',
        'https://www.socialbauru.com.br/wp-content/uploads/2023/01/unisagrado-pos-graduacao-1240x540.jpg',
      ],
    },
    {
      name: 'Etec City of Books',
      price: 106.99,
      location: 'Etec City of Books',
      image: 'https://pics.clipartpng.com/midle/Passenger_Van_PNG_Clip_Art-2981.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
      tripImages: [
        'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-lencois-paulista.jpg',
        'https://gaveconstrucoes.com.br/imagens/produtos/14_6_1.jpg',
      ],
    },
    {
      name: 'Facilpa',
      price: 15.99,
      location: 'Facilpa',
      image: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/f1c2cdb052ded21559fd0deb740b7ea2.png',
      capacity: 1,
      driver: 'teste',
      date: '09/09/2004',
      tripImages: [
        'https://cdn.jornaloeco.com.br/wp-content/uploads/2019/05/10669.jpg',
      ],
    },
  ];

  @Input()
  public city: String = 'Lençóis Paulista';

  @Input()
  public state: String = 'SP';

  constructor(private modalController: ModalController) { }

  async openModal(trip: Trip) {
    const modal = await this.modalController.create({
      component: TripModalComponent,
      componentProps: {
        data: trip,
      }
    });
    modal.present();

  }

}
