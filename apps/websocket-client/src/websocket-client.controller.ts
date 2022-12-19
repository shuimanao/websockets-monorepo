import { Controller, Get } from '@nestjs/common';
import { WebsocketClientService } from './websocket-client.service';

@Controller()
export class WebsocketClientController {
  constructor(private readonly websocketClientService: WebsocketClientService) {}

  @Get()
  getHello(): string {
    return this.websocketClientService.getHello();
  }
}
