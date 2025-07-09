import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BranchEntity } from './entities/branch.entity';

@Controller('branches')
@ApiTags('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  @ApiCreatedResponse({ type: BranchEntity })
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchesService.create(createBranchDto);
  }

  @Get()
  @ApiOkResponse({ type: BranchEntity, isArray: true })
  findAll() {
    return this.branchesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BranchEntity })
  findOne(@Param('id') id: string) {
    return this.branchesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BranchEntity })
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchesService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BranchEntity })
  remove(@Param('id') id: string) {
    return this.branchesService.remove(+id);
  }
}
