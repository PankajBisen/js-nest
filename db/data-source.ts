import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: 'postgres',
    password: 'root',
    database: process.env.DB_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    //migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    // cli: {
    //     migrationsDir: __dirname + '/../migrations',
    // },
    // extra: {
    //     charset: 'uft8mb4_unicode_ci',
    // },
    //logging: true
    migrations: ['dist/db/migration/*.js']
}

const daatSource = new DataSource(dataSourceOptions);
export default daatSource;