import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input/input.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-register-trip',
  templateUrl: './register-trip.page.html',
  styleUrls: ['./register-trip.page.scss'],
})
export class RegisterTripPage implements OnInit {
  registerTripForm: any;

  inputs: InputComponent[] = [
    {
      placeholder: 'Digite o local de saída',
      type: 'text',
      label: 'Local de saída',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'origem',
    },
    {
      placeholder: 'Digite o local de destino',
      type: 'text',
      label: 'Local de destino',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'destino',
    },
    {
      placeholder: 'Digite a data de saída',
      type: 'date',
      label: 'Data de saída',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'dataInicial',
    },
    {
      placeholder: 'Digite a data de volta',
      type: 'date',
      label: 'Data de volta',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'dataFinal',
    },
    {
      placeholder: 'Digite o preço da viagem',
      type: 'number',
      label: 'Preço',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'valor',
    },
  ];

  selectedVehicle: { placa: string; id: number } = { placa: '', id: 0 };
  driversVehicles: { placa: string; id: number }[] = [];

  constructor(
    private toastController: ToastController,
    private requestsService: RequestsService,
    private authService: AuthService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  async ngOnInit() {
    this.registerTripForm = new FormGroup({
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      dataInicial: new FormControl(null, [Validators.required]),
      dataFinal: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required]),
      veiculoId: new FormControl(null, [Validators.required]),
    });
    this.registerTripForm.get('veiculoId')?.disable();
    console.log(this.registerTripForm);

    const user = await this.authService.getUser();
    console.log(user);
    const response = await this.requestsService.get(`veiculo/${user.cpf}`);
    response.subscribe((data: any) => {
      console.log('dataaaaaaa: ', data);
      this.driversVehicles = data.body;
      this.selectedVehicle = this.driversVehicles[0];
    });
  }

  async registerTrip() {
    console.log('Trip forms: ', this.registerTripForm);
    if (!this.registerTripForm.valid) {
      this.presentErrorToast('campos não preenchidos corretamente');
    }

    const dataForm: {
      origemId: number;
      destinoId: number;
      file: Blob;
      localEmbarqueIda: string;
      localEmbarqueVolta: string;
      veiculoId: number;
      descricao: string;
    } = this.registerTripForm.value;
    dataForm.localEmbarqueIda = 'a';
    dataForm.localEmbarqueVolta = 'a';
    dataForm.veiculoId = this.selectedVehicle.id;
    dataForm.origemId = 1;
    dataForm.destinoId = 1;
    dataForm.descricao = '';
    dataForm.file = (await this.takePicture()) || new Blob();

    const response = await this.requestsService.post(
      'viagem/create',
      dataForm,
      true
    );
    response.subscribe((response: any) => {
      console.log('Data: ', response);
      if (response.status === 201 && response.body) {
        this.presentSuccessToast();
        this.navigateByUrl('tabs/tab3');
      }
    });
    console.log(response);
  }

  async presentActionSheet() {
    console.log('Trips forms: ', this.registerTripForm);
    if (!this.registerTripForm.valid) {
      return this.presentErrorToast('campos não preenchidos corretamente');
    }
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecionar fotos',
      buttons: [
        {
          text: 'Selecionar fotos da viagem',
          role: 'photo',
          handler: () => this.registerTrip(),
        },
      ],
    });

    await actionSheet.present();
  }

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
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

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro bem sucedido',
      duration: 1500,
      position: 'bottom',
      cssClass: 'toast success',
    });

    await toast.present();
  }

  public async takePicture() {
    try {
      console.log('Requesting camera access...');
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
      });
      console.log('Photo captured:', image);

      const base64Data = image.base64String || '';
      const contentType = image.format; // e.g., 'jpeg' or 'png'
      const blob = this.base64ToBlob(base64Data, `image/${contentType}`);
      return blob;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  base64ToBlob(base64: string, contentType: string): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  async selectVehicle() {
    const buttons = this.driversVehicles.map((el: any) => {
      return {
        text: el.placa,
        handler: () => this.changeSelectedVehicle({ placa: el.placa, id: el.id }),
      };
    });
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione o veículo',
      buttons: buttons,
    });

    await actionSheet.present();
  }

  changeSelectedVehicle(vehicle: { placa: string; id: number }) {
    this.selectedVehicle = vehicle;
  }
}
