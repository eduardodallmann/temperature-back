import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class LeituraGateway {
  @WebSocketServer()
  private server: Server;

  notification() {
    this.server.emit('update');
  }
}
