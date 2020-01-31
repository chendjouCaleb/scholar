import {IList, List} from "@positon/collections";

export abstract class HttpClient<T, I> {

    public find(id: I):Promise<T> {
        throw new Error("Method not implemented");
    }

    public list(queryParams?: any): Promise<IList<T>> {
        throw new Error("Method not implemented");
    }

    public add(model: any, queryParams?: any): Promise<T> {
        throw new Error("Method not implemented");
    }


    updateAsync(id: I, model: any, queryParams?: any): Promise<T> {
        throw new Error("Method not implemented");
    }

    delete(id: I):Promise<any> {
        throw new Error("Method not implemented");
    }


}