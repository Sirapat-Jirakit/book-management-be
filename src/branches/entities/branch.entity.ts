import { ApiProperty } from '@nestjs/swagger';
import { Branch } from '@prisma/client';

export class BranchEntity implements Branch {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  address: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
