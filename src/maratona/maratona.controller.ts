import { Controller, Get, Post, Req, Request, Param, Delete, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>,
    ) { 
    }


    @Get()
    async index() {
        Logger.log(`listando maratonas`, MaratonaController.name);
        return await this.maratonaRepository.find({});
    }

    @Get(':id')
    async show(@Param('id') id) {
        Logger.log(`exibindo a maratona [${id}]`, MaratonaController.name);
        return await this.maratonaRepository.findOneOrFail({ where: { id } });
    }

    @Post()
    async store(@Req() request: Request) {
        Logger.log(`armazenando uma nova maratona : ${JSON.stringify(request.body as any)}`, MaratonaController.name);
        const maratona = this.maratonaRepository.create(request.body as any);
        await this.maratonaRepository.save(maratona);
        return maratona;
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        Logger.log(`removendo a maratona [${id}]`, MaratonaController.name);
        const maratona = await this.maratonaRepository.findOneOrFail({ where: { id } });
        await this.maratonaRepository.remove([maratona])
        return null;
    }

}