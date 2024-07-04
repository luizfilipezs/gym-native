import { Exercise } from "./exercise";

export interface Training {
  day: string;
  description: string;
  exercises: Exercise[];
}