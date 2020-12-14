import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ExampleModalPage} from "../modals/example-modal/example-modal.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
