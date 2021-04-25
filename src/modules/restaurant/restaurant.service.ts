import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from '../../entities/restaurant.entity';
import { Repository } from 'typeorm';
import { createRestaurant } from '../../DTOs/restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  index(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  create(restaurant: createRestaurant): Promise<Restaurant> {
    try {
      const newRestaurant = this.restaurantRepository.create(restaurant);
      return this.restaurantRepository.save(newRestaurant);
    } catch (e) {
      console.log(e.message);
    }
  }
}
