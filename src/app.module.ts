import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [BandModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
