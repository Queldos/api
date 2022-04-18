"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingPlanTable1649928223056 = void 0;
class TrainingPlanTable1649928223056 {
    constructor() {
        this.name = 'TrainingPlanTable1649928223056';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "training_plan" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT '', "date_time_with_timezone" date NOT NULL, CONSTRAINT "PK_120d1ea63cbd602a8f68f941a50" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "training_plan"`);
    }
}
exports.TrainingPlanTable1649928223056 = TrainingPlanTable1649928223056;
//# sourceMappingURL=1649928223056-TrainingPlanTable.js.map