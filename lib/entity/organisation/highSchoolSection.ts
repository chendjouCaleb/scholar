/**
 * Represents a HighSchoolSection.
 */

import { Section } from "./section";
import { IList, List } from "@positon/collections";
import { HighSchoolLevel } from "./highSchoolLevel";

export class HighSchoolSection extends Section {
    primarySchoolLevels: IList<HighSchoolLevel> = new List<HighSchoolLevel>();
}