import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty({message:'O nome é obrigatorio'})
    @ApiProperty()
    name: string

    @IsNotEmpty({message:'A categoria é obrigatoria'})
    @ApiProperty()
    category: string

    @IsNotEmpty({message:'O status é obrigatorio'})
    @ApiProperty()
    status: boolean

    @IsNotEmpty({message:'A quantidade é obrigatoria'})
    @ApiProperty()
    quantity: number
}