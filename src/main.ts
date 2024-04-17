import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const config = new DocumentBuilder()
    .setTitle("Pets APIs")
    .setDescription("The pets API description")
    .setVersion("1.0")
    .addTag("pets")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(port, () => {
    console.log("Project is running on port:", port);
  });
}
bootstrap();
