import { Module } from '@nestjs/common';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';
import { PrismaService } from './prisma/prisma.service';
import { MunicipioModule } from './municipio/municipio.module';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService],
  imports: [MunicipioModule],
})
export class AppModule {}
