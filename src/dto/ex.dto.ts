import { ApiProperty } from "@nestjs/swagger";

export class exDto {
  @ApiProperty({
    type: String,
    description: 'desc...',
    examples: [
      {'value1' : {value: 'foo1'}},
      {'value2' : {value: 'foo2'}}
    ]
  })
  value: string
}