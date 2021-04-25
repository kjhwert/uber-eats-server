import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';
import { createRestaurant } from '../../DTOs/restaurant.dto';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.index();
  }

  @Mutation(returns => Boolean)
  createRestaurant(
    @Args('restaurant') createRestaurant: createRestaurant,
  ): Promise<Restaurant> {
    return this.restaurantService.create(createRestaurant);
  }
}
