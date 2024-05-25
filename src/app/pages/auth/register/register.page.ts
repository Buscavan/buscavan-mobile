import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests/requests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: any;
  cpfrgx =
    '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})';
  namergx = '[^0-9]*';

  constructor(
    private router: Router,
    private requestsService: RequestsService,
    private authService: AuthService,
    private zone: NgZone
  ) {}

  public navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

  public async register() {
    const valid = this.registerForm.valid;
    if (!valid) return;
    const value = this.registerForm.value;

    console.log(this.registerForm);

    const request = await this.requestsService.post('users/create', value);
    request.subscribe(async (response: any) => {
      console.log('Response: ', response);
      if (response.status === 201 && response.body) {
        await this.authService
          .setUser(response.body)
          .then(() => this.zone.run(() => this.navigateByUrl('tabs')));
      }
    });
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
}