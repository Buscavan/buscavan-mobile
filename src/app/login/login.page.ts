import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  cpfrgx = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

  constructor(private router: Router, private requestsService: RequestsService) { }

  public navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  public async login() {
    const valid = this.loginForm.valid;
    if (!valid) return;
    const value = this.loginForm.value;

    console.log(this.loginForm)

    const request = await this.requestsService.post('users/login', value);
    request.subscribe((response: any) => {
      console.log('Response: ', response)
      if (response.status === 201 && response.body) this.navigateByUrl('tabs');
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      cpf: new FormControl(null, [Validators.required, Validators.pattern(this.cpfrgx)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
    console.log(this.loginForm)
  }

  numericOnly(event: any): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
}
