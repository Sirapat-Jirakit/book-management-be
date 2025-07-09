import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  published_year?: number;

  @ApiProperty({ required: false })
  genre?: string;
}
