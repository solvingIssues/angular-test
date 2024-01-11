abstract class ModelType {
    construct(): void {

    }

    /**
     * 
     * @param data Json Data for example 
     * @param id
     */
    create(data: Array<string>, element: object): void {
        
    }

    read(): void {

    }

    update(): void {

    }

    /**
     * 
     * @param data Json Data for example 
     * @param id 
     */
    delete(data:Array<string>, id: string): boolean {
        return true;
    }
}

export default ModelType;