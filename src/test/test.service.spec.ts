import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';

describe('TestService Unit Test', () => {
  let testService: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    testService = module.get<TestService>(TestService);
  });

  it('should be defined', () => {
    expect(testService).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(testService.getHello()).toBe('Hello World!');
    });
  });
});
