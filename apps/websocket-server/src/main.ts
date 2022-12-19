import { NestFactory } from '@nestjs/core';
import { WebsocketServerModule } from './websocket-server.module';

async function bootstrap() {
  const app = await NestFactory.create(WebsocketServerModule);
  await app.listen(9000);
}
bootstrap();
