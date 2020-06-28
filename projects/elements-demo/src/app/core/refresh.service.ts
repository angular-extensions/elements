import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {}

  checkUpdate() {
    this.swUpdate.available.pipe(take(1)).subscribe(() => {
      const snack = this.snackbar.open(
        'There is a new version of the docs available',
        'Reload page',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
      snack
        .onAction()
        .pipe(take(1))
        .subscribe(() => {
          this.swUpdate.activateUpdate().then(() => window.location.reload());
        });
    });
  }
}
