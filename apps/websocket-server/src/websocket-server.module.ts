import { Module } from '@nestjs/common';
import { WebsocketServerController } from './websocket-server.controller';
import { WebsocketServerService } from './websocket-server.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [WebsocketServerController],
  providers: [WebsocketServerService],
})
export class WebsocketServerModule {}
