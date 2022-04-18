import { TrainingPlanEntity } from '../models/post.entity';
import { Repository } from 'typeorm';
import { TrainingPlanPost } from '../models/post.interface';
import { Observable } from 'rxjs';
export declare class TrainingPlanService {
    private readonly trainingPlanPostRepository;
    constructor(trainingPlanPostRepository: Repository<TrainingPlanEntity>);
    createTrainingPlan(plan: TrainingPlanPost): Observable<TrainingPlanPost>;
}
