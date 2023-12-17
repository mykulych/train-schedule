import { Injectable } from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Train } from './entities/train.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrainsService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) {}
  create(createTrainDto: CreateTrainDto) {
    const train: Train = new Train();
    train.name = createTrainDto.name;
    train.capacity = createTrainDto.capacity;
    return this.trainRepository.save(train);
  }

  findAll() {
    return this.trainRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} train`;
  }

  update(id: number, updateTrainDto: UpdateTrainDto) {
    return `This action updates a #${id} train`;
  }

  remove(id: number) {
    return `This action removes a #${id} train`;
  }
}
