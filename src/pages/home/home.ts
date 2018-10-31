import { Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FCM } from '@ionic-native/fcm';
import { CommonProvider } from '../../providers/common/common';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(private camera: Camera, public fcm: FCM, public common: CommonProvider, public global: GlobalProvider) {
    this.common.platform.ready().then(() => {
      this.handleNotification();
    });
  }

  ionViewDidLoad() {
    
  }

  getPictureFromCamera() {
    console.log("Get Picture From Camera");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log("Get Picture From Camera Success" + JSON.stringify(imageData));
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("Base64Image" + JSON.stringify(base64Image));
    }, (err) => {
      // Handle error
      console.log("Get Picture From Camera Error" + JSON.stringify(err));
    });
  }

  getPictureFromLibrary() {
    console.log("Get Picture From Library");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log("Get Picture From Library Success" + JSON.stringify(imageData));
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("Base64Image" + JSON.stringify(base64Image));
    }, (err) => {
      // Handle error
      console.log("Get Picture From Library Error" + JSON.stringify(err));
    });
  }

  handleNotification() {
    console.log("Handle Notification");
    alert("Handle Notification");
    this.fcm.subscribeToTopic('all');
    this.fcm.getToken().then(token => {
      console.log("get token" + token);
      alert("get token" + token);
    });
    this.fcm.onNotification().subscribe(data => {
      alert("On Notification" + JSON.stringify(data));
      if (data.wasTapped) {
        console.log("Data was tapped: " + JSON.stringify(data));
        alert("Data was tapped: " + JSON.stringify(data));
      } else {
        console.log("Data : " + JSON.stringify(data));
        alert("Data : " + JSON.stringify(data));
      }
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log("On refresh" + token);
      alert("On refresh" + token);
    });
  }
}