import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RenameColInArticleTable1649931600636 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
