import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from '../../entities/restaurant.entity';
import { createRestaurantDto } from '../../DTOs/restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.index();
  }

  @Mutation(returns => Boolean)
  createRestaurant(@Args() createRestaurant: createRestaurantDto): boolean {
    console.log(createRestaurant);
    return true;
  }
}
