import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import {CommonModule, JsonPipe, NgIf} from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import ImageUpload from '../model/image-upload';
import { NgbModule, NgbCalendar, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone: true,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  imports: [ReactiveFormsModule, NgIf, NgbDatepickerModule, NgbModule, FormsModule, JsonPipe],
})


export class UploadComponent implements OnInit{
    //upload = new ImageUpload();
       title       = new FormControl('');
       fileName    = new FormControl('');
       keyWords    = new FormControl('');
       price       = new FormControl('');
       description = new FormControl('');
       uploadDate  = new FormControl('');
       validForm   = false;
       
  form: FormGroup  = new FormGroup({
    title   : new FormControl(''),
    fileName: new FormControl(''),
    keyWords: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    uploadDate: new FormControl(''),
  });
  
  today = inject(NgbCalendar).getToday();
	model!: NgbDateStruct;
	date! : { year: number; month: number; day: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validForm = this.validate();
    this.form      = this.formBuilder.group(
      {
        title      : ['', Validators.required, Validators.pattern("/[a-zA-Z0-9]/")],
        fileName   : ['', Validators.required],
        keyWords   : ['', Validators.required],
        price      : ['', Validators.required, Validators.pattern("/[0-9]/")],
        description: ['', Validators.required, Validators.pattern("/[a-zA-Z0-9]/")],
        uploadDate : ['', Validators.required],
      }
    );
  }

  validate(): boolean {  
    if(this.title.valid
      && this.fileName.valid
      && this.keyWords.valid
      && this.price.valid
      && this.description.valid
      //&& this.uploadDate.valid  
    ) {
      this.validForm = true;
      return true;
    } else {
      this.validForm = false;
      return false;
    }
  }

  onSubmit($event: any): void {
    $event.preventDefault();
    if(this.validate()) {
      //save to localstorage
      if(localStorage.getItem("images") == null) {
        let images = {
          "data": [
            {
              "title"      : this.title.value,
              "fileName"   : this.fileName.value,
              "keyWords"   : this.keyWords.value?.split(";"),
              "price"      : this.price.value,
              "description": this.description.value,
              "uploadDate" : this.uploadDate.value
            }
          ]
        };
        localStorage.setItem("images", JSON.stringify(images));
      } else {
        let images = JSON.parse(localStorage.getItem("images") ?? "");
        images.data.push(JSON.stringify({
          "title"      : this.title.value,
          "fileName"   : this.fileName.value,
          "keyWords"   : this.keyWords.value?.split(";"),
          "price"      : this.price.value,
          "description": this.description.value,
          "uploadDate" : this.uploadDate.value
        }));
        localStorage.setItem("images", JSON.stringify(images));
      }
    }
  }

  onReset(): void {
    this.form.reset();
  }
}

