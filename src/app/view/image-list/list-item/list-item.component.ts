import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  
})
export class ListItemComponent implements AfterViewInit{
  fileUpload = {};



  construct(fileUpload:Object) {
    this.fileUpload = fileUpload;
  }

  ngAfterViewInit(): void {
    // this.cd.detectChanges();
  }

  deleteImage($event:any, id:string) {
    if(this.fileUpload != null && typeof(this.fileUpload) != "undefined" && this.fileUpload instanceof Array) {
      for(let img in this.fileUpload) {

      }
    }
  }  
}
