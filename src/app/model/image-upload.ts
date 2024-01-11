import {Model} from './model';

class ImageUpload extends Model {
    //to identify wich image im working with, meant for DOM handling and Model manipulation
    id= Date.now();
    title!: string;
    fileName!: string;
    keyWords!: string [];
    price!: number;
    description!: string;
    uploadDate!: string;

    override construct(): void {
        
    }

    
}

export default ImageUpload;