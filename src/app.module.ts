import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { searchResults } from './search/entities/search.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type:'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'postgres',
    entities: [searchResults],
    synchronize: true,
  }),
  SearchModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
