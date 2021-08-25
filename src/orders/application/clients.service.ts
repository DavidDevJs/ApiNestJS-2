import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto, UptdateClientDto } from '../domain/Clients.dtos';
import { Client } from '../domain/Clients.entity';

@Injectable()
export class ClientsService {
  private idAutoIncrement = 0;

  clients: Client[] = [
    {
      id: 0,
      fullName: 'David Gonzalez',
      email: 'example@gmail.com',
      phoneNumber: '3210342211',
      address: 'Calle 1 N 3 - 11',
      city: 'Capital',
      country: 'Pais',
      createAt: '01-01-2021 08:22',
      updateAt: '01-01-2021 09:34',
    },
  ];

  findAll() {
    return this.clients;
  }

  findOne(id: number) {
    const client = this.clients.find((item) => item.id === id);
    if (!client) {
      throw new NotFoundException(`client id ${id} not found`);
    }
    return client;
  }

  create(payload: CreateClientDto) {
    this.idAutoIncrement += 1;
    const newclient = {
      id: this.idAutoIncrement,
      ...payload,
    };
    this.clients.push(newclient);
    return newclient;
  }

  update(id: number, payload: UptdateClientDto) {
    const client = this.findOne(id);

    if (!client) {
      throw new NotFoundException(`client id ${id} not found`);
    }
    const index = this.clients.findIndex((item) => item.id === id);
    this.clients[index] = {
      ...client,
      ...payload,
    };
    return this.clients[index];
  }

  delete(id: number) {
    const index = this.clients.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`client id ${id} not found`);
    }
    this.clients.splice(index, 1);
    return true;
  }
}
