/**
 * Represents a PrimarySchool.
 */
import { School } from "./school";
import { IList, List } from "@positon/collections";
import { PrimarySchoolSection } from "./primarySchoolSection";

export class PrimarySchool extends School {

    primarySchoolSections: IList<PrimarySchoolSection> = new List<PrimarySchoolSection>();
}