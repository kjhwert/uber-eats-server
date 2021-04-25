import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../../entities/restaurant.entity';

@InputType()
export class CreateRestaurant extends OmitType(Restaurant, ['id'], InputType) {}

@ArgsType()
export class UpdateRestaurant {
  @Field(type => Number)
  id: number;

  @Field(type => CreateRestaurant)
  data: CreateRestaurant;
}
