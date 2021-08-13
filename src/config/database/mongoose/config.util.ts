export default class MongooseConfigUtil {
  static createMongooseConnectionString(
    user: string,
    password: string,
    host: string,
    port: number,
    db: string,
  ): string {
    return (
      'mongodb://' + user + ':' + password + '@' + host + ':' + port + '/' + db
    );
  }
}
