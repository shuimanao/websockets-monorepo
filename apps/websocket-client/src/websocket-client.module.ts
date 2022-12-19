import { Module } from '@nestjs/common';
import { WebsocketClientController } from './websocket-client.controller';
import { WebsocketClientService } from './websocket-client.service';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [SocketModule],
  controllers: [WebsocketClientController],
  providers: [WebsocketClientService],
})
export class WebsocketClientModule {}
