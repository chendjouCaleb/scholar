import {Entity} from "../entity";
import {User} from "../user";
import {IList, List} from "@positon/collections";
import {Email} from "../email";
import {Phone} from "../phone";
import {Address} from "../address";

export class Organisation extends Entity<number>{
    name: string;
    acronym: string;
    website: string;
    description: string;

    coverImageName: string;
    profileImageName: string;
    coverImageURL: string;
    profileImageURL: string;

    createdBy: User;
    admin: User;

    creationDate: Date;

    address: Address;

    emails: IList<Email> = new List<Email>();

    phones: IList<Phone> = new List<Phone>();
}