import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-business-feature',
  templateUrl: './business-feature.component.html',
})
export class BusinessFeatureComponent {

  features = ["MasterData", "B2B", "B2C", "Back Office", "WebService", "Market Place", "Analytics", "Android App"];

  constructor(private router: Router, private titleService: Title, private matDialog: MatDialog) {
    this.titleService.setTitle('Select services');
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  openDialog(): void {
    const dialog = this.matDialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: {
      }
    });

    dialog.afterClosed().subscribe(result => {
      console.log("closed");
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<h1>Texto</h1>',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}