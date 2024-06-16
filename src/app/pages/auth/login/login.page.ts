import { AuthService } from './../../../services/auth/auth.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any = 'aa';
  cpfrgx =
    '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})';

  searchInputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: '000.000.000-00',
      label: 'CPF',
      size: 12,
      name: 'cpf',
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
      mask: "***.***.***-**",
      maxlength: 14,
    },
    {
      type: 'password',
      placeholder: 'Digite sua senha',
      label: 'Senha',
      size: 12,
      name: 'password',
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
  ];

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
