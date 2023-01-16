import { HttpModule} from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';

@Module({ 
    imports:[HttpModule],
    providers:[MunicipioService, PrismaService],
    controllers:[MunicipioController],
})
export class MunicipioModule {}
