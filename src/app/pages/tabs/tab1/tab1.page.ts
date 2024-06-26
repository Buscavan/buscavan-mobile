import { User } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Trip } from 'src/app/interfaces/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private user: User | undefined;

  trips: Trip[] = [
    {
      name: 'Santos',
      price: 3000,
      location: 'Santos',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/73/At_Santos%2C_Brazil_2018_480_%28cropped%29.jpg',
      tripImages: ['string'],
      capacity: 16,
      driver: 'string',
      goingDate: '12/05/2025',
      returnDate: '15/05/2025',
      vehicleName: 'Boxer',
      description: 'Uma viagem para Santos',
    },
    {
      name: 'Rio de Janeiro',
      price: 1500,
      location: 'Rio de Janeiro',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cidade_de_luz_e_cor.jpg/900px-Cidade_de_luz_e_cor.jpg',
      tripImages: ['string'],
      capacity: 12,
      driver: 'string',
      goingDate: '07/07/2024',
      returnDate: '15/05/2025',
      vehicleName: 'Boxer',
      description: 'Deslizando no pão de açúcar',
    },
    {
      name: 'Lençóis Paulista',
      price: 499.99,
      location: 'Lençóis Paulista',
      image:
        'https://fmintegracao.com.br/wp-content/uploads/elementor/thumbs/IMG-20220428-WA0003-po50vtq4hxgik8b6ai0eqt7p938jcz83gffoycak5k.jpg',
      tripImages: ['string'],
      capacity: 8,
      driver: 'string',
      goingDate: '17/07/2025',
      returnDate: '15/05/2025',
      vehicleName: 'Boxer',
      description: 'Literalmente a cidade do livro',
    },
    {
      name: 'Disney',
      price: 7000,
      location: 'Disney',
      image:
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/orlando-eua-disney-capa9.jpg',
      tripImages: ['string'],
      capacity: 80,
      driver: 'string',
      goingDate: '12/05/2025',
      returnDate: '15/05/2025',
      vehicleName: 'Boxer',
      description: 'Tá na Disney?',
    },
  ];

  constructor(private authService: AuthService, private router: Router) { }

  public navigateByUrl(url: string, trip: Trip) {
    this.router.navigate([url], { state: { trip } });
  }

  async ngOnInit() {
    this.user = await this.authService.getUser();
  }
}
