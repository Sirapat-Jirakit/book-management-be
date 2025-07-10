import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { InventoryEntity } from './entities/inventory.entity';

@Controller('inventories')
@ApiTags('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Post()
  @ApiCreatedResponse({ type: InventoryEntity })
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoriesService.create(createInventoryDto);
  }

  @Get()
  @ApiOkResponse({ type: InventoryEntity, isArray: true })
  findAll() {
    return this.inventoriesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: InventoryEntity })
  findOne(@Param('id') id: string) {
    return this.inventoriesService.findOne(+id);
  }

  @Get('by-book/:bookId')
  @ApiOkResponse({ type: InventoryEntity, isArray: true })
  findBook(@Param('bookId') bookId: string) {
    return this.inventoriesService.findBook(+bookId);
  }

  @Patch(':id')
  @ApiOkResponse({ type: InventoryEntity })
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoriesService.update(+id, updateInventoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: InventoryEntity })
  remove(@Param('id') id: string) {
    return this.inventoriesService.remove(+id);
  }
}
