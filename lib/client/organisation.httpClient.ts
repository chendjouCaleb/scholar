import {HttpClient} from "./httpClient";
import {Organisation} from "../entity/organisation/organisation";

export class OrganisationHttpClient<T extends Organisation, I> extends HttpClient<T, I>{
    changeProfileImage(organisation: T, image: File) {
        throw new Error("Method not implemented");
    }

    changeCoverImage(organisation: T, image: File) {
        throw new Error("Method not implemented");
    }

    changeName(organisation: T, name: string): Promise<void> {
        throw new Error("Method not implemented");
    }




}