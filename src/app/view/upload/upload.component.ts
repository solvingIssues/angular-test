import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import {CommonModule, JsonPipe, NgIf} from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import ImageUpload from '../../model/image-upload';
import { NgbModule, NgbCalendar, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';



@Component({
  standalone: true,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  imports: [
    ReactiveFormsModule, 
    NgIf, 
    NgbDatepickerModule, 
    NgbModule, 
    FormsModule, 
    JsonPipe,
    AppHeaderComponent,
  ],
})


export class UploadComponent implements AfterViewInit {
    //upload = new ImageUpload();
       title       = new FormControl('');
       fileName    = new FormControl('');
       keyWords    = new FormControl('');
       price       = new FormControl('');
       description = new FormControl('');
       uploadDate = new FormControl('');
       model      = new ImageUpload();
       validForm   = false;
       auxDateUpload  =new Date();
       currentDate!: object;
       
  form: FormGroup  = new FormGroup({
    title   : new FormControl(''),
    fileName: new FormControl(''),
    keyWords: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    uploadDate: new FormControl(''),
  });
  
  today = inject(NgbCalendar).getToday();

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {}
    ngAfterViewInit(): void {
        this.validForm = false;
        this.currentDate = {
          year: this.auxDateUpload.getFullYear,
          month: this.auxDateUpload.getMonth,
          day: this.auxDateUpload.getDay()
        };
        this.cd.detectChanges();
    }

  ngOnInit(): void {
    //this.validForm = this.validate();
    this.form      = this.formBuilder.group(
      {
        title      : ['', Validators.required,],
        fileName   : ['', Validators.required],
        keyWords   : ['', Validators.required],
        price      : ['', Validators.required, Validators.pattern("/[0-9]/")],
        description: ['', Validators.required,],
        uploadDate : ['', Validators.required],
      }
    );
  }

  getUploadDate(): object {
    return this.currentDate;
  }

//  ngOnAfterViewInit(): void {
//    this.validForm = false;
//   // setTimeout(() => {
//   //   this.validForm = false;
//   // }, 0);

//   //Promise.resolve().then(() => this.validForm = false);

//   this.cd.detectChanges();
  
//  }

  validate(): boolean {
    if(this.title.valid
      && this.fileName.valid
      && this.keyWords.valid
      && this.price.valid
      && this.description.valid
      && this.uploadDate.valid  
    ) {
      this.validForm = true;
      return true;
    } else {
      this.validForm = false;
      return false;
    }
  }

  onSubmit($event: any): void {
    //$event.preventDefault();
    if(this.validate()) {
      //save to localstorage
      if(localStorage.getItem("images") == null) {
        //this.model.create();
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

