import {Model} from './model';

class ImageUpload extends Model {
    title!: string;
    fileName!: string;
    keyWords!: string [];
    price!: number;
    description!: string;
    uploadDate!: string;

}

export default ImageUpload;