import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { ApiOperation } from '@nestjs/swagger/dist/decorators/api-operation.decorator';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { CreateMunicipioDto } from './dto/munucipio.dto';
import { MunicipioService } from './municipio.service';

@Controller('municipio')
@ApiTags('municipios')
export class MunicipioController {
    constructor(private readonly municipio: MunicipioService){}

    @Get()
    @ApiOperation({summary: 'Listar todos os municípios'})
    @ApiResponse({status:200, description:'Municípios retornados com sucesso'})
    async findAll(){
        return await this.municipio.findAll()
    }

}
