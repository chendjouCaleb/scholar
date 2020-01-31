/**
 * Represents a department of a faculty.
 */
import {Organisation} from "./organisation";
import {Faculty} from "./faculty";

export class Department extends Organisation{
    faculty: Faculty;
}