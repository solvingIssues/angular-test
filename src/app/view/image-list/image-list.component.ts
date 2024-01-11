import { NgIf, JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  standalone : true,
  selector   : 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls  : ['./image-list.component.scss'],
  imports    : [ReactiveFormsModule, NgIf, NgFor, NgbDatepickerModule, FormsModule, JsonPipe, AppHeaderComponent, ListItemComponent],
})
export class ImageListComponent {
           images         = JSON.parse(localStorage.getItem("images") ?? "{}");
           inputFilter    = new FormControl('');
           inputTags      = [];
           filteredImages = [];
  formList: FormGroup     = new FormGroup({
    inputFilter: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  getImagesByTag(event: any) {
    this.inputTags = this.inputFilter.value + event.target.value!.split(";");
    if(this.images != null && typeof(this.images.data) != "undefined" && this.images.data instanceof Array) {
      this.images.data.map((image: any) => {
        for(let key in image.keyWords) {
          // if(this.inputTags.indexOf(image.keyWords[key]) !== -1) {
          //   this.filteredImages.push(image);
          //   break; // breaks for after find 1 keyword match
          // }
        }
      });
    }
  }

  onViewInit() {
    
  }

  
}
