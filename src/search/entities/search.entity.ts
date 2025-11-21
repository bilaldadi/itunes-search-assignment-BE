import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SearchResDto } from "../dto/search-res.dto";

@Entity('search_results')
export class searchResults {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    search_query: string;

    @Column({ type: 'jsonb' })
    results: SearchResDto;

    @CreateDateColumn()
    created_at: Date;

}
