import { AuthService } from './../../../services/auth/auth.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  cpfrgx =
    '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})';

  constructor(
    private router: Router,
    private requestsService: RequestsService,
    private authService: AuthService,
    private zone: NgZone,
    private toastController: ToastController
  ) {}

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

  public async login() {
    const valid = this.loginForm.valid;
    if (!valid)
      return this.presentErrorToast('campos não preenchidos corretamente');
    const value = this.loginForm.value;
    const request = await this.requestsService.post('users/login', value);
    request.subscribe(
      async (response: any) => {
        if (response.status === 201 && response.body) {
          await this.authService.setUser(response.body).then(() => {
            this.zone.run(() => this.navigateByUrl('tabs'));
            this.presentLoginToast();
          });
        }
      },
      async (err: Error) => this.presentErrorToast(err.message)
    );
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      cpf: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.cpfrgx),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    console.log(this.loginForm);
  }

  numericOnly(event: any): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  async presentLoginToast() {
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
