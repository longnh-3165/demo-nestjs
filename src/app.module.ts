import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VocabularyModule } from "./vocabulary/vocabulary.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "ngo.hoang.long@sun-asterisk.com",
      password: "Aa@123456",
      database: "vocabulary-demo-db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    VocabularyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
