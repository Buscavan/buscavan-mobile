import { User } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input/input.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  automobileForm: any = 'aa';
  searchInputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'Digite a placa do automóvel',
      label: 'Placa',
      size: 12,
      name: 'placa',
    },
    {
      type: 'number',
      placeholder: 'Digite a capacidade do automóvel',
      label: 'Capacidade',
      size: 12,
      name: 'capacidade',
    },
  ];

  constructor(
    private requestsService: RequestsService,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  public async registerAutomobile() {
    console.log(this.automobileForm);

    const valid = this.automobileForm.valid;
    if (!valid)
      return this.presentErrorToast('campos não preenchidos corretamente');

    const user: User = await this.authService.getUser();

    const value = { ...this.automobileForm.value, motoristaId: user };
    console.log(value);
    const request = await this.requestsService.post('veiculo/create', value);
    request.subscribe(
      async (response: any) => {
        if (response.status === 201 && response.body) {
          this.presentSuccessToast();
        }
      },
      (err: Error) => this.presentErrorToast(err.message)
    );
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Automóvel cadastrado!',
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

  async ngOnInit() {
    this.automobileForm = new FormGroup({
      placa: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      capacidade: new FormControl(null, [Validators.required]),
    });
  }
}
