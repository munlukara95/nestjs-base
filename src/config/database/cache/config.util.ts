export default class RedisConfigUtil {
  static createRedisCacheConnectionString(
    password: string,
    host: string,
    port: number,
  ): string {
    return 'redis://' + ':' + password + '@' + host + ':' + port;
  }
}
