import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiOperation } from '@nestjs/swagger/dist/decorators/api-operation.decorator';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { CreateProductDto } from './Dto/produto.Dto';
import { ProdutoService } from './produto.service';
import { IndexProductSwagger } from './swagger/index-product.swagger';

@Controller('produto')
@ApiTags('produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService){}
  
    @Post()
    @ApiOperation({summary: 'Cadastrar um produto'})
    @ApiResponse({status:200, description:'Novo produtos criado com sucesso'})
    async create(@Body() data: CreateProductDto){
        return this.produtoService.create(data)
    }
 
    @Get()
    @ApiOperation({summary: 'Listar todos os produtos'})
    @ApiResponse({
        status:200, 
        description:'Produtos retornados com sucesso',
        type: IndexProductSwagger,
        isArray: true,
    })
    async findAll(){
        return this.produtoService.findAll()
    }

    @Get(':id')
    @ApiOperation({summary: 'Listar um produto pelo ID'})
    @ApiResponse({status:200, description:'Produto retornado com sucesso'})
    @ApiResponse({status:409, description:'Produto não encontrado'})
    async findById(@Param('id')id: string){
        return this.produtoService.findById(id)
    }

    @Put(':id')
    @ApiOperation({summary: 'Atualizar os dados de um produto'})
    @ApiResponse({status:200, description:'Produto atualizado com sucesso'})
    @ApiResponse({status:409, description:'Produto não encontrado'})
    async updateById(@Param('id') id: string, @Body() data: CreateProductDto){
        return this.produtoService.updateById(id,data)
    }

    @Delete(':id')
    @ApiOperation({summary: 'Deletar um produto'})
    @ApiResponse({status:204, description:'Produtos deletado com sucesso'})
    @ApiResponse({status:409, description:'Produtos não encontrado'})
    async delete(@Param('id') id: string){
        return this.produtoService.delete(id)
    }
}
