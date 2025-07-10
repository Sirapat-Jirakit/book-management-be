import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoriesService {
  constructor(private prisma: PrismaService) {}

  create(createInventoryDto: CreateInventoryDto) {
    return this.prisma.inventory.create({ data: createInventoryDto });
  }

  findAll() {
    return this.prisma.inventory.findMany();
  }

  findOne(id: number) {
    return this.prisma.inventory.findUnique({ where: { id } });
  }

  findBook(bookId: number) {
    return this.prisma.inventory.findMany({
      where: { bookId },
      include: { book: true },
    });
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return this.prisma.inventory.update({
      where: { id },
      data: updateInventoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.inventory.delete({ where: { id } });
  }
}
