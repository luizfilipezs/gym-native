import { Exercise } from "./exercise";

export interface Training {
  name: string;
  description: string | null;
  exercises: Exercise[];
}
