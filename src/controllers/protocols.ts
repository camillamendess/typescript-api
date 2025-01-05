export interface HttpResponse<T> {
  statusCode: number;
  body: T | string; // generic
}

export interface HttpResquest<B> {
  params?: any;
  headers?: any;
  body: B;
}