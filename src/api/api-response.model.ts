export default interface ApiResponse<T> {
  // HTTP Status Code, -1 for errors from this package
  code: number;
  status: 'success' | 'fail' | 'error';
  messages?: string[];
  data?: T;
  // Unique request identifier
  traceId: string;
}
