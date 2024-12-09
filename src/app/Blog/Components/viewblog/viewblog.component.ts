import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent {
 
  // constructor(@Inject(MAT_DIALOG_DATA) public data: { description: string; views: number }) {}
  constructor(
    public dialogRef: MatDialogRef<ViewblogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
