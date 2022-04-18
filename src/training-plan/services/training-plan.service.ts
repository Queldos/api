import { Injectable } from '@nestjs/common';
import { TrainingPlanEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingPlanPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class TrainingPlanService {
  constructor(
    @InjectRepository(TrainingPlanEntity)
    private readonly trainingPlanPostRepository: Repository<TrainingPlanEntity>,
  ) {}

  createTrainingPlan(plan: TrainingPlanPost): Observable<TrainingPlanPost> {
    return from(this.trainingPlanPostRepository.save(plan));
  }
}
