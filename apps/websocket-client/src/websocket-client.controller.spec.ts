import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketClientController } from './websocket-client.controller';
import { WebsocketClientService } from './websocket-client.service';

describe('WebsocketClientController', () => {
  let websocketClientController: WebsocketClientController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebsocketClientController],
      providers: [WebsocketClientService],
    }).compile();

    websocketClientController = app.get<WebsocketClientController>(WebsocketClientController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(websocketClientController.getHello()).toBe('Hello World!');
    });
  });
});
