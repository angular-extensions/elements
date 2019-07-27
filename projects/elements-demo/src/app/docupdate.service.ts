import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class DocupdateService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {}

  checkUpdate() {
    const snack = this.snackbar.open(
      'There is an update available for docs.',
      'Reload',
      {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
    this.swUpdate.available.subscribe(evt => {
      snack.onAction().subscribe(() => {
        this.swUpdate.activateUpdate().then(() => window.location.reload());
      });
    });
  }
}
