import { ApiProperty } from '@nestjs/swagger';
import { ResultInfoEntity } from './result.info.entity';

export class ResultEntity<T> {
  @ApiProperty({ type: Array })
  data: T[];

  @ApiProperty({ type: ResultInfoEntity })
  info: ResultInfoEntity;
}
