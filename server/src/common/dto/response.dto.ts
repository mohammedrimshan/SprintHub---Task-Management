export class SuccessResponse<T = any> {
  statusCode: number;
  message: string;
  data?: T;
  timestamp: string;
  path: string;
}

export class ErrorResponse {
  statusCode: number;
  error: string;
  message: string | string[];
  timestamp: string;
  path: string;
}
