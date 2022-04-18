import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanController } from './training-plan.controller';

describe('TrainingPlanService', () => {
  let service: TrainingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingPlanController],
    }).compile();

    service = module.get<TrainingPlanController>(TrainingPlanController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
