import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  actionSheetHeader = '';
  actionSheetButtons = [];

  registerForm: any;
  cpfrgx =
    '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})';
  namergx = '[^0-9]*';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

  public async register() {
    const valid = this.registerForm.valid;
    if (!valid)
      return this.presentErrorToast('campos não preenchidos corretamente');
    const value = this.registerForm.value;
    console.log('Value: ', value);
    this.presentActionSheet(value);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.namergx),
      ]),
      cpf: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.cpfrgx),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    console.log(this.registerForm);
  }

  numericOnly(event: any): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
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

  async presentActionSheet(value: User) {
    const actionSheet = await this.actionSheetCtrl.create({
      id: 'register',
      header: 'Você é?',
      subHeader: 'Escolha como prosseguir com o cadastro',
      cssClass: 'registerActionSheet',
      buttons: [
        {
          text: 'Passageiro',
          handler: () => {
            this.authService.setUserRegisteringData({
              ...value,
              role: 'PASSANGER',
            });
            this.navigateByUrl('register-finished');
          },
        },
        {
          text: 'Motorista',
          handler: () => {
            this.authService.setUserRegisteringData({
              ...value,
              role: 'DRIVER',
            });
            this.navigateByUrl('get-cnh-picture');
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
