import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantResolver } from './restaurant.resolver';

describe('RestaurantsResolver', () => {
  let resolver: RestaurantResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantResolver],
    }).compile();

    resolver = module.get<RestaurantResolver>(RestaurantResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
