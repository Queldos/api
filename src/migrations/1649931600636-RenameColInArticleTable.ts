import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColInArticleTable1649931600636 implements MigrationInterface {
    name = 'RenameColInArticleTable1649931600636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "name" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "date_time_with_timezone"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "date_time_with_timezone" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "date_time_with_timezone"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "date_time_with_timezone" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "title" character varying NOT NULL DEFAULT ''`);
    }

}
