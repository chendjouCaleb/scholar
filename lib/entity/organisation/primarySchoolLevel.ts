/**
 * Represents a PrimarySchoolLevel.
 */

import { Level } from "./level";
import { IList, List } from "@positon/collections";
import { PrimarySchoolClass } from "./primaryschoolClass";

export class PrimarySchoolLevel extends Level {

    primarySchoolClasses: IList<PrimarySchoolClass> = new List<PrimarySchoolClass>();

}