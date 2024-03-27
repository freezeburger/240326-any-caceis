import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomErrorHandlerService extends ErrorHandler implements HttpInterceptor{
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.groupCollapsed('CustomErrorHandlerService Request')
    console.warn(req)
    // Custom Error Handling
    console.groupEnd()
    // OK
    return next.handle(req);
  }

  override handleError(error: any): void {
    
    console.groupCollapsed('CustomErrorHandlerService Error')
    console.warn('CustomErrorHandlerService',error)
    // Custom Error Handling
    console.groupEnd()

    //throw error;
    super.handleError(error);
  }

}
