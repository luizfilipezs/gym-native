export interface FetchResponse<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}