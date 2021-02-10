import { Controller, Get, Query } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { exDto } from './dto/ex.dto';

@ApiTags("Example Api")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('exampleValue') exampleValue: exDto) {
    return this.appService.getHello();
  }
}
