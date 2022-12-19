import { NestFactory } from '@nestjs/core';
import { WebsocketClientModule } from './websocket-client.module';

async function bootstrap() {
  const app = await NestFactory.create(WebsocketClientModule);
  await app.listen(9001);
}
bootstrap();
