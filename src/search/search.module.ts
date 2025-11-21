import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { searchResults } from './entities/search.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([searchResults])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
