import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketServerController } from './websocket-server.controller';
import { WebsocketServerService } from './websocket-server.service';

describe('WebsocketServerController', () => {
  let websocketServerController: WebsocketServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebsocketServerController],
      providers: [WebsocketServerService],
    }).compile();

    websocketServerController = app.get<WebsocketServerController>(WebsocketServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(websocketServerController.getHello()).toBe('Hello World!');
    });
  });
});
