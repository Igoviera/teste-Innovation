import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty } from 'class-validator';

export class CreateMunicipioDto {
    @IsNotEmpty({message:'O nome é obrigatorio'})
    @ApiProperty()
    name: string
}