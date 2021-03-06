import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController Unit Test', () => {
  let testController: TestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService],
    }).compile();

    testController = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(testController).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(testController.getHello()).toBe('Hello World!');
    });
  });
});
