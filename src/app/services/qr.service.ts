import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  encodeData: any;
  scannedData: any;
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private qr: BarcodeScanner,
    private auth: AuthService,
    private toast: ToastService) {

      this.encodeData = this.auth.getUser().id;
      this.barcodeScannerOptions = {
        showFlipCameraButton: true,
        showTorchButton: true,        
      };
   }

   scanCode(){
     this.qr.scan().then(barcodeData =>{
      this.scannedData = barcodeData;
     }).catch(err =>{
       this.toast.createToastBottom("Error de escaneo", true, 350, "danger");
     });
   }

   encodedText(){
     this.qr.encode(this.qr.Encode.TEXT_TYPE, this.encodeData).then(encodedData=>{
       this.encodeData = encodedData;
     }).catch(err =>{
       this.toast.createToastBottom("Error creando código QR", true, 350, "danger");
     });
   }


}
