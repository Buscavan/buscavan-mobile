import { Component, OnInit } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  inputs: InputComponent[] = [
    {
      type: 'text',
      placeholder: 'João Erik da Silva Crisóstomo',
      label: 'Nome',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'text',
      placeholder: 'joao@gmail.com',
      label: 'E-mail',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
    {
      type: 'text',
      placeholder: '123.456.789-10',
      label: 'CPF',
      size: 12,
      disabled: false,
      ngOnInit: () => {},
      turnDisabled: () => {},
      value: '',
    },
  ];

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    const user: User = await this.authService.getUser();
    this.inputs = [
      {
        type: 'text',
        placeholder: user.name || '',
        label: 'Nome',
        size: 12,
        disabled: false,
        ngOnInit: () => {},
        turnDisabled: () => {},
        value: '',
      },
      {
        type: 'text',
        placeholder: user.email || '',
        label: 'E-mail',
        size: 12,
        disabled: false,
        ngOnInit: () => {},
        turnDisabled: () => {},
        value: '',
      },
      {
        type: 'text',
        placeholder: user.cpf || '',
        label: 'CPF',
        size: 12,
        disabled: false,
        ngOnInit: () => {},
        turnDisabled: () => {},
        value: '',
      },
    ];
  }

}
