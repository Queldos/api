import { TrainingPlanService } from '../services/training-plan.service';
import { TrainingPlanPost } from '../models/post.interface';
import { Observable } from 'rxjs';
export declare class TrainingPlanController {
    private planService;
    constructor(planService: TrainingPlanService);
    create(plan: TrainingPlanPost): Observable<TrainingPlanPost>;
}
