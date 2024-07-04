/**
 * Training exercise.
 */
export interface Exercise {
  /**
   * Exercise name.
   */
  name: string;
  /**
   * Exercise goals.
   */
  description: string;
  /**
   * Image URL.
   */
  image: string;
  /**
   * Video URL.
   */
  video: string | null;
  /**
   * Number of series.
   */
  series: number;
  /**
   * Number of repetitions per series.
   */
  reps: number;
  /**
   * Rest time in seconds.
   */
  rest: number;
  /**
   * Exercise weight in kg.
   */
  weight: number;
}