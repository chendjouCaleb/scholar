/**
 * Represents a PrimarySchoolSection.
 */

import { Section } from "./section";
import { IList, List } from "@positon/collections";
import { PrimarySchoolLevel } from "./primarySchoolLevel";

export class PrimarySchoolSection extends Section {
    primarySchoolLevels: IList<PrimarySchoolLevel> = new List<PrimarySchoolLevel>();
}