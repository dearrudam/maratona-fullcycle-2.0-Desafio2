import {MigrationInterface, QueryRunner, Table} from "typeorm";

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class maratona1588833520930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'maratona',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'aula',
                    type: 'varchar'
                },
            ]
            
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('maratone');
    }

}
