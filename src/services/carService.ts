import { PrismaClient } from '@prisma/client';
import { CarCreateDTO } from '../types/car';

export default class CarService {
  private prisma = new PrismaClient();

  public async create(data: CarCreateDTO) {
    return this.prisma.car.create({ data });
  }

  public async getById(id: number) {
    return this.prisma.car.findUnique({ where: { id } });
  }

  public async getAll() {
    return this.prisma.car.findMany({ orderBy: { id: 'asc' } });
  }

  public async delete(id: number) {
    const existing = await this.prisma.car.findUnique({ where: { id } });
    if (!existing) return null;
    await this.prisma.car.delete({ where: { id } });
    return true;
  }
}
