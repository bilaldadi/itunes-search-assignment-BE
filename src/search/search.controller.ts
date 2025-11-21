import { Controller, Get,Param } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResDto } from './dto/search-res.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':query')
  async search(@Param('query') query: string): Promise<SearchResDto> {
    return this.searchService.search(query);
  }
}
