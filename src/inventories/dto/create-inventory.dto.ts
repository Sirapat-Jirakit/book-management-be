import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
  @ApiProperty()
  bookId: number;

  @ApiProperty()
  branchId: number;

  @ApiProperty()
  quantity: number;
}
