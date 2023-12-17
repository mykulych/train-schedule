import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsInt()
  capacity: number;
}
