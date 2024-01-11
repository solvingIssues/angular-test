import ModelType from "./model-type";

export class Model implements ModelType{
    construct(): void {

    }

    helper(): void {

    }

    /**
     * 
     * @param data Ex.: {"data": []}
     * @param element Ex.: {...} or [{..}] to add in main data
     * @description This method adds new elements to data
     */
    create(data: any, element: any): void {
        if( typeof(element) == "object") {
            data.push(element);
        } else if( element instanceof Array) { //add multiple elements

        } else {

        }
    }

    read(): void {

    }

    update(): void {

    }

    /**
     * 
     * @param data Array data to search for id
     * @param id Data element id
     * @returns 
     */
    delete(data: Array<string>, id: string): boolean {
        return true;
    }
}