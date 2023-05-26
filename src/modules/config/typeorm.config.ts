// // import { ConfigModule, ConfigService } from '@nestjs/config';
// // import {
// //   TypeOrmModuleAsyncOptions,
// //   TypeOrmModuleOptions,
// // } from '@nestjs/typeorm';

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// // export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
// //   imports: [ConfigModule],
// //   inject: [ConfigService],
// //   useFactory: async (): Promise<TypeOrmModuleOptions> => {
// //     return {
// //       type: 'mysql',
// //       host: process.env.DB_HOST,
// //       port: parseInt(process.env.DB_PORT, 10),
// //       username: process.env.DB_USERNAME,
// //       database: process.env.DB_NAME,
// //       password: process.env.DB_PASSWORD,
// //       entities: [__dirname + '/../**/*.entity.{js,ts}'],
// //       migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
// //       cli: {
// //         migrationsDir: __dirname + '/../database/migrations',
// //       },
// //       extra: {
// //         charset: 'utf8mb4_unicode_ci',
// //       },
// //       synchronize: false,
// //       logging: true,
// //     };
// //   },
// // };

// // export const typeOrmConfig: TypeOrmModuleOptions = {
// //   type: 'mysql',
// //   host: process.env.DB_HOST,
// //   port: parseInt(process.env.DB_PORT, 10),
// //   username: process.env.DB_USERNAME,
// //   database: process.env.DB_NAME,
// //   password: process.env.DB_PASSWORD,
// //   entities: [__dirname + '/../**/*.entity.{js,ts}'],
// //   migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
// //   cli: {
// //     migrationsDir: __dirname + '/../database/migrations',
// //   },
// //   extra: {
// //     charset: 'utf8mb4_unicode_ci',
// //   },
// //   synchronize: false,
// //   logging: true,
// // };

// import { DataSource, DataSourceOptions } from "typeorm";

// export const dataSourceOptions: DataSourceOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: parseInt("3306", 10),
//     username: 'postgres',
//     password: 'root',
//     database: process.env.DB_NAME,
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],  
//     //migrations: [__dirname + '/../migrations/*{.ts,.js}'],
//     // cli: {
//     //     migrationsDir: __dirname + '/../migrations',
//     // },
//     // extra: {
//     //     charset: 'uft8mb4_unicode_ci',
//     // },
//     //logging: true
//     synchronize: false,
//     migrations: ['dist/db/migration/*{.ts,.js}'],
//     // migrationsTableName: "migrations_typeorm",
//     // migrationsRun: true
// }

// const daatSource = new DataSource(dataSourceOptions);
// export default daatSource;

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: 'root',
    password: 'root',
    database: "quiz",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: true,

}