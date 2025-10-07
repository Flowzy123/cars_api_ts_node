import { Request, Response } from 'express';
import CarService from '../services/carService';
import { carCreateSchema } from '../validators/carValidator';

export default class CarController {
  private service = new CarService();

  public async create(req: Request, res: Response) {
    try {
      const parsed = carCreateSchema.parse(req.body);
      const car = await this.service.create(parsed);
      return res.status(201).json(car);
    } catch (err: any) {
      return res.status(400).json({ error: err?.message ?? String(err) });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (!id) return res.status(400).json({ error: 'Invalid id' });
      const car = await this.service.getById(id);
      if (!car) return res.status(404).json({ error: 'Car not found' });
      return res.json(car);
    } catch (err: any) {
      return res.status(500).json({ error: err?.message ?? String(err) });
    }
  }

  public async getAll(_req: Request, res: Response) {
    try {
      const cars = await this.service.getAll();
      return res.json(cars);
    } catch (err: any) {
      return res.status(500).json({ error: err?.message ?? String(err) });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (!id) return res.status(400).json({ error: 'Invalid id' });
      const deleted = await this.service.delete(id);
      if (!deleted) return res.status(404).json({ error: 'Car not found' });
      return res.json({ success: true });
    } catch (err: any) {
      return res.status(500).json({ error: err?.message ?? String(err) });
    }
  }
}
