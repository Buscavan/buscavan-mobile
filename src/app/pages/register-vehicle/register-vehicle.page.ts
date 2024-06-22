import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { InputComponent } from 'src/app/components/input/input.component';
import { RequestsService } from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.page.html',
  styleUrls: ['./register-vehicle.page.scss'],
})
export class RegisterVehiclePage implements OnInit {
  registerVehicleForm: any;

  inputs: InputComponent[] = [
    {
      placeholder: 'Digite a placa do veículo',
      type: 'text',
      label: 'Placa',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'placa',
    },
    {
      placeholder: 'Digite a capacidade do veículo',
      type: 'number',
      label: 'Capacidade',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'capacidade',
    },
    {
      placeholder: 'Digite o modelo do veículo',
      type: 'text',
      label: 'Modelo',
      size: 12,
      disabled: false,
      value: '',
      ngOnInit: () => {},
      turnDisabled: () => {},
      name: 'modelo',
    },
  ];

  constructor(
    private toastController: ToastController,
    private requestsService: RequestsService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit(): void {
    this.registerVehicleForm = new FormGroup({
      placa: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      capacidade: new FormControl(null, [Validators.required]),
      modelo: new FormControl(null, [Validators.required]),
    });
    console.log(this.registerVehicleForm);
  }

  async registerVehicle() {
    console.log('Vehicles forms: ', this.registerVehicleForm);
    if (!this.registerVehicleForm.valid) {
      this.presentErrorToast('campos não preenchidos corretamente');
    }

    const dataForm: {
      placa: string;
      capacidade: number;
      modelo: string;
      file: Blob;
    } = this.registerVehicleForm.value;
    dataForm.capacidade = Number(dataForm.capacidade);
    dataForm.file = (await this.takePicture()) || new Blob();

    const response = await this.requestsService.post(
      'veiculo/create',
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

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
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

  async presentErrorToast(error: string) {
    const toast = await this.toastController.create({
      message: `Erro: ${error}`,
      duration: 1500,
      position: 'bottom',
      cssClass: 'toast error',
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

  async presentActionSheet() {
    console.log('Vehicles forms: ', this.registerVehicleForm);
    if (!this.registerVehicleForm.valid) {
      return this.presentErrorToast('campos não preenchidos corretamente');
    }
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecionar fotos',
      buttons: [
        {
          text: 'Selecionar foto do veículo',
          role: 'photo',
          handler: () => this.registerVehicle(),
        },
      ],
    });

    await actionSheet.present();
  }
}
