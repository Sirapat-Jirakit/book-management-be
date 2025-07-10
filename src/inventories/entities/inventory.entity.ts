import { Inventory } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class InventoryEntity implements Inventory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  bookId: number;

  @ApiProperty()
  branchId: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
