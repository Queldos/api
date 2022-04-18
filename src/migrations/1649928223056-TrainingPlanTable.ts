import {MigrationInterface, QueryRunner} from "typeorm";

export class TrainingPlanTable1649928223056 implements MigrationInterface {
    name = 'TrainingPlanTable1649928223056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "training_plan" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT '', "date_time_with_timezone" date NOT NULL, CONSTRAINT "PK_120d1ea63cbd602a8f68f941a50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "training_plan"`);
    }

}
