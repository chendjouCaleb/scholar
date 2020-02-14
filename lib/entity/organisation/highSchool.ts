/**
 * Represents a HighSchool.
 */
import { School } from "./school";
import { IList, List } from "@positon/collections";
import { HighSchoolLevel } from "./highSchoolLevel";
import { HighSchoolSection } from "./highSchoolSection";

export class HighSchool extends School {

    highSchoolSections: IList<HighSchoolSection> = new List<HighSchoolSection>();

}