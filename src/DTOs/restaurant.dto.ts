import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class createRestaurant extends OmitType(Restaurant, ['id'], InputType) {}
