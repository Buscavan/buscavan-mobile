import { RequestsService } from './../../../services/requests/requests.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-finished',
  templateUrl: './register-finished.page.html',
  styleUrls: ['./register-finished.page.scss'],
})
export class RegisterFinishedPage implements OnInit {
  private previousRegisterData!: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestsService: RequestsService,
    private toastController: ToastController,
    private zone: NgZone
  ) {}

  public navigateByUrl(url: string) {
    this.zone.run(() => this.router.navigate([url]));
  }

  async ngOnInit() {
    this.previousRegisterData = this.authService.getUserRegisteringData();
    console.log(this.previousRegisterData);

    const request = await this.requestsService.post(
      'auth/register',
      this.previousRegisterData
    );
    request.subscribe(
      async (response: any) => {
        console.log('Register response: ', response);
        if (response.status === 200 && response.body)
          await this.authService.setUser({
            email: response.body.email,
            cpf: response.body.cpf,
            name: response.body.name,
            role: response.body.role,
          });

          await this.authService.setToken(response.body.token);
      },
      (err: Error) => this.presentErrorToast(err.message)
    );
  }

  async presentRegisterToast() {
    const toast = await this.toastController.create({
      message: 'Seja bem vindo!',
      duration: 1500,
      position: 'bottom',
      cssClass: 'toast success',
    });

    await toast.present();
  }

  async presentErrorToast(error: string) {
    const toast = await this.toastController.create({
      message: `Erro: ${error}`,
      duration: 1500,
      position: 'bottom',
      cssClass: 'toast error',
    });

    await toast.present();
  }
}
