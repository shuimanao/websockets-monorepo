import { Injectable } from '@nestjs/common';

@Injectable()
export class WebsocketClientService {
  getHello(): string {
    return 'Hello World!';
  }
}
