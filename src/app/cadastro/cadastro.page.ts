import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  authRef: AngularFireAuth;
  Email: string;
  Password: string;


  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public afAuth: AngularFireAuth,
              private router: Router) {
    this.Email = "";
    this.Password = "";
    this.authRef = afAuth;
  }

  ngOnInit() {}

  async alert(title: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['ok'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async toast(title: string, position: any = 'top'): Promise<void> {
    const toast = await this.toastCtrl.create({ message: title, position, duration: 2000});
    await toast.present();
  }

  cadastro() {
    this.authRef.auth.createUserWithEmailAndPassword(this.Email, this.Password).then(data => {
      this.toast("Cadastro efetuado com sucesso!");
      alert("Cadastro efetuado com sucesso!")

      localStorage.setItem("PS:USER_INFO", JSON.stringify(data.user));

      this.router.navigate(['/login']);
    },
    error => {
      console.log(error);
      this.alert("Erro", "Informações incorretas!");
      alert("Credenciais incorretas!")
    });
  }
}
