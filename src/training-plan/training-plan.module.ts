import { Module } from '@nestjs/common';
import { TrainingPlanController } from './controllers/training-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingPlanEntity } from './models/post.entity';
import { TrainingPlanService } from './services/training-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanEntity])],
  providers: [TrainingPlanService],
  controllers: [TrainingPlanController],
})
export class TrainingPlanModule {}
