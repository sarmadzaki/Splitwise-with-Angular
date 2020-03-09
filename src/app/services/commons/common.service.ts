import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public snackbar: MatSnackBar) { }

  snackBarToggle(message: string, action: string) {
   return this.snackbar.open(message, action, {
      duration: 4000,
      panelClass: 'mt-snackbar'
   });
  }
}
