import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider) {
  }

  async login(): Promise<void> {
    let result = await this.usuarioSrv.autenticate(this.form.email, this.form.senha);
    if (result.success) {
      //Enviar para roda certa
    }
    console.log(result);
  }
}
