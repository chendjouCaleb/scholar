/**
 * Represents a department of a faculty.
 */
import { Organisation } from "./organisation";
import { Faculty } from "./faculty";
import { IList, List } from "@positon/collections";
import { DepartementLevel } from "./departementLevel";

export class Department extends Organisation {
    faculty: Faculty;

    departementLevels: IList<DepartementLevel> = new List<DepartementLevel>();
}