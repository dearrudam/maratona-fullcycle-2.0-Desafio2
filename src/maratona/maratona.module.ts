import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Maratona } from './maratona.entity'
import { MaratonaController } from './maratona.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
    ],
    controllers: [
        MaratonaController
    ],
    providers: [
        ConfigModule,
    ]
})
export class MaratonaModule { }
