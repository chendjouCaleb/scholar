/**
 * Represents a HighSchoolLevel.
 */
import { Level } from "./level"
import { List, IList } from "@positon/collections"
import { HighSchoolClass } from "./highSchoolClass"

export class HighSchoolLevel extends Level {

    highSchoolClasses: IList<HighSchoolClass> = new List<HighSchoolClass>()
}