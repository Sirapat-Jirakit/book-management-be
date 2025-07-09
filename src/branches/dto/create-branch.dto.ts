import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  address?: string;
}
