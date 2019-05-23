import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Orders } from '../_db';

enum RequestType {
  ListOrders,
  Invalid
}

interface DBConnection {
  db: any;
  type: RequestType;
}

const AUTH_KEY = 'TESTING_AUTH_KEY';

export class HttpClientMock {

  static router(url: string): DBConnection {
    if (url.includes('/api/orders')) {
      return { db: Orders, type: RequestType.ListOrders };
    } else {
      return { db: [], type: RequestType.Invalid }
    }
  }

  get(url: string, options) {
    let response = null;
    if (options && options.headers && options.headers.get('Authorization') !== AUTH_KEY) {
      response = { status: 401, statusText: 'Forbidden' };
    } else if (HttpClientMock.router(url).type === RequestType.Invalid) {
      response = { status: 404, statusText: 'Not Found' };
    } else if (HttpClientMock.router(url).type === RequestType.ListOrders) {
      response = Object.assign({ status: 200, statusText: 'Success'}, { data: HttpClientMock.router(url).db });
    }

    return of(response);
  }

}
