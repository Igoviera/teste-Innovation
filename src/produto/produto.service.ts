import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './Dto/produto.Dto';

@Injectable()
export class ProdutoService {
    constructor(private readonly prisma: PrismaService){}

    async create(data: CreateProductDto){
        const createProduct = await this.prisma.produtos.create({data})
        return createProduct 
    }

    async findAll(){
        return this.prisma.produtos.findMany()
    }

    async findById(id: string){
        const productExists = await this.prisma.produtos.findUnique({
            where:{
                id
            }
        })

        if(!productExists){
            throw new NotFoundException('Produto não encontrado')
        }

        return this.prisma.produtos.findFirst()
    }

    async updateById(id: string, data: CreateProductDto){
        const productExists = await this.prisma.produtos.findUnique({
            where:{
                id
            }
        })

        if(!productExists){
            throw new NotFoundException('Produto não encontrado')
        }

        return await this.prisma.produtos.update({
            data,
            where:{
                id
            }
        })
    }

    async delete(id: string){
        return this.prisma.produtos.delete({where:{id}})
    }
}
