import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  authRef: AngularFireAuth;


  
  constructor(private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    private router: Router) {

      this.authRef = afAuth;

    }



  ngOnInit() { }

  async alert(title: string, message: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['ok'],
      backdropDismiss: false
    });
    await alert.present();
  }

  logout() {
    console.log("Saindo");
    this.authRef.auth.signOut().then((data) => {
      alert("Realizando Logout do Usuário")
      this.router.navigate(['/login']);

    })
  }
  
}
