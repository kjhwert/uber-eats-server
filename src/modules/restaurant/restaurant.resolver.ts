import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurant,
  UpdateRestaurant,
} from '../../DTOs/restaurant/restaurant.dto';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.index();
  }

  @Mutation(returns => Boolean)
  async createRestaurant(
    @Args('restaurant') createRestaurant: CreateRestaurant,
  ): Promise<boolean> {
    await this.restaurantService.create(createRestaurant);
    return true;
  }

  @Mutation(returns => Boolean)
  async updateRestaurant(@Args() data: UpdateRestaurant): Promise<boolean> {
    try {
      await this.restaurantService.update(data);
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
