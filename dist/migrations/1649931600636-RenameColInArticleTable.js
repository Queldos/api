"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameColInArticleTable1649931600636 = void 0;
class RenameColInArticleTable1649931600636 {
    constructor() {
        this.name = 'RenameColInArticleTable1649931600636';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "name" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "date_time_with_timezone"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "date_time_with_timezone" TIMESTAMP NOT NULL DEFAULT now()`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "date_time_with_timezone"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "date_time_with_timezone" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "training_plan" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "training_plan" ADD "title" character varying NOT NULL DEFAULT ''`);
    }
}
exports.RenameColInArticleTable1649931600636 = RenameColInArticleTable1649931600636;
//# sourceMappingURL=1649931600636-RenameColInArticleTable.js.map