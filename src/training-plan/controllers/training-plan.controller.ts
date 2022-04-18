import { TrainingPlanService } from '../services/training-plan.service';
import { Body, Controller, Post, Request } from '@nestjs/common';
import { TrainingPlanPost } from '../models/post.interface';
import { Observable } from 'rxjs';

@Controller('training-plan')
export class TrainingPlanController {
  constructor(private planService: TrainingPlanService) {}

  @Post()
  create(@Body() plan: TrainingPlanPost): Observable<TrainingPlanPost> {
    return this.planService.createTrainingPlan(plan);
  }
}
