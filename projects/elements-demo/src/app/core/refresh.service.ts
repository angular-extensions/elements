import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  private readonly swUpdate = inject(SwUpdate);
  private readonly snackbar = inject(MatSnackBar);

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
