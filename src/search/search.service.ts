import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { searchResults } from './entities/search.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { SearchResDto } from './dto/search-res.dto';

@Injectable()
export class SearchService {
 constructor(
  private readonly http: HttpService,
  @InjectRepository(searchResults)
  private readonly searchResultsRepository: Repository<searchResults>
 ) {}

  async search(query: string): Promise<SearchResDto> {
    const searchUrl = `https://itunes.apple.com/search?term=${query}&country=SA`;
    const response = await firstValueFrom(this.http.get(searchUrl)) ;

    const FormattedResults :SearchResDto = {
      resultCount: response.data.resultCount,
      results: response.data.results,
    };

    const searchResult = this.searchResultsRepository.create({
      search_query: query,
      results: FormattedResults,
    });
    await this.searchResultsRepository.save(searchResult);
    return FormattedResults;
  }
}
