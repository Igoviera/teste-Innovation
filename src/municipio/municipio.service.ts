import { HttpService } from '@nestjs/axios';
import { Injectable, ConflictException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MunicipioService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService
  ) { }

  async findAll() {
    let municipios = []
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios'

    const response = await firstValueFrom(this.httpService.get(url))

    municipios = response.data

    municipios.map(async (municipio) => {
      const municipioExist = await this.prisma.municipios.findFirst({
        where: {
          name: municipio.nome
        }
      })
      if(municipioExist){
        throw new ConflictException('O municipio já foi cadastrado')
      }

    });

    municipios.map(async (municipio) => {
      const result = await this.prisma.municipios.create({
        data: {
          name: municipio.nome
        }
      })
    }) 
 
  }
}
