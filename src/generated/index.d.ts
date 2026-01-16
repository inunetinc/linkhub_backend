
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Ad
 * 
 */
export type Ad = $Result.DefaultSelection<Prisma.$AdPayload>
/**
 * Model AdRequest
 * 
 */
export type AdRequest = $Result.DefaultSelection<Prisma.$AdRequestPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ContentAnnouncement
 * 
 */
export type ContentAnnouncement = $Result.DefaultSelection<Prisma.$ContentAnnouncementPayload>
/**
 * Model CollaborationRequest
 * 
 */
export type CollaborationRequest = $Result.DefaultSelection<Prisma.$CollaborationRequestPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model OAuthToken
 * 
 */
export type OAuthToken = $Result.DefaultSelection<Prisma.$OAuthTokenPayload>
/**
 * Model PayoutSettings
 * 
 */
export type PayoutSettings = $Result.DefaultSelection<Prisma.$PayoutSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  CREATOR: 'CREATOR',
  BRAND: 'BRAND'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const Platform: {
  YOUTUBE: 'YOUTUBE',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  TWITCH: 'TWITCH',
  TWITTER: 'TWITTER',
  TIKTOK: 'TIKTOK'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const AdStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AdStatus = (typeof AdStatus)[keyof typeof AdStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const AnnouncementStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AnnouncementStatus = (typeof AnnouncementStatus)[keyof typeof AnnouncementStatus]


export const CollaborationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  AD_SELECTED: 'AD_SELECTED',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  PAID: 'PAID',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type CollaborationStatus = (typeof CollaborationStatus)[keyof typeof CollaborationStatus]


export const Niche: {
  TECH: 'TECH',
  GAMING: 'GAMING',
  BEAUTY: 'BEAUTY',
  FASHION: 'FASHION',
  FITNESS: 'FITNESS',
  FINANCE: 'FINANCE',
  FOOD: 'FOOD',
  TRAVEL: 'TRAVEL',
  LIFESTYLE: 'LIFESTYLE',
  EDUCATION: 'EDUCATION',
  SPORTS: 'SPORTS',
  MUSIC: 'MUSIC',
  COMEDY: 'COMEDY',
  BUSINESS: 'BUSINESS',
  HEALTH_WELLNESS: 'HEALTH_WELLNESS'
};

export type Niche = (typeof Niche)[keyof typeof Niche]


export const Industry: {
  TECH: 'TECH',
  ECOMMERCE: 'ECOMMERCE',
  FINANCE: 'FINANCE',
  HEALTH: 'HEALTH',
  FOOD: 'FOOD',
  FASHION: 'FASHION',
  BEAUTY: 'BEAUTY',
  TRAVEL: 'TRAVEL',
  GAMING: 'GAMING',
  SPORTS: 'SPORTS',
  EDUCATION: 'EDUCATION',
  OTHER: 'OTHER'
};

export type Industry = (typeof Industry)[keyof typeof Industry]


export const BlogCategory: {
  GENERAL: 'GENERAL',
  CREATOR_TIPS: 'CREATOR_TIPS',
  BRAND_MARKETING: 'BRAND_MARKETING',
  INDUSTRY_NEWS: 'INDUSTRY_NEWS',
  TUTORIALS: 'TUTORIALS',
  CASE_STUDIES: 'CASE_STUDIES',
  PLATFORM_UPDATES: 'PLATFORM_UPDATES',
  SUCCESS_STORIES: 'SUCCESS_STORIES'
};

export type BlogCategory = (typeof BlogCategory)[keyof typeof BlogCategory]


export const NotificationType: {
  INFO: 'INFO',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  ANNOUNCEMENT: 'ANNOUNCEMENT'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const PayoutFrequency: {
  IMMEDIATE: 'IMMEDIATE',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type PayoutFrequency = (typeof PayoutFrequency)[keyof typeof PayoutFrequency]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type AdStatus = $Enums.AdStatus

export const AdStatus: typeof $Enums.AdStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type AnnouncementStatus = $Enums.AnnouncementStatus

export const AnnouncementStatus: typeof $Enums.AnnouncementStatus

export type CollaborationStatus = $Enums.CollaborationStatus

export const CollaborationStatus: typeof $Enums.CollaborationStatus

export type Niche = $Enums.Niche

export const Niche: typeof $Enums.Niche

export type Industry = $Enums.Industry

export const Industry: typeof $Enums.Industry

export type BlogCategory = $Enums.BlogCategory

export const BlogCategory: typeof $Enums.BlogCategory

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type PayoutFrequency = $Enums.PayoutFrequency

export const PayoutFrequency: typeof $Enums.PayoutFrequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **Ad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ads
    * const ads = await prisma.ad.findMany()
    * ```
    */
  get ad(): Prisma.AdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adRequest`: Exposes CRUD operations for the **AdRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdRequests
    * const adRequests = await prisma.adRequest.findMany()
    * ```
    */
  get adRequest(): Prisma.AdRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentAnnouncement`: Exposes CRUD operations for the **ContentAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentAnnouncements
    * const contentAnnouncements = await prisma.contentAnnouncement.findMany()
    * ```
    */
  get contentAnnouncement(): Prisma.ContentAnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaborationRequest`: Exposes CRUD operations for the **CollaborationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollaborationRequests
    * const collaborationRequests = await prisma.collaborationRequest.findMany()
    * ```
    */
  get collaborationRequest(): Prisma.CollaborationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthToken`: Exposes CRUD operations for the **OAuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthTokens
    * const oAuthTokens = await prisma.oAuthToken.findMany()
    * ```
    */
  get oAuthToken(): Prisma.OAuthTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payoutSettings`: Exposes CRUD operations for the **PayoutSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayoutSettings
    * const payoutSettings = await prisma.payoutSettings.findMany()
    * ```
    */
  get payoutSettings(): Prisma.PayoutSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Channel: 'Channel',
    Ad: 'Ad',
    AdRequest: 'AdRequest',
    Message: 'Message',
    ContentAnnouncement: 'ContentAnnouncement',
    CollaborationRequest: 'CollaborationRequest',
    BlogPost: 'BlogPost',
    ContactMessage: 'ContactMessage',
    Notification: 'Notification',
    OAuthToken: 'OAuthToken',
    PayoutSettings: 'PayoutSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "channel" | "ad" | "adRequest" | "message" | "contentAnnouncement" | "collaborationRequest" | "blogPost" | "contactMessage" | "notification" | "oAuthToken" | "payoutSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Ad: {
        payload: Prisma.$AdPayload<ExtArgs>
        fields: Prisma.AdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findFirst: {
            args: Prisma.AdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findMany: {
            args: Prisma.AdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          create: {
            args: Prisma.AdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          createMany: {
            args: Prisma.AdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          delete: {
            args: Prisma.AdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          update: {
            args: Prisma.AdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          deleteMany: {
            args: Prisma.AdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          upsert: {
            args: Prisma.AdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAd>
          }
          groupBy: {
            args: Prisma.AdGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdCountArgs<ExtArgs>
            result: $Utils.Optional<AdCountAggregateOutputType> | number
          }
        }
      }
      AdRequest: {
        payload: Prisma.$AdRequestPayload<ExtArgs>
        fields: Prisma.AdRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          findFirst: {
            args: Prisma.AdRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          findMany: {
            args: Prisma.AdRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>[]
          }
          create: {
            args: Prisma.AdRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          createMany: {
            args: Prisma.AdRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>[]
          }
          delete: {
            args: Prisma.AdRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          update: {
            args: Prisma.AdRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          deleteMany: {
            args: Prisma.AdRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>[]
          }
          upsert: {
            args: Prisma.AdRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdRequestPayload>
          }
          aggregate: {
            args: Prisma.AdRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdRequest>
          }
          groupBy: {
            args: Prisma.AdRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AdRequestCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ContentAnnouncement: {
        payload: Prisma.$ContentAnnouncementPayload<ExtArgs>
        fields: Prisma.ContentAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.ContentAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          findMany: {
            args: Prisma.ContentAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>[]
          }
          create: {
            args: Prisma.ContentAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          createMany: {
            args: Prisma.ContentAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentAnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>[]
          }
          delete: {
            args: Prisma.ContentAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          update: {
            args: Prisma.ContentAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.ContentAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentAnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.ContentAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.ContentAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentAnnouncement>
          }
          groupBy: {
            args: Prisma.ContentAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentAnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<ContentAnnouncementCountAggregateOutputType> | number
          }
        }
      }
      CollaborationRequest: {
        payload: Prisma.$CollaborationRequestPayload<ExtArgs>
        fields: Prisma.CollaborationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaborationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaborationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          findFirst: {
            args: Prisma.CollaborationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaborationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          findMany: {
            args: Prisma.CollaborationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>[]
          }
          create: {
            args: Prisma.CollaborationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          createMany: {
            args: Prisma.CollaborationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaborationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>[]
          }
          delete: {
            args: Prisma.CollaborationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          update: {
            args: Prisma.CollaborationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          deleteMany: {
            args: Prisma.CollaborationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaborationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaborationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>[]
          }
          upsert: {
            args: Prisma.CollaborationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationRequestPayload>
          }
          aggregate: {
            args: Prisma.CollaborationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaborationRequest>
          }
          groupBy: {
            args: Prisma.CollaborationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaborationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaborationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CollaborationRequestCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      OAuthToken: {
        payload: Prisma.$OAuthTokenPayload<ExtArgs>
        fields: Prisma.OAuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findFirst: {
            args: Prisma.OAuthTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findMany: {
            args: Prisma.OAuthTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          create: {
            args: Prisma.OAuthTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          createMany: {
            args: Prisma.OAuthTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          delete: {
            args: Prisma.OAuthTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          update: {
            args: Prisma.OAuthTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.OAuthTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuthTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          upsert: {
            args: Prisma.OAuthTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          aggregate: {
            args: Prisma.OAuthTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthToken>
          }
          groupBy: {
            args: Prisma.OAuthTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenCountAggregateOutputType> | number
          }
        }
      }
      PayoutSettings: {
        payload: Prisma.$PayoutSettingsPayload<ExtArgs>
        fields: Prisma.PayoutSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          findFirst: {
            args: Prisma.PayoutSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          findMany: {
            args: Prisma.PayoutSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>[]
          }
          create: {
            args: Prisma.PayoutSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          createMany: {
            args: Prisma.PayoutSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>[]
          }
          delete: {
            args: Prisma.PayoutSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          update: {
            args: Prisma.PayoutSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PayoutSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayoutSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PayoutSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutSettingsPayload>
          }
          aggregate: {
            args: Prisma.PayoutSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayoutSettings>
          }
          groupBy: {
            args: Prisma.PayoutSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    channel?: ChannelOmit
    ad?: AdOmit
    adRequest?: AdRequestOmit
    message?: MessageOmit
    contentAnnouncement?: ContentAnnouncementOmit
    collaborationRequest?: CollaborationRequestOmit
    blogPost?: BlogPostOmit
    contactMessage?: ContactMessageOmit
    notification?: NotificationOmit
    oAuthToken?: OAuthTokenOmit
    payoutSettings?: PayoutSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    channels: number
    ads: number
    adRequests: number
    sentMessages: number
    receivedMessages: number
    contentAnnouncements: number
    sentCollabRequests: number
    receivedCollabRequests: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | UserCountOutputTypeCountChannelsArgs
    ads?: boolean | UserCountOutputTypeCountAdsArgs
    adRequests?: boolean | UserCountOutputTypeCountAdRequestsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    contentAnnouncements?: boolean | UserCountOutputTypeCountContentAnnouncementsArgs
    sentCollabRequests?: boolean | UserCountOutputTypeCountSentCollabRequestsArgs
    receivedCollabRequests?: boolean | UserCountOutputTypeCountReceivedCollabRequestsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentAnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentCollabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedCollabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type AdCountOutputType
   */

  export type AdCountOutputType = {
    adRequests: number
    collabRequests: number
  }

  export type AdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adRequests?: boolean | AdCountOutputTypeCountAdRequestsArgs
    collabRequests?: boolean | AdCountOutputTypeCountCollabRequestsArgs
  }

  // Custom InputTypes
  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCountOutputType
     */
    select?: AdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountAdRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdRequestWhereInput
  }

  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountCollabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationRequestWhereInput
  }


  /**
   * Count Type ContentAnnouncementCountOutputType
   */

  export type ContentAnnouncementCountOutputType = {
    collaborationRequests: number
  }

  export type ContentAnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborationRequests?: boolean | ContentAnnouncementCountOutputTypeCountCollaborationRequestsArgs
  }

  // Custom InputTypes
  /**
   * ContentAnnouncementCountOutputType without action
   */
  export type ContentAnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncementCountOutputType
     */
    select?: ContentAnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentAnnouncementCountOutputType without action
   */
  export type ContentAnnouncementCountOutputTypeCountCollaborationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    type: $Enums.UserType | null
    googleId: string | null
    bio: string | null
    location: string | null
    website: string | null
    avatar: string | null
    industry: $Enums.Industry | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    type: $Enums.UserType | null
    googleId: string | null
    bio: string | null
    location: string | null
    website: string | null
    avatar: string | null
    industry: $Enums.Industry | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    type: number
    googleId: number
    bio: number
    location: number
    website: number
    avatar: number
    niches: number
    industry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    type?: true
    googleId?: true
    bio?: true
    location?: true
    website?: true
    avatar?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    type?: true
    googleId?: true
    bio?: true
    location?: true
    website?: true
    avatar?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    type?: true
    googleId?: true
    bio?: true
    location?: true
    website?: true
    avatar?: true
    niches?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    type: $Enums.UserType | null
    googleId: string | null
    bio: string | null
    location: string | null
    website: string | null
    avatar: string | null
    niches: $Enums.Niche[]
    industry: $Enums.Industry | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    type?: boolean
    googleId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    avatar?: boolean
    niches?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channels?: boolean | User$channelsArgs<ExtArgs>
    ads?: boolean | User$adsArgs<ExtArgs>
    adRequests?: boolean | User$adRequestsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    contentAnnouncements?: boolean | User$contentAnnouncementsArgs<ExtArgs>
    sentCollabRequests?: boolean | User$sentCollabRequestsArgs<ExtArgs>
    receivedCollabRequests?: boolean | User$receivedCollabRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    payoutSettings?: boolean | User$payoutSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    type?: boolean
    googleId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    avatar?: boolean
    niches?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    type?: boolean
    googleId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    avatar?: boolean
    niches?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    type?: boolean
    googleId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    avatar?: boolean
    niches?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "type" | "googleId" | "bio" | "location" | "website" | "avatar" | "niches" | "industry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | User$channelsArgs<ExtArgs>
    ads?: boolean | User$adsArgs<ExtArgs>
    adRequests?: boolean | User$adRequestsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    contentAnnouncements?: boolean | User$contentAnnouncementsArgs<ExtArgs>
    sentCollabRequests?: boolean | User$sentCollabRequestsArgs<ExtArgs>
    receivedCollabRequests?: boolean | User$receivedCollabRequestsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    payoutSettings?: boolean | User$payoutSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      channels: Prisma.$ChannelPayload<ExtArgs>[]
      ads: Prisma.$AdPayload<ExtArgs>[]
      adRequests: Prisma.$AdRequestPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      contentAnnouncements: Prisma.$ContentAnnouncementPayload<ExtArgs>[]
      sentCollabRequests: Prisma.$CollaborationRequestPayload<ExtArgs>[]
      receivedCollabRequests: Prisma.$CollaborationRequestPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      payoutSettings: Prisma.$PayoutSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      type: $Enums.UserType | null
      googleId: string | null
      bio: string | null
      location: string | null
      website: string | null
      avatar: string | null
      niches: $Enums.Niche[]
      industry: $Enums.Industry | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends User$channelsArgs<ExtArgs> = {}>(args?: Subset<T, User$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ads<T extends User$adsArgs<ExtArgs> = {}>(args?: Subset<T, User$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adRequests<T extends User$adRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$adRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentAnnouncements<T extends User$contentAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentCollabRequests<T extends User$sentCollabRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentCollabRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedCollabRequests<T extends User$receivedCollabRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedCollabRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payoutSettings<T extends User$payoutSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$payoutSettingsArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly niches: FieldRef<"User", 'Niche[]'>
    readonly industry: FieldRef<"User", 'Industry'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.channels
   */
  export type User$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * User.ads
   */
  export type User$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    cursor?: AdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * User.adRequests
   */
  export type User$adRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    where?: AdRequestWhereInput
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    cursor?: AdRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdRequestScalarFieldEnum | AdRequestScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.contentAnnouncements
   */
  export type User$contentAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    where?: ContentAnnouncementWhereInput
    orderBy?: ContentAnnouncementOrderByWithRelationInput | ContentAnnouncementOrderByWithRelationInput[]
    cursor?: ContentAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentAnnouncementScalarFieldEnum | ContentAnnouncementScalarFieldEnum[]
  }

  /**
   * User.sentCollabRequests
   */
  export type User$sentCollabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    where?: CollaborationRequestWhereInput
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    cursor?: CollaborationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * User.receivedCollabRequests
   */
  export type User$receivedCollabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    where?: CollaborationRequestWhereInput
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    cursor?: CollaborationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.payoutSettings
   */
  export type User$payoutSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    where?: PayoutSettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    subscribers: number | null
    friendsCount: number | null
  }

  export type ChannelSumAggregateOutputType = {
    subscribers: number | null
    friendsCount: number | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    channelId: string | null
    channelName: string | null
    verified: boolean | null
    subscribers: number | null
    friendsCount: number | null
    thumbnail: string | null
    customUrl: string | null
    description: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    lastRefreshedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    channelId: string | null
    channelName: string | null
    verified: boolean | null
    subscribers: number | null
    friendsCount: number | null
    thumbnail: string | null
    customUrl: string | null
    description: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    lastRefreshedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    userId: number
    platform: number
    channelId: number
    channelName: number
    verified: number
    subscribers: number
    friendsCount: number
    thumbnail: number
    customUrl: number
    description: number
    analytics: number
    accessToken: number
    refreshToken: number
    tokenExpiresAt: number
    lastRefreshedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    subscribers?: true
    friendsCount?: true
  }

  export type ChannelSumAggregateInputType = {
    subscribers?: true
    friendsCount?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    channelId?: true
    channelName?: true
    verified?: true
    subscribers?: true
    friendsCount?: true
    thumbnail?: true
    customUrl?: true
    description?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    lastRefreshedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    channelId?: true
    channelName?: true
    verified?: true
    subscribers?: true
    friendsCount?: true
    thumbnail?: true
    customUrl?: true
    description?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    lastRefreshedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    channelId?: true
    channelName?: true
    verified?: true
    subscribers?: true
    friendsCount?: true
    thumbnail?: true
    customUrl?: true
    description?: true
    analytics?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    lastRefreshedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    userId: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified: boolean
    subscribers: number | null
    friendsCount: number | null
    thumbnail: string | null
    customUrl: string | null
    description: string | null
    analytics: JsonValue | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    lastRefreshedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    channelId?: boolean
    channelName?: boolean
    verified?: boolean
    subscribers?: boolean
    friendsCount?: boolean
    thumbnail?: boolean
    customUrl?: boolean
    description?: boolean
    analytics?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    lastRefreshedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    channelId?: boolean
    channelName?: boolean
    verified?: boolean
    subscribers?: boolean
    friendsCount?: boolean
    thumbnail?: boolean
    customUrl?: boolean
    description?: boolean
    analytics?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    lastRefreshedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    channelId?: boolean
    channelName?: boolean
    verified?: boolean
    subscribers?: boolean
    friendsCount?: boolean
    thumbnail?: boolean
    customUrl?: boolean
    description?: boolean
    analytics?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    lastRefreshedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    userId?: boolean
    platform?: boolean
    channelId?: boolean
    channelName?: boolean
    verified?: boolean
    subscribers?: boolean
    friendsCount?: boolean
    thumbnail?: boolean
    customUrl?: boolean
    description?: boolean
    analytics?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    lastRefreshedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platform" | "channelId" | "channelName" | "verified" | "subscribers" | "friendsCount" | "thumbnail" | "customUrl" | "description" | "analytics" | "accessToken" | "refreshToken" | "tokenExpiresAt" | "lastRefreshedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platform: $Enums.Platform
      channelId: string
      channelName: string
      verified: boolean
      subscribers: number | null
      friendsCount: number | null
      thumbnail: string | null
      customUrl: string | null
      description: string | null
      analytics: Prisma.JsonValue | null
      accessToken: string | null
      refreshToken: string | null
      tokenExpiresAt: Date | null
      lastRefreshedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels and returns the data updated in the database.
     * @param {ChannelUpdateManyAndReturnArgs} args - Arguments to update many Channels.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, ChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly userId: FieldRef<"Channel", 'String'>
    readonly platform: FieldRef<"Channel", 'Platform'>
    readonly channelId: FieldRef<"Channel", 'String'>
    readonly channelName: FieldRef<"Channel", 'String'>
    readonly verified: FieldRef<"Channel", 'Boolean'>
    readonly subscribers: FieldRef<"Channel", 'Int'>
    readonly friendsCount: FieldRef<"Channel", 'Int'>
    readonly thumbnail: FieldRef<"Channel", 'String'>
    readonly customUrl: FieldRef<"Channel", 'String'>
    readonly description: FieldRef<"Channel", 'String'>
    readonly analytics: FieldRef<"Channel", 'Json'>
    readonly accessToken: FieldRef<"Channel", 'String'>
    readonly refreshToken: FieldRef<"Channel", 'String'>
    readonly tokenExpiresAt: FieldRef<"Channel", 'DateTime'>
    readonly lastRefreshedAt: FieldRef<"Channel", 'DateTime'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel updateManyAndReturn
   */
  export type ChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model Ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  export type AdAvgAggregateOutputType = {
    videoDurations: number | null
  }

  export type AdSumAggregateOutputType = {
    videoDurations: number[]
  }

  export type AdMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    title: string | null
    description: string | null
    talkingPoints: string | null
    guidelines: string | null
    scriptRequired: boolean | null
    status: $Enums.AdStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    title: string | null
    description: string | null
    talkingPoints: string | null
    guidelines: string | null
    scriptRequired: boolean | null
    status: $Enums.AdStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdCountAggregateOutputType = {
    id: number
    brandId: number
    title: number
    description: number
    targetNiches: number
    images: number
    videos: number
    videoDurations: number
    talkingPoints: number
    guidelines: number
    scriptRequired: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdAvgAggregateInputType = {
    videoDurations?: true
  }

  export type AdSumAggregateInputType = {
    videoDurations?: true
  }

  export type AdMinAggregateInputType = {
    id?: true
    brandId?: true
    title?: true
    description?: true
    talkingPoints?: true
    guidelines?: true
    scriptRequired?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdMaxAggregateInputType = {
    id?: true
    brandId?: true
    title?: true
    description?: true
    talkingPoints?: true
    guidelines?: true
    scriptRequired?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdCountAggregateInputType = {
    id?: true
    brandId?: true
    title?: true
    description?: true
    targetNiches?: true
    images?: true
    videos?: true
    videoDurations?: true
    talkingPoints?: true
    guidelines?: true
    scriptRequired?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ad to aggregate.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ads
    **/
    _count?: true | AdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMaxAggregateInputType
  }

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
        [P in keyof T & keyof AggregateAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>
  }




  export type AdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
    orderBy?: AdOrderByWithAggregationInput | AdOrderByWithAggregationInput[]
    by: AdScalarFieldEnum[] | AdScalarFieldEnum
    having?: AdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCountAggregateInputType | true
    _avg?: AdAvgAggregateInputType
    _sum?: AdSumAggregateInputType
    _min?: AdMinAggregateInputType
    _max?: AdMaxAggregateInputType
  }

  export type AdGroupByOutputType = {
    id: string
    brandId: string
    title: string
    description: string | null
    targetNiches: $Enums.Niche[]
    images: string[]
    videos: string[]
    videoDurations: number[]
    talkingPoints: string | null
    guidelines: string | null
    scriptRequired: boolean
    status: $Enums.AdStatus
    createdAt: Date
    updatedAt: Date
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  type GetAdGroupByPayload<T extends AdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupByOutputType[P]>
        }
      >
    >


  export type AdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    title?: boolean
    description?: boolean
    targetNiches?: boolean
    images?: boolean
    videos?: boolean
    videoDurations?: boolean
    talkingPoints?: boolean
    guidelines?: boolean
    scriptRequired?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
    adRequests?: boolean | Ad$adRequestsArgs<ExtArgs>
    collabRequests?: boolean | Ad$collabRequestsArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    title?: boolean
    description?: boolean
    targetNiches?: boolean
    images?: boolean
    videos?: boolean
    videoDurations?: boolean
    talkingPoints?: boolean
    guidelines?: boolean
    scriptRequired?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    title?: boolean
    description?: boolean
    targetNiches?: boolean
    images?: boolean
    videos?: boolean
    videoDurations?: boolean
    talkingPoints?: boolean
    guidelines?: boolean
    scriptRequired?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectScalar = {
    id?: boolean
    brandId?: boolean
    title?: boolean
    description?: boolean
    targetNiches?: boolean
    images?: boolean
    videos?: boolean
    videoDurations?: boolean
    talkingPoints?: boolean
    guidelines?: boolean
    scriptRequired?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "title" | "description" | "targetNiches" | "images" | "videos" | "videoDurations" | "talkingPoints" | "guidelines" | "scriptRequired" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["ad"]>
  export type AdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
    adRequests?: boolean | Ad$adRequestsArgs<ExtArgs>
    collabRequests?: boolean | Ad$collabRequestsArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ad"
    objects: {
      brand: Prisma.$UserPayload<ExtArgs>
      adRequests: Prisma.$AdRequestPayload<ExtArgs>[]
      collabRequests: Prisma.$CollaborationRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      title: string
      description: string | null
      targetNiches: $Enums.Niche[]
      images: string[]
      videos: string[]
      videoDurations: number[]
      talkingPoints: string | null
      guidelines: string | null
      scriptRequired: boolean
      status: $Enums.AdStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ad"]>
    composites: {}
  }

  type AdGetPayload<S extends boolean | null | undefined | AdDefaultArgs> = $Result.GetResult<Prisma.$AdPayload, S>

  type AdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdCountAggregateInputType | true
    }

  export interface AdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ad'], meta: { name: 'Ad' } }
    /**
     * Find zero or one Ad that matches the filter.
     * @param {AdFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdFindUniqueArgs>(args: SelectSubset<T, AdFindUniqueArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdFindUniqueOrThrowArgs>(args: SelectSubset<T, AdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdFindFirstArgs>(args?: SelectSubset<T, AdFindFirstArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdFindFirstOrThrowArgs>(args?: SelectSubset<T, AdFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     * 
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adWithIdOnly = await prisma.ad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdFindManyArgs>(args?: SelectSubset<T, AdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ad.
     * @param {AdCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     * 
     */
    create<T extends AdCreateArgs>(args: SelectSubset<T, AdCreateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ads.
     * @param {AdCreateManyArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdCreateManyArgs>(args?: SelectSubset<T, AdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ads and returns the data saved in the database.
     * @param {AdCreateManyAndReturnArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdCreateManyAndReturnArgs>(args?: SelectSubset<T, AdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ad.
     * @param {AdDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     * 
     */
    delete<T extends AdDeleteArgs>(args: SelectSubset<T, AdDeleteArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ad.
     * @param {AdUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdUpdateArgs>(args: SelectSubset<T, AdUpdateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ads.
     * @param {AdDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdDeleteManyArgs>(args?: SelectSubset<T, AdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdUpdateManyArgs>(args: SelectSubset<T, AdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads and returns the data updated in the database.
     * @param {AdUpdateManyAndReturnArgs} args - Arguments to update many Ads.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdUpdateManyAndReturnArgs>(args: SelectSubset<T, AdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ad.
     * @param {AdUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
     */
    upsert<T extends AdUpsertArgs>(args: SelectSubset<T, AdUpsertArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends AdCountArgs>(
      args?: Subset<T, AdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdAggregateArgs>(args: Subset<T, AdAggregateArgs>): Prisma.PrismaPromise<GetAdAggregateType<T>>

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ad model
   */
  readonly fields: AdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adRequests<T extends Ad$adRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Ad$adRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collabRequests<T extends Ad$collabRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Ad$collabRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ad model
   */
  interface AdFieldRefs {
    readonly id: FieldRef<"Ad", 'String'>
    readonly brandId: FieldRef<"Ad", 'String'>
    readonly title: FieldRef<"Ad", 'String'>
    readonly description: FieldRef<"Ad", 'String'>
    readonly targetNiches: FieldRef<"Ad", 'Niche[]'>
    readonly images: FieldRef<"Ad", 'String[]'>
    readonly videos: FieldRef<"Ad", 'String[]'>
    readonly videoDurations: FieldRef<"Ad", 'Int[]'>
    readonly talkingPoints: FieldRef<"Ad", 'String'>
    readonly guidelines: FieldRef<"Ad", 'String'>
    readonly scriptRequired: FieldRef<"Ad", 'Boolean'>
    readonly status: FieldRef<"Ad", 'AdStatus'>
    readonly createdAt: FieldRef<"Ad", 'DateTime'>
    readonly updatedAt: FieldRef<"Ad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ad findUnique
   */
  export type AdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findUniqueOrThrow
   */
  export type AdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findFirst
   */
  export type AdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findFirstOrThrow
   */
  export type AdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findMany
   */
  export type AdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ads to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad create
   */
  export type AdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to create a Ad.
     */
    data: XOR<AdCreateInput, AdUncheckedCreateInput>
  }

  /**
   * Ad createMany
   */
  export type AdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ad createManyAndReturn
   */
  export type AdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ad update
   */
  export type AdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to update a Ad.
     */
    data: XOR<AdUpdateInput, AdUncheckedUpdateInput>
    /**
     * Choose, which Ad to update.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad updateMany
   */
  export type AdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
  }

  /**
   * Ad updateManyAndReturn
   */
  export type AdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ad upsert
   */
  export type AdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The filter to search for the Ad to update in case it exists.
     */
    where: AdWhereUniqueInput
    /**
     * In case the Ad found by the `where` argument doesn't exist, create a new Ad with this data.
     */
    create: XOR<AdCreateInput, AdUncheckedCreateInput>
    /**
     * In case the Ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdUpdateInput, AdUncheckedUpdateInput>
  }

  /**
   * Ad delete
   */
  export type AdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter which Ad to delete.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad deleteMany
   */
  export type AdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to delete
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to delete.
     */
    limit?: number
  }

  /**
   * Ad.adRequests
   */
  export type Ad$adRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    where?: AdRequestWhereInput
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    cursor?: AdRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdRequestScalarFieldEnum | AdRequestScalarFieldEnum[]
  }

  /**
   * Ad.collabRequests
   */
  export type Ad$collabRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    where?: CollaborationRequestWhereInput
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    cursor?: CollaborationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * Ad without action
   */
  export type AdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
  }


  /**
   * Model AdRequest
   */

  export type AggregateAdRequest = {
    _count: AdRequestCountAggregateOutputType | null
    _min: AdRequestMinAggregateOutputType | null
    _max: AdRequestMaxAggregateOutputType | null
  }

  export type AdRequestMinAggregateOutputType = {
    id: string | null
    adId: string | null
    creatorId: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdRequestMaxAggregateOutputType = {
    id: string | null
    adId: string | null
    creatorId: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdRequestCountAggregateOutputType = {
    id: number
    adId: number
    creatorId: number
    status: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdRequestMinAggregateInputType = {
    id?: true
    adId?: true
    creatorId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdRequestMaxAggregateInputType = {
    id?: true
    adId?: true
    creatorId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdRequestCountAggregateInputType = {
    id?: true
    adId?: true
    creatorId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdRequest to aggregate.
     */
    where?: AdRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdRequests to fetch.
     */
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdRequests
    **/
    _count?: true | AdRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdRequestMaxAggregateInputType
  }

  export type GetAdRequestAggregateType<T extends AdRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAdRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdRequest[P]>
      : GetScalarType<T[P], AggregateAdRequest[P]>
  }




  export type AdRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdRequestWhereInput
    orderBy?: AdRequestOrderByWithAggregationInput | AdRequestOrderByWithAggregationInput[]
    by: AdRequestScalarFieldEnum[] | AdRequestScalarFieldEnum
    having?: AdRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdRequestCountAggregateInputType | true
    _min?: AdRequestMinAggregateInputType
    _max?: AdRequestMaxAggregateInputType
  }

  export type AdRequestGroupByOutputType = {
    id: string
    adId: string
    creatorId: string
    status: $Enums.RequestStatus
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdRequestCountAggregateOutputType | null
    _min: AdRequestMinAggregateOutputType | null
    _max: AdRequestMaxAggregateOutputType | null
  }

  type GetAdRequestGroupByPayload<T extends AdRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AdRequestGroupByOutputType[P]>
        }
      >
    >


  export type AdRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    creatorId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adRequest"]>

  export type AdRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    creatorId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adRequest"]>

  export type AdRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    creatorId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adRequest"]>

  export type AdRequestSelectScalar = {
    id?: boolean
    adId?: boolean
    creatorId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adId" | "creatorId" | "status" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["adRequest"]>
  export type AdRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdRequest"
    objects: {
      ad: Prisma.$AdPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adId: string
      creatorId: string
      status: $Enums.RequestStatus
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adRequest"]>
    composites: {}
  }

  type AdRequestGetPayload<S extends boolean | null | undefined | AdRequestDefaultArgs> = $Result.GetResult<Prisma.$AdRequestPayload, S>

  type AdRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdRequestCountAggregateInputType | true
    }

  export interface AdRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdRequest'], meta: { name: 'AdRequest' } }
    /**
     * Find zero or one AdRequest that matches the filter.
     * @param {AdRequestFindUniqueArgs} args - Arguments to find a AdRequest
     * @example
     * // Get one AdRequest
     * const adRequest = await prisma.adRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdRequestFindUniqueArgs>(args: SelectSubset<T, AdRequestFindUniqueArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdRequestFindUniqueOrThrowArgs} args - Arguments to find a AdRequest
     * @example
     * // Get one AdRequest
     * const adRequest = await prisma.adRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AdRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestFindFirstArgs} args - Arguments to find a AdRequest
     * @example
     * // Get one AdRequest
     * const adRequest = await prisma.adRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdRequestFindFirstArgs>(args?: SelectSubset<T, AdRequestFindFirstArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestFindFirstOrThrowArgs} args - Arguments to find a AdRequest
     * @example
     * // Get one AdRequest
     * const adRequest = await prisma.adRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AdRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdRequests
     * const adRequests = await prisma.adRequest.findMany()
     * 
     * // Get first 10 AdRequests
     * const adRequests = await prisma.adRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adRequestWithIdOnly = await prisma.adRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdRequestFindManyArgs>(args?: SelectSubset<T, AdRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdRequest.
     * @param {AdRequestCreateArgs} args - Arguments to create a AdRequest.
     * @example
     * // Create one AdRequest
     * const AdRequest = await prisma.adRequest.create({
     *   data: {
     *     // ... data to create a AdRequest
     *   }
     * })
     * 
     */
    create<T extends AdRequestCreateArgs>(args: SelectSubset<T, AdRequestCreateArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdRequests.
     * @param {AdRequestCreateManyArgs} args - Arguments to create many AdRequests.
     * @example
     * // Create many AdRequests
     * const adRequest = await prisma.adRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdRequestCreateManyArgs>(args?: SelectSubset<T, AdRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdRequests and returns the data saved in the database.
     * @param {AdRequestCreateManyAndReturnArgs} args - Arguments to create many AdRequests.
     * @example
     * // Create many AdRequests
     * const adRequest = await prisma.adRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdRequests and only return the `id`
     * const adRequestWithIdOnly = await prisma.adRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AdRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdRequest.
     * @param {AdRequestDeleteArgs} args - Arguments to delete one AdRequest.
     * @example
     * // Delete one AdRequest
     * const AdRequest = await prisma.adRequest.delete({
     *   where: {
     *     // ... filter to delete one AdRequest
     *   }
     * })
     * 
     */
    delete<T extends AdRequestDeleteArgs>(args: SelectSubset<T, AdRequestDeleteArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdRequest.
     * @param {AdRequestUpdateArgs} args - Arguments to update one AdRequest.
     * @example
     * // Update one AdRequest
     * const adRequest = await prisma.adRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdRequestUpdateArgs>(args: SelectSubset<T, AdRequestUpdateArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdRequests.
     * @param {AdRequestDeleteManyArgs} args - Arguments to filter AdRequests to delete.
     * @example
     * // Delete a few AdRequests
     * const { count } = await prisma.adRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdRequestDeleteManyArgs>(args?: SelectSubset<T, AdRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdRequests
     * const adRequest = await prisma.adRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdRequestUpdateManyArgs>(args: SelectSubset<T, AdRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdRequests and returns the data updated in the database.
     * @param {AdRequestUpdateManyAndReturnArgs} args - Arguments to update many AdRequests.
     * @example
     * // Update many AdRequests
     * const adRequest = await prisma.adRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdRequests and only return the `id`
     * const adRequestWithIdOnly = await prisma.adRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AdRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdRequest.
     * @param {AdRequestUpsertArgs} args - Arguments to update or create a AdRequest.
     * @example
     * // Update or create a AdRequest
     * const adRequest = await prisma.adRequest.upsert({
     *   create: {
     *     // ... data to create a AdRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdRequest we want to update
     *   }
     * })
     */
    upsert<T extends AdRequestUpsertArgs>(args: SelectSubset<T, AdRequestUpsertArgs<ExtArgs>>): Prisma__AdRequestClient<$Result.GetResult<Prisma.$AdRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestCountArgs} args - Arguments to filter AdRequests to count.
     * @example
     * // Count the number of AdRequests
     * const count = await prisma.adRequest.count({
     *   where: {
     *     // ... the filter for the AdRequests we want to count
     *   }
     * })
    **/
    count<T extends AdRequestCountArgs>(
      args?: Subset<T, AdRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdRequestAggregateArgs>(args: Subset<T, AdRequestAggregateArgs>): Prisma.PrismaPromise<GetAdRequestAggregateType<T>>

    /**
     * Group by AdRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdRequestGroupByArgs['orderBy'] }
        : { orderBy?: AdRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdRequest model
   */
  readonly fields: AdRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ad<T extends AdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdDefaultArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdRequest model
   */
  interface AdRequestFieldRefs {
    readonly id: FieldRef<"AdRequest", 'String'>
    readonly adId: FieldRef<"AdRequest", 'String'>
    readonly creatorId: FieldRef<"AdRequest", 'String'>
    readonly status: FieldRef<"AdRequest", 'RequestStatus'>
    readonly message: FieldRef<"AdRequest", 'String'>
    readonly createdAt: FieldRef<"AdRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"AdRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdRequest findUnique
   */
  export type AdRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter, which AdRequest to fetch.
     */
    where: AdRequestWhereUniqueInput
  }

  /**
   * AdRequest findUniqueOrThrow
   */
  export type AdRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter, which AdRequest to fetch.
     */
    where: AdRequestWhereUniqueInput
  }

  /**
   * AdRequest findFirst
   */
  export type AdRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter, which AdRequest to fetch.
     */
    where?: AdRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdRequests to fetch.
     */
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdRequests.
     */
    cursor?: AdRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdRequests.
     */
    distinct?: AdRequestScalarFieldEnum | AdRequestScalarFieldEnum[]
  }

  /**
   * AdRequest findFirstOrThrow
   */
  export type AdRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter, which AdRequest to fetch.
     */
    where?: AdRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdRequests to fetch.
     */
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdRequests.
     */
    cursor?: AdRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdRequests.
     */
    distinct?: AdRequestScalarFieldEnum | AdRequestScalarFieldEnum[]
  }

  /**
   * AdRequest findMany
   */
  export type AdRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter, which AdRequests to fetch.
     */
    where?: AdRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdRequests to fetch.
     */
    orderBy?: AdRequestOrderByWithRelationInput | AdRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdRequests.
     */
    cursor?: AdRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdRequests.
     */
    skip?: number
    distinct?: AdRequestScalarFieldEnum | AdRequestScalarFieldEnum[]
  }

  /**
   * AdRequest create
   */
  export type AdRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AdRequest.
     */
    data: XOR<AdRequestCreateInput, AdRequestUncheckedCreateInput>
  }

  /**
   * AdRequest createMany
   */
  export type AdRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdRequests.
     */
    data: AdRequestCreateManyInput | AdRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdRequest createManyAndReturn
   */
  export type AdRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AdRequests.
     */
    data: AdRequestCreateManyInput | AdRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdRequest update
   */
  export type AdRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AdRequest.
     */
    data: XOR<AdRequestUpdateInput, AdRequestUncheckedUpdateInput>
    /**
     * Choose, which AdRequest to update.
     */
    where: AdRequestWhereUniqueInput
  }

  /**
   * AdRequest updateMany
   */
  export type AdRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdRequests.
     */
    data: XOR<AdRequestUpdateManyMutationInput, AdRequestUncheckedUpdateManyInput>
    /**
     * Filter which AdRequests to update
     */
    where?: AdRequestWhereInput
    /**
     * Limit how many AdRequests to update.
     */
    limit?: number
  }

  /**
   * AdRequest updateManyAndReturn
   */
  export type AdRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * The data used to update AdRequests.
     */
    data: XOR<AdRequestUpdateManyMutationInput, AdRequestUncheckedUpdateManyInput>
    /**
     * Filter which AdRequests to update
     */
    where?: AdRequestWhereInput
    /**
     * Limit how many AdRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdRequest upsert
   */
  export type AdRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AdRequest to update in case it exists.
     */
    where: AdRequestWhereUniqueInput
    /**
     * In case the AdRequest found by the `where` argument doesn't exist, create a new AdRequest with this data.
     */
    create: XOR<AdRequestCreateInput, AdRequestUncheckedCreateInput>
    /**
     * In case the AdRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdRequestUpdateInput, AdRequestUncheckedUpdateInput>
  }

  /**
   * AdRequest delete
   */
  export type AdRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
    /**
     * Filter which AdRequest to delete.
     */
    where: AdRequestWhereUniqueInput
  }

  /**
   * AdRequest deleteMany
   */
  export type AdRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdRequests to delete
     */
    where?: AdRequestWhereInput
    /**
     * Limit how many AdRequests to delete.
     */
    limit?: number
  }

  /**
   * AdRequest without action
   */
  export type AdRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdRequest
     */
    select?: AdRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdRequest
     */
    omit?: AdRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdRequestInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    fromUserId: string
    toUserId: string
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    createdAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    createdAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    createdAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromUserId" | "toUserId" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromUserId: string
      toUserId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly fromUserId: FieldRef<"Message", 'String'>
    readonly toUserId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model ContentAnnouncement
   */

  export type AggregateContentAnnouncement = {
    _count: ContentAnnouncementCountAggregateOutputType | null
    _avg: ContentAnnouncementAvgAggregateOutputType | null
    _sum: ContentAnnouncementSumAggregateOutputType | null
    _min: ContentAnnouncementMinAggregateOutputType | null
    _max: ContentAnnouncementMaxAggregateOutputType | null
  }

  export type ContentAnnouncementAvgAggregateOutputType = {
    maxSlots: number | null
    filledSlots: number | null
  }

  export type ContentAnnouncementSumAggregateOutputType = {
    maxSlots: number | null
    filledSlots: number | null
  }

  export type ContentAnnouncementMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    thumbnail: string | null
    maxSlots: number | null
    filledSlots: number | null
    status: $Enums.AnnouncementStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentAnnouncementMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    thumbnail: string | null
    maxSlots: number | null
    filledSlots: number | null
    status: $Enums.AnnouncementStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentAnnouncementCountAggregateOutputType = {
    id: number
    creatorId: number
    title: number
    description: number
    platforms: number
    channelIds: number
    scheduledAt: number
    thumbnail: number
    maxSlots: number
    filledSlots: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAnnouncementAvgAggregateInputType = {
    maxSlots?: true
    filledSlots?: true
  }

  export type ContentAnnouncementSumAggregateInputType = {
    maxSlots?: true
    filledSlots?: true
  }

  export type ContentAnnouncementMinAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    scheduledAt?: true
    thumbnail?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentAnnouncementMaxAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    scheduledAt?: true
    thumbnail?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentAnnouncementCountAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    platforms?: true
    channelIds?: true
    scheduledAt?: true
    thumbnail?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentAnnouncement to aggregate.
     */
    where?: ContentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAnnouncements to fetch.
     */
    orderBy?: ContentAnnouncementOrderByWithRelationInput | ContentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentAnnouncements
    **/
    _count?: true | ContentAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentAnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentAnnouncementMaxAggregateInputType
  }

  export type GetContentAnnouncementAggregateType<T extends ContentAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateContentAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentAnnouncement[P]>
      : GetScalarType<T[P], AggregateContentAnnouncement[P]>
  }




  export type ContentAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentAnnouncementWhereInput
    orderBy?: ContentAnnouncementOrderByWithAggregationInput | ContentAnnouncementOrderByWithAggregationInput[]
    by: ContentAnnouncementScalarFieldEnum[] | ContentAnnouncementScalarFieldEnum
    having?: ContentAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentAnnouncementCountAggregateInputType | true
    _avg?: ContentAnnouncementAvgAggregateInputType
    _sum?: ContentAnnouncementSumAggregateInputType
    _min?: ContentAnnouncementMinAggregateInputType
    _max?: ContentAnnouncementMaxAggregateInputType
  }

  export type ContentAnnouncementGroupByOutputType = {
    id: string
    creatorId: string
    title: string
    description: string | null
    platforms: $Enums.Platform[]
    channelIds: string[]
    scheduledAt: Date
    thumbnail: string | null
    maxSlots: number
    filledSlots: number
    status: $Enums.AnnouncementStatus
    createdAt: Date
    updatedAt: Date
    _count: ContentAnnouncementCountAggregateOutputType | null
    _avg: ContentAnnouncementAvgAggregateOutputType | null
    _sum: ContentAnnouncementSumAggregateOutputType | null
    _min: ContentAnnouncementMinAggregateOutputType | null
    _max: ContentAnnouncementMaxAggregateOutputType | null
  }

  type GetContentAnnouncementGroupByPayload<T extends ContentAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], ContentAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type ContentAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    platforms?: boolean
    channelIds?: boolean
    scheduledAt?: boolean
    thumbnail?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    collaborationRequests?: boolean | ContentAnnouncement$collaborationRequestsArgs<ExtArgs>
    _count?: boolean | ContentAnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentAnnouncement"]>

  export type ContentAnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    platforms?: boolean
    channelIds?: boolean
    scheduledAt?: boolean
    thumbnail?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentAnnouncement"]>

  export type ContentAnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    platforms?: boolean
    channelIds?: boolean
    scheduledAt?: boolean
    thumbnail?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentAnnouncement"]>

  export type ContentAnnouncementSelectScalar = {
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    platforms?: boolean
    channelIds?: boolean
    scheduledAt?: boolean
    thumbnail?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentAnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "title" | "description" | "platforms" | "channelIds" | "scheduledAt" | "thumbnail" | "maxSlots" | "filledSlots" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contentAnnouncement"]>
  export type ContentAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    collaborationRequests?: boolean | ContentAnnouncement$collaborationRequestsArgs<ExtArgs>
    _count?: boolean | ContentAnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentAnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentAnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentAnnouncement"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      collaborationRequests: Prisma.$CollaborationRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      title: string
      description: string | null
      platforms: $Enums.Platform[]
      channelIds: string[]
      scheduledAt: Date
      thumbnail: string | null
      maxSlots: number
      filledSlots: number
      status: $Enums.AnnouncementStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentAnnouncement"]>
    composites: {}
  }

  type ContentAnnouncementGetPayload<S extends boolean | null | undefined | ContentAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$ContentAnnouncementPayload, S>

  type ContentAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentAnnouncementCountAggregateInputType | true
    }

  export interface ContentAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentAnnouncement'], meta: { name: 'ContentAnnouncement' } }
    /**
     * Find zero or one ContentAnnouncement that matches the filter.
     * @param {ContentAnnouncementFindUniqueArgs} args - Arguments to find a ContentAnnouncement
     * @example
     * // Get one ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentAnnouncementFindUniqueArgs>(args: SelectSubset<T, ContentAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentAnnouncement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a ContentAnnouncement
     * @example
     * // Get one ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementFindFirstArgs} args - Arguments to find a ContentAnnouncement
     * @example
     * // Get one ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentAnnouncementFindFirstArgs>(args?: SelectSubset<T, ContentAnnouncementFindFirstArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementFindFirstOrThrowArgs} args - Arguments to find a ContentAnnouncement
     * @example
     * // Get one ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentAnnouncements
     * const contentAnnouncements = await prisma.contentAnnouncement.findMany()
     * 
     * // Get first 10 ContentAnnouncements
     * const contentAnnouncements = await prisma.contentAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentAnnouncementWithIdOnly = await prisma.contentAnnouncement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentAnnouncementFindManyArgs>(args?: SelectSubset<T, ContentAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentAnnouncement.
     * @param {ContentAnnouncementCreateArgs} args - Arguments to create a ContentAnnouncement.
     * @example
     * // Create one ContentAnnouncement
     * const ContentAnnouncement = await prisma.contentAnnouncement.create({
     *   data: {
     *     // ... data to create a ContentAnnouncement
     *   }
     * })
     * 
     */
    create<T extends ContentAnnouncementCreateArgs>(args: SelectSubset<T, ContentAnnouncementCreateArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentAnnouncements.
     * @param {ContentAnnouncementCreateManyArgs} args - Arguments to create many ContentAnnouncements.
     * @example
     * // Create many ContentAnnouncements
     * const contentAnnouncement = await prisma.contentAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentAnnouncementCreateManyArgs>(args?: SelectSubset<T, ContentAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentAnnouncements and returns the data saved in the database.
     * @param {ContentAnnouncementCreateManyAndReturnArgs} args - Arguments to create many ContentAnnouncements.
     * @example
     * // Create many ContentAnnouncements
     * const contentAnnouncement = await prisma.contentAnnouncement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentAnnouncements and only return the `id`
     * const contentAnnouncementWithIdOnly = await prisma.contentAnnouncement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentAnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentAnnouncement.
     * @param {ContentAnnouncementDeleteArgs} args - Arguments to delete one ContentAnnouncement.
     * @example
     * // Delete one ContentAnnouncement
     * const ContentAnnouncement = await prisma.contentAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one ContentAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends ContentAnnouncementDeleteArgs>(args: SelectSubset<T, ContentAnnouncementDeleteArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentAnnouncement.
     * @param {ContentAnnouncementUpdateArgs} args - Arguments to update one ContentAnnouncement.
     * @example
     * // Update one ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentAnnouncementUpdateArgs>(args: SelectSubset<T, ContentAnnouncementUpdateArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentAnnouncements.
     * @param {ContentAnnouncementDeleteManyArgs} args - Arguments to filter ContentAnnouncements to delete.
     * @example
     * // Delete a few ContentAnnouncements
     * const { count } = await prisma.contentAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentAnnouncementDeleteManyArgs>(args?: SelectSubset<T, ContentAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentAnnouncements
     * const contentAnnouncement = await prisma.contentAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentAnnouncementUpdateManyArgs>(args: SelectSubset<T, ContentAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentAnnouncements and returns the data updated in the database.
     * @param {ContentAnnouncementUpdateManyAndReturnArgs} args - Arguments to update many ContentAnnouncements.
     * @example
     * // Update many ContentAnnouncements
     * const contentAnnouncement = await prisma.contentAnnouncement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentAnnouncements and only return the `id`
     * const contentAnnouncementWithIdOnly = await prisma.contentAnnouncement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentAnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentAnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentAnnouncement.
     * @param {ContentAnnouncementUpsertArgs} args - Arguments to update or create a ContentAnnouncement.
     * @example
     * // Update or create a ContentAnnouncement
     * const contentAnnouncement = await prisma.contentAnnouncement.upsert({
     *   create: {
     *     // ... data to create a ContentAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends ContentAnnouncementUpsertArgs>(args: SelectSubset<T, ContentAnnouncementUpsertArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementCountArgs} args - Arguments to filter ContentAnnouncements to count.
     * @example
     * // Count the number of ContentAnnouncements
     * const count = await prisma.contentAnnouncement.count({
     *   where: {
     *     // ... the filter for the ContentAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends ContentAnnouncementCountArgs>(
      args?: Subset<T, ContentAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAnnouncementAggregateArgs>(args: Subset<T, ContentAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetContentAnnouncementAggregateType<T>>

    /**
     * Group by ContentAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: ContentAnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentAnnouncement model
   */
  readonly fields: ContentAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collaborationRequests<T extends ContentAnnouncement$collaborationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, ContentAnnouncement$collaborationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentAnnouncement model
   */
  interface ContentAnnouncementFieldRefs {
    readonly id: FieldRef<"ContentAnnouncement", 'String'>
    readonly creatorId: FieldRef<"ContentAnnouncement", 'String'>
    readonly title: FieldRef<"ContentAnnouncement", 'String'>
    readonly description: FieldRef<"ContentAnnouncement", 'String'>
    readonly platforms: FieldRef<"ContentAnnouncement", 'Platform[]'>
    readonly channelIds: FieldRef<"ContentAnnouncement", 'String[]'>
    readonly scheduledAt: FieldRef<"ContentAnnouncement", 'DateTime'>
    readonly thumbnail: FieldRef<"ContentAnnouncement", 'String'>
    readonly maxSlots: FieldRef<"ContentAnnouncement", 'Int'>
    readonly filledSlots: FieldRef<"ContentAnnouncement", 'Int'>
    readonly status: FieldRef<"ContentAnnouncement", 'AnnouncementStatus'>
    readonly createdAt: FieldRef<"ContentAnnouncement", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentAnnouncement findUnique
   */
  export type ContentAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which ContentAnnouncement to fetch.
     */
    where: ContentAnnouncementWhereUniqueInput
  }

  /**
   * ContentAnnouncement findUniqueOrThrow
   */
  export type ContentAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which ContentAnnouncement to fetch.
     */
    where: ContentAnnouncementWhereUniqueInput
  }

  /**
   * ContentAnnouncement findFirst
   */
  export type ContentAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which ContentAnnouncement to fetch.
     */
    where?: ContentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAnnouncements to fetch.
     */
    orderBy?: ContentAnnouncementOrderByWithRelationInput | ContentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentAnnouncements.
     */
    cursor?: ContentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentAnnouncements.
     */
    distinct?: ContentAnnouncementScalarFieldEnum | ContentAnnouncementScalarFieldEnum[]
  }

  /**
   * ContentAnnouncement findFirstOrThrow
   */
  export type ContentAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which ContentAnnouncement to fetch.
     */
    where?: ContentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAnnouncements to fetch.
     */
    orderBy?: ContentAnnouncementOrderByWithRelationInput | ContentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentAnnouncements.
     */
    cursor?: ContentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentAnnouncements.
     */
    distinct?: ContentAnnouncementScalarFieldEnum | ContentAnnouncementScalarFieldEnum[]
  }

  /**
   * ContentAnnouncement findMany
   */
  export type ContentAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which ContentAnnouncements to fetch.
     */
    where?: ContentAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAnnouncements to fetch.
     */
    orderBy?: ContentAnnouncementOrderByWithRelationInput | ContentAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentAnnouncements.
     */
    cursor?: ContentAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAnnouncements.
     */
    skip?: number
    distinct?: ContentAnnouncementScalarFieldEnum | ContentAnnouncementScalarFieldEnum[]
  }

  /**
   * ContentAnnouncement create
   */
  export type ContentAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentAnnouncement.
     */
    data: XOR<ContentAnnouncementCreateInput, ContentAnnouncementUncheckedCreateInput>
  }

  /**
   * ContentAnnouncement createMany
   */
  export type ContentAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentAnnouncements.
     */
    data: ContentAnnouncementCreateManyInput | ContentAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentAnnouncement createManyAndReturn
   */
  export type ContentAnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many ContentAnnouncements.
     */
    data: ContentAnnouncementCreateManyInput | ContentAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentAnnouncement update
   */
  export type ContentAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentAnnouncement.
     */
    data: XOR<ContentAnnouncementUpdateInput, ContentAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which ContentAnnouncement to update.
     */
    where: ContentAnnouncementWhereUniqueInput
  }

  /**
   * ContentAnnouncement updateMany
   */
  export type ContentAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentAnnouncements.
     */
    data: XOR<ContentAnnouncementUpdateManyMutationInput, ContentAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which ContentAnnouncements to update
     */
    where?: ContentAnnouncementWhereInput
    /**
     * Limit how many ContentAnnouncements to update.
     */
    limit?: number
  }

  /**
   * ContentAnnouncement updateManyAndReturn
   */
  export type ContentAnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update ContentAnnouncements.
     */
    data: XOR<ContentAnnouncementUpdateManyMutationInput, ContentAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which ContentAnnouncements to update
     */
    where?: ContentAnnouncementWhereInput
    /**
     * Limit how many ContentAnnouncements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentAnnouncement upsert
   */
  export type ContentAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentAnnouncement to update in case it exists.
     */
    where: ContentAnnouncementWhereUniqueInput
    /**
     * In case the ContentAnnouncement found by the `where` argument doesn't exist, create a new ContentAnnouncement with this data.
     */
    create: XOR<ContentAnnouncementCreateInput, ContentAnnouncementUncheckedCreateInput>
    /**
     * In case the ContentAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentAnnouncementUpdateInput, ContentAnnouncementUncheckedUpdateInput>
  }

  /**
   * ContentAnnouncement delete
   */
  export type ContentAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which ContentAnnouncement to delete.
     */
    where: ContentAnnouncementWhereUniqueInput
  }

  /**
   * ContentAnnouncement deleteMany
   */
  export type ContentAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentAnnouncements to delete
     */
    where?: ContentAnnouncementWhereInput
    /**
     * Limit how many ContentAnnouncements to delete.
     */
    limit?: number
  }

  /**
   * ContentAnnouncement.collaborationRequests
   */
  export type ContentAnnouncement$collaborationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    where?: CollaborationRequestWhereInput
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    cursor?: CollaborationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * ContentAnnouncement without action
   */
  export type ContentAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model CollaborationRequest
   */

  export type AggregateCollaborationRequest = {
    _count: CollaborationRequestCountAggregateOutputType | null
    _avg: CollaborationRequestAvgAggregateOutputType | null
    _sum: CollaborationRequestSumAggregateOutputType | null
    _min: CollaborationRequestMinAggregateOutputType | null
    _max: CollaborationRequestMaxAggregateOutputType | null
  }

  export type CollaborationRequestAvgAggregateOutputType = {
    totalPrice: number | null
    videoCount: number | null
    videosPosted: number | null
  }

  export type CollaborationRequestSumAggregateOutputType = {
    totalPrice: number | null
    videoCount: number | null
    videosPosted: number | null
  }

  export type CollaborationRequestMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    creatorId: string | null
    totalPrice: number | null
    message: string | null
    status: $Enums.CollaborationStatus | null
    isLongTermDeal: boolean | null
    videoCount: number | null
    videosPosted: number | null
    adId: string | null
    announcementId: string | null
    paymentReference: string | null
    viewedByCreator: boolean | null
    viewedByBrand: boolean | null
    materialsDownloaded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborationRequestMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    creatorId: string | null
    totalPrice: number | null
    message: string | null
    status: $Enums.CollaborationStatus | null
    isLongTermDeal: boolean | null
    videoCount: number | null
    videosPosted: number | null
    adId: string | null
    announcementId: string | null
    paymentReference: string | null
    viewedByCreator: boolean | null
    viewedByBrand: boolean | null
    materialsDownloaded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborationRequestCountAggregateOutputType = {
    id: number
    brandId: number
    creatorId: number
    channels: number
    totalPrice: number
    message: number
    status: number
    isLongTermDeal: number
    videoCount: number
    videosPosted: number
    adId: number
    announcementId: number
    paymentReference: number
    viewedByCreator: number
    viewedByBrand: number
    materialsDownloaded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollaborationRequestAvgAggregateInputType = {
    totalPrice?: true
    videoCount?: true
    videosPosted?: true
  }

  export type CollaborationRequestSumAggregateInputType = {
    totalPrice?: true
    videoCount?: true
    videosPosted?: true
  }

  export type CollaborationRequestMinAggregateInputType = {
    id?: true
    brandId?: true
    creatorId?: true
    totalPrice?: true
    message?: true
    status?: true
    isLongTermDeal?: true
    videoCount?: true
    videosPosted?: true
    adId?: true
    announcementId?: true
    paymentReference?: true
    viewedByCreator?: true
    viewedByBrand?: true
    materialsDownloaded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborationRequestMaxAggregateInputType = {
    id?: true
    brandId?: true
    creatorId?: true
    totalPrice?: true
    message?: true
    status?: true
    isLongTermDeal?: true
    videoCount?: true
    videosPosted?: true
    adId?: true
    announcementId?: true
    paymentReference?: true
    viewedByCreator?: true
    viewedByBrand?: true
    materialsDownloaded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborationRequestCountAggregateInputType = {
    id?: true
    brandId?: true
    creatorId?: true
    channels?: true
    totalPrice?: true
    message?: true
    status?: true
    isLongTermDeal?: true
    videoCount?: true
    videosPosted?: true
    adId?: true
    announcementId?: true
    paymentReference?: true
    viewedByCreator?: true
    viewedByBrand?: true
    materialsDownloaded?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollaborationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollaborationRequest to aggregate.
     */
    where?: CollaborationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaborationRequests to fetch.
     */
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaborationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaborationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaborationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollaborationRequests
    **/
    _count?: true | CollaborationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollaborationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollaborationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborationRequestMaxAggregateInputType
  }

  export type GetCollaborationRequestAggregateType<T extends CollaborationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborationRequest[P]>
      : GetScalarType<T[P], AggregateCollaborationRequest[P]>
  }




  export type CollaborationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationRequestWhereInput
    orderBy?: CollaborationRequestOrderByWithAggregationInput | CollaborationRequestOrderByWithAggregationInput[]
    by: CollaborationRequestScalarFieldEnum[] | CollaborationRequestScalarFieldEnum
    having?: CollaborationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborationRequestCountAggregateInputType | true
    _avg?: CollaborationRequestAvgAggregateInputType
    _sum?: CollaborationRequestSumAggregateInputType
    _min?: CollaborationRequestMinAggregateInputType
    _max?: CollaborationRequestMaxAggregateInputType
  }

  export type CollaborationRequestGroupByOutputType = {
    id: string
    brandId: string
    creatorId: string
    channels: JsonValue
    totalPrice: number
    message: string | null
    status: $Enums.CollaborationStatus
    isLongTermDeal: boolean
    videoCount: number | null
    videosPosted: number
    adId: string | null
    announcementId: string | null
    paymentReference: string | null
    viewedByCreator: boolean
    viewedByBrand: boolean
    materialsDownloaded: boolean
    createdAt: Date
    updatedAt: Date
    _count: CollaborationRequestCountAggregateOutputType | null
    _avg: CollaborationRequestAvgAggregateOutputType | null
    _sum: CollaborationRequestSumAggregateOutputType | null
    _min: CollaborationRequestMinAggregateOutputType | null
    _max: CollaborationRequestMaxAggregateOutputType | null
  }

  type GetCollaborationRequestGroupByPayload<T extends CollaborationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborationRequestGroupByOutputType[P]>
        }
      >
    >


  export type CollaborationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    creatorId?: boolean
    channels?: boolean
    totalPrice?: boolean
    message?: boolean
    status?: boolean
    isLongTermDeal?: boolean
    videoCount?: boolean
    videosPosted?: boolean
    adId?: boolean
    announcementId?: boolean
    paymentReference?: boolean
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }, ExtArgs["result"]["collaborationRequest"]>

  export type CollaborationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    creatorId?: boolean
    channels?: boolean
    totalPrice?: boolean
    message?: boolean
    status?: boolean
    isLongTermDeal?: boolean
    videoCount?: boolean
    videosPosted?: boolean
    adId?: boolean
    announcementId?: boolean
    paymentReference?: boolean
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }, ExtArgs["result"]["collaborationRequest"]>

  export type CollaborationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    creatorId?: boolean
    channels?: boolean
    totalPrice?: boolean
    message?: boolean
    status?: boolean
    isLongTermDeal?: boolean
    videoCount?: boolean
    videosPosted?: boolean
    adId?: boolean
    announcementId?: boolean
    paymentReference?: boolean
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }, ExtArgs["result"]["collaborationRequest"]>

  export type CollaborationRequestSelectScalar = {
    id?: boolean
    brandId?: boolean
    creatorId?: boolean
    channels?: boolean
    totalPrice?: boolean
    message?: boolean
    status?: boolean
    isLongTermDeal?: boolean
    videoCount?: boolean
    videosPosted?: boolean
    adId?: boolean
    announcementId?: boolean
    paymentReference?: boolean
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollaborationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "creatorId" | "channels" | "totalPrice" | "message" | "status" | "isLongTermDeal" | "videoCount" | "videosPosted" | "adId" | "announcementId" | "paymentReference" | "viewedByCreator" | "viewedByBrand" | "materialsDownloaded" | "createdAt" | "updatedAt", ExtArgs["result"]["collaborationRequest"]>
  export type CollaborationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }
  export type CollaborationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }
  export type CollaborationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    ad?: boolean | CollaborationRequest$adArgs<ExtArgs>
    announcement?: boolean | CollaborationRequest$announcementArgs<ExtArgs>
  }

  export type $CollaborationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollaborationRequest"
    objects: {
      brand: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      ad: Prisma.$AdPayload<ExtArgs> | null
      announcement: Prisma.$ContentAnnouncementPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      creatorId: string
      channels: Prisma.JsonValue
      totalPrice: number
      message: string | null
      status: $Enums.CollaborationStatus
      isLongTermDeal: boolean
      videoCount: number | null
      videosPosted: number
      adId: string | null
      announcementId: string | null
      paymentReference: string | null
      viewedByCreator: boolean
      viewedByBrand: boolean
      materialsDownloaded: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collaborationRequest"]>
    composites: {}
  }

  type CollaborationRequestGetPayload<S extends boolean | null | undefined | CollaborationRequestDefaultArgs> = $Result.GetResult<Prisma.$CollaborationRequestPayload, S>

  type CollaborationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaborationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaborationRequestCountAggregateInputType | true
    }

  export interface CollaborationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollaborationRequest'], meta: { name: 'CollaborationRequest' } }
    /**
     * Find zero or one CollaborationRequest that matches the filter.
     * @param {CollaborationRequestFindUniqueArgs} args - Arguments to find a CollaborationRequest
     * @example
     * // Get one CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaborationRequestFindUniqueArgs>(args: SelectSubset<T, CollaborationRequestFindUniqueArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollaborationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaborationRequestFindUniqueOrThrowArgs} args - Arguments to find a CollaborationRequest
     * @example
     * // Get one CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaborationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaborationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollaborationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestFindFirstArgs} args - Arguments to find a CollaborationRequest
     * @example
     * // Get one CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaborationRequestFindFirstArgs>(args?: SelectSubset<T, CollaborationRequestFindFirstArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollaborationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestFindFirstOrThrowArgs} args - Arguments to find a CollaborationRequest
     * @example
     * // Get one CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaborationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaborationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollaborationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollaborationRequests
     * const collaborationRequests = await prisma.collaborationRequest.findMany()
     * 
     * // Get first 10 CollaborationRequests
     * const collaborationRequests = await prisma.collaborationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborationRequestWithIdOnly = await prisma.collaborationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaborationRequestFindManyArgs>(args?: SelectSubset<T, CollaborationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollaborationRequest.
     * @param {CollaborationRequestCreateArgs} args - Arguments to create a CollaborationRequest.
     * @example
     * // Create one CollaborationRequest
     * const CollaborationRequest = await prisma.collaborationRequest.create({
     *   data: {
     *     // ... data to create a CollaborationRequest
     *   }
     * })
     * 
     */
    create<T extends CollaborationRequestCreateArgs>(args: SelectSubset<T, CollaborationRequestCreateArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollaborationRequests.
     * @param {CollaborationRequestCreateManyArgs} args - Arguments to create many CollaborationRequests.
     * @example
     * // Create many CollaborationRequests
     * const collaborationRequest = await prisma.collaborationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaborationRequestCreateManyArgs>(args?: SelectSubset<T, CollaborationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollaborationRequests and returns the data saved in the database.
     * @param {CollaborationRequestCreateManyAndReturnArgs} args - Arguments to create many CollaborationRequests.
     * @example
     * // Create many CollaborationRequests
     * const collaborationRequest = await prisma.collaborationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollaborationRequests and only return the `id`
     * const collaborationRequestWithIdOnly = await prisma.collaborationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaborationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaborationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollaborationRequest.
     * @param {CollaborationRequestDeleteArgs} args - Arguments to delete one CollaborationRequest.
     * @example
     * // Delete one CollaborationRequest
     * const CollaborationRequest = await prisma.collaborationRequest.delete({
     *   where: {
     *     // ... filter to delete one CollaborationRequest
     *   }
     * })
     * 
     */
    delete<T extends CollaborationRequestDeleteArgs>(args: SelectSubset<T, CollaborationRequestDeleteArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollaborationRequest.
     * @param {CollaborationRequestUpdateArgs} args - Arguments to update one CollaborationRequest.
     * @example
     * // Update one CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaborationRequestUpdateArgs>(args: SelectSubset<T, CollaborationRequestUpdateArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollaborationRequests.
     * @param {CollaborationRequestDeleteManyArgs} args - Arguments to filter CollaborationRequests to delete.
     * @example
     * // Delete a few CollaborationRequests
     * const { count } = await prisma.collaborationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaborationRequestDeleteManyArgs>(args?: SelectSubset<T, CollaborationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollaborationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollaborationRequests
     * const collaborationRequest = await prisma.collaborationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaborationRequestUpdateManyArgs>(args: SelectSubset<T, CollaborationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollaborationRequests and returns the data updated in the database.
     * @param {CollaborationRequestUpdateManyAndReturnArgs} args - Arguments to update many CollaborationRequests.
     * @example
     * // Update many CollaborationRequests
     * const collaborationRequest = await prisma.collaborationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollaborationRequests and only return the `id`
     * const collaborationRequestWithIdOnly = await prisma.collaborationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaborationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaborationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollaborationRequest.
     * @param {CollaborationRequestUpsertArgs} args - Arguments to update or create a CollaborationRequest.
     * @example
     * // Update or create a CollaborationRequest
     * const collaborationRequest = await prisma.collaborationRequest.upsert({
     *   create: {
     *     // ... data to create a CollaborationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollaborationRequest we want to update
     *   }
     * })
     */
    upsert<T extends CollaborationRequestUpsertArgs>(args: SelectSubset<T, CollaborationRequestUpsertArgs<ExtArgs>>): Prisma__CollaborationRequestClient<$Result.GetResult<Prisma.$CollaborationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollaborationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestCountArgs} args - Arguments to filter CollaborationRequests to count.
     * @example
     * // Count the number of CollaborationRequests
     * const count = await prisma.collaborationRequest.count({
     *   where: {
     *     // ... the filter for the CollaborationRequests we want to count
     *   }
     * })
    **/
    count<T extends CollaborationRequestCountArgs>(
      args?: Subset<T, CollaborationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollaborationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaborationRequestAggregateArgs>(args: Subset<T, CollaborationRequestAggregateArgs>): Prisma.PrismaPromise<GetCollaborationRequestAggregateType<T>>

    /**
     * Group by CollaborationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaborationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaborationRequestGroupByArgs['orderBy'] }
        : { orderBy?: CollaborationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaborationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollaborationRequest model
   */
  readonly fields: CollaborationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollaborationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaborationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ad<T extends CollaborationRequest$adArgs<ExtArgs> = {}>(args?: Subset<T, CollaborationRequest$adArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    announcement<T extends CollaborationRequest$announcementArgs<ExtArgs> = {}>(args?: Subset<T, CollaborationRequest$announcementArgs<ExtArgs>>): Prisma__ContentAnnouncementClient<$Result.GetResult<Prisma.$ContentAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollaborationRequest model
   */
  interface CollaborationRequestFieldRefs {
    readonly id: FieldRef<"CollaborationRequest", 'String'>
    readonly brandId: FieldRef<"CollaborationRequest", 'String'>
    readonly creatorId: FieldRef<"CollaborationRequest", 'String'>
    readonly channels: FieldRef<"CollaborationRequest", 'Json'>
    readonly totalPrice: FieldRef<"CollaborationRequest", 'Float'>
    readonly message: FieldRef<"CollaborationRequest", 'String'>
    readonly status: FieldRef<"CollaborationRequest", 'CollaborationStatus'>
    readonly isLongTermDeal: FieldRef<"CollaborationRequest", 'Boolean'>
    readonly videoCount: FieldRef<"CollaborationRequest", 'Int'>
    readonly videosPosted: FieldRef<"CollaborationRequest", 'Int'>
    readonly adId: FieldRef<"CollaborationRequest", 'String'>
    readonly announcementId: FieldRef<"CollaborationRequest", 'String'>
    readonly paymentReference: FieldRef<"CollaborationRequest", 'String'>
    readonly viewedByCreator: FieldRef<"CollaborationRequest", 'Boolean'>
    readonly viewedByBrand: FieldRef<"CollaborationRequest", 'Boolean'>
    readonly materialsDownloaded: FieldRef<"CollaborationRequest", 'Boolean'>
    readonly createdAt: FieldRef<"CollaborationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"CollaborationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollaborationRequest findUnique
   */
  export type CollaborationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter, which CollaborationRequest to fetch.
     */
    where: CollaborationRequestWhereUniqueInput
  }

  /**
   * CollaborationRequest findUniqueOrThrow
   */
  export type CollaborationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter, which CollaborationRequest to fetch.
     */
    where: CollaborationRequestWhereUniqueInput
  }

  /**
   * CollaborationRequest findFirst
   */
  export type CollaborationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter, which CollaborationRequest to fetch.
     */
    where?: CollaborationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaborationRequests to fetch.
     */
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollaborationRequests.
     */
    cursor?: CollaborationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaborationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaborationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollaborationRequests.
     */
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * CollaborationRequest findFirstOrThrow
   */
  export type CollaborationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter, which CollaborationRequest to fetch.
     */
    where?: CollaborationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaborationRequests to fetch.
     */
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollaborationRequests.
     */
    cursor?: CollaborationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaborationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaborationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollaborationRequests.
     */
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * CollaborationRequest findMany
   */
  export type CollaborationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter, which CollaborationRequests to fetch.
     */
    where?: CollaborationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaborationRequests to fetch.
     */
    orderBy?: CollaborationRequestOrderByWithRelationInput | CollaborationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollaborationRequests.
     */
    cursor?: CollaborationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaborationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaborationRequests.
     */
    skip?: number
    distinct?: CollaborationRequestScalarFieldEnum | CollaborationRequestScalarFieldEnum[]
  }

  /**
   * CollaborationRequest create
   */
  export type CollaborationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CollaborationRequest.
     */
    data: XOR<CollaborationRequestCreateInput, CollaborationRequestUncheckedCreateInput>
  }

  /**
   * CollaborationRequest createMany
   */
  export type CollaborationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollaborationRequests.
     */
    data: CollaborationRequestCreateManyInput | CollaborationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollaborationRequest createManyAndReturn
   */
  export type CollaborationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CollaborationRequests.
     */
    data: CollaborationRequestCreateManyInput | CollaborationRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollaborationRequest update
   */
  export type CollaborationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CollaborationRequest.
     */
    data: XOR<CollaborationRequestUpdateInput, CollaborationRequestUncheckedUpdateInput>
    /**
     * Choose, which CollaborationRequest to update.
     */
    where: CollaborationRequestWhereUniqueInput
  }

  /**
   * CollaborationRequest updateMany
   */
  export type CollaborationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollaborationRequests.
     */
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyInput>
    /**
     * Filter which CollaborationRequests to update
     */
    where?: CollaborationRequestWhereInput
    /**
     * Limit how many CollaborationRequests to update.
     */
    limit?: number
  }

  /**
   * CollaborationRequest updateManyAndReturn
   */
  export type CollaborationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * The data used to update CollaborationRequests.
     */
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyInput>
    /**
     * Filter which CollaborationRequests to update
     */
    where?: CollaborationRequestWhereInput
    /**
     * Limit how many CollaborationRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollaborationRequest upsert
   */
  export type CollaborationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CollaborationRequest to update in case it exists.
     */
    where: CollaborationRequestWhereUniqueInput
    /**
     * In case the CollaborationRequest found by the `where` argument doesn't exist, create a new CollaborationRequest with this data.
     */
    create: XOR<CollaborationRequestCreateInput, CollaborationRequestUncheckedCreateInput>
    /**
     * In case the CollaborationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaborationRequestUpdateInput, CollaborationRequestUncheckedUpdateInput>
  }

  /**
   * CollaborationRequest delete
   */
  export type CollaborationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
    /**
     * Filter which CollaborationRequest to delete.
     */
    where: CollaborationRequestWhereUniqueInput
  }

  /**
   * CollaborationRequest deleteMany
   */
  export type CollaborationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollaborationRequests to delete
     */
    where?: CollaborationRequestWhereInput
    /**
     * Limit how many CollaborationRequests to delete.
     */
    limit?: number
  }

  /**
   * CollaborationRequest.ad
   */
  export type CollaborationRequest$adArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
  }

  /**
   * CollaborationRequest.announcement
   */
  export type CollaborationRequest$announcementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAnnouncement
     */
    select?: ContentAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentAnnouncement
     */
    omit?: ContentAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAnnouncementInclude<ExtArgs> | null
    where?: ContentAnnouncementWhereInput
  }

  /**
   * CollaborationRequest without action
   */
  export type CollaborationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaborationRequest
     */
    select?: CollaborationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaborationRequest
     */
    omit?: CollaborationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationRequestInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    views: number | null
    readTime: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    views: number | null
    readTime: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    author: string | null
    category: $Enums.BlogCategory | null
    published: boolean | null
    featured: boolean | null
    views: number | null
    readTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    author: string | null
    category: $Enums.BlogCategory | null
    published: boolean | null
    featured: boolean | null
    views: number | null
    readTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    author: number
    category: number
    tags: number
    published: number
    featured: number
    views: number
    readTime: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    views?: true
    readTime?: true
  }

  export type BlogPostSumAggregateInputType = {
    views?: true
    readTime?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    author?: true
    category?: true
    published?: true
    featured?: true
    views?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    author?: true
    category?: true
    published?: true
    featured?: true
    views?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    author?: true
    category?: true
    tags?: true
    published?: true
    featured?: true
    views?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    coverImage: string | null
    author: string
    category: $Enums.BlogCategory
    tags: string[]
    published: boolean
    featured: boolean
    views: number
    readTime: number | null
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    author?: boolean
    category?: boolean
    tags?: boolean
    published?: boolean
    featured?: boolean
    views?: boolean
    readTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    author?: boolean
    category?: boolean
    tags?: boolean
    published?: boolean
    featured?: boolean
    views?: boolean
    readTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    author?: boolean
    category?: boolean
    tags?: boolean
    published?: boolean
    featured?: boolean
    views?: boolean
    readTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    author?: boolean
    category?: boolean
    tags?: boolean
    published?: boolean
    featured?: boolean
    views?: boolean
    readTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "coverImage" | "author" | "category" | "tags" | "published" | "featured" | "views" | "readTime" | "createdAt" | "updatedAt" | "publishedAt", ExtArgs["result"]["blogPost"]>

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      coverImage: string | null
      author: string
      category: $Enums.BlogCategory
      tags: string[]
      published: boolean
      featured: boolean
      views: number
      readTime: number | null
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly author: FieldRef<"BlogPost", 'String'>
    readonly category: FieldRef<"BlogPost", 'BlogCategory'>
    readonly tags: FieldRef<"BlogPost", 'String[]'>
    readonly published: FieldRef<"BlogPost", 'Boolean'>
    readonly featured: FieldRef<"BlogPost", 'Boolean'>
    readonly views: FieldRef<"BlogPost", 'Int'>
    readonly readTime: FieldRef<"BlogPost", 'Int'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string
    message: string
    read: boolean
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "read" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly name: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly read: FieldRef<"ContactMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    userId: string | null
    targetType: $Enums.UserType | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    userId: string | null
    targetType: $Enums.UserType | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    type: number
    userId: number
    targetType: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    userId?: true
    targetType?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    userId?: true
    targetType?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    userId?: true
    targetType?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    type: $Enums.NotificationType
    userId: string | null
    targetType: $Enums.UserType | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    userId?: boolean
    targetType?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    userId?: boolean
    targetType?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    userId?: boolean
    targetType?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    userId?: boolean
    targetType?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "type" | "userId" | "targetType" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      type: $Enums.NotificationType
      userId: string | null
      targetType: $Enums.UserType | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly targetType: FieldRef<"Notification", 'UserType'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model OAuthToken
   */

  export type AggregateOAuthToken = {
    _count: OAuthTokenCountAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  export type OAuthTokenMinAggregateOutputType = {
    id: string | null
    code: string | null
    platform: $Enums.Platform | null
    tokenData: string | null
    userToken: string | null
    used: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthTokenMaxAggregateOutputType = {
    id: string | null
    code: string | null
    platform: $Enums.Platform | null
    tokenData: string | null
    userToken: string | null
    used: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthTokenCountAggregateOutputType = {
    id: number
    code: number
    platform: number
    tokenData: number
    userToken: number
    used: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OAuthTokenMinAggregateInputType = {
    id?: true
    code?: true
    platform?: true
    tokenData?: true
    userToken?: true
    used?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthTokenMaxAggregateInputType = {
    id?: true
    code?: true
    platform?: true
    tokenData?: true
    userToken?: true
    used?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthTokenCountAggregateInputType = {
    id?: true
    code?: true
    platform?: true
    tokenData?: true
    userToken?: true
    used?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OAuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthToken to aggregate.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthTokens
    **/
    _count?: true | OAuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type GetOAuthTokenAggregateType<T extends OAuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthToken[P]>
      : GetScalarType<T[P], AggregateOAuthToken[P]>
  }




  export type OAuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthTokenWhereInput
    orderBy?: OAuthTokenOrderByWithAggregationInput | OAuthTokenOrderByWithAggregationInput[]
    by: OAuthTokenScalarFieldEnum[] | OAuthTokenScalarFieldEnum
    having?: OAuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthTokenCountAggregateInputType | true
    _min?: OAuthTokenMinAggregateInputType
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type OAuthTokenGroupByOutputType = {
    id: string
    code: string
    platform: $Enums.Platform
    tokenData: string
    userToken: string | null
    used: boolean
    expiresAt: Date
    createdAt: Date
    _count: OAuthTokenCountAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  type GetOAuthTokenGroupByPayload<T extends OAuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type OAuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    platform?: boolean
    tokenData?: boolean
    userToken?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthToken"]>

  export type OAuthTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    platform?: boolean
    tokenData?: boolean
    userToken?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthToken"]>

  export type OAuthTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    platform?: boolean
    tokenData?: boolean
    userToken?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oAuthToken"]>

  export type OAuthTokenSelectScalar = {
    id?: boolean
    code?: boolean
    platform?: boolean
    tokenData?: boolean
    userToken?: boolean
    used?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OAuthTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "platform" | "tokenData" | "userToken" | "used" | "expiresAt" | "createdAt", ExtArgs["result"]["oAuthToken"]>

  export type $OAuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      platform: $Enums.Platform
      tokenData: string
      userToken: string | null
      used: boolean
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["oAuthToken"]>
    composites: {}
  }

  type OAuthTokenGetPayload<S extends boolean | null | undefined | OAuthTokenDefaultArgs> = $Result.GetResult<Prisma.$OAuthTokenPayload, S>

  type OAuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthTokenCountAggregateInputType | true
    }

  export interface OAuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthToken'], meta: { name: 'OAuthToken' } }
    /**
     * Find zero or one OAuthToken that matches the filter.
     * @param {OAuthTokenFindUniqueArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthTokenFindUniqueArgs>(args: SelectSubset<T, OAuthTokenFindUniqueArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthTokenFindUniqueOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthTokenFindFirstArgs>(args?: SelectSubset<T, OAuthTokenFindFirstArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany()
     * 
     * // Get first 10 OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthTokenFindManyArgs>(args?: SelectSubset<T, OAuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthToken.
     * @param {OAuthTokenCreateArgs} args - Arguments to create a OAuthToken.
     * @example
     * // Create one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.create({
     *   data: {
     *     // ... data to create a OAuthToken
     *   }
     * })
     * 
     */
    create<T extends OAuthTokenCreateArgs>(args: SelectSubset<T, OAuthTokenCreateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthTokens.
     * @param {OAuthTokenCreateManyArgs} args - Arguments to create many OAuthTokens.
     * @example
     * // Create many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthTokenCreateManyArgs>(args?: SelectSubset<T, OAuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthTokens and returns the data saved in the database.
     * @param {OAuthTokenCreateManyAndReturnArgs} args - Arguments to create many OAuthTokens.
     * @example
     * // Create many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthTokens and only return the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthToken.
     * @param {OAuthTokenDeleteArgs} args - Arguments to delete one OAuthToken.
     * @example
     * // Delete one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.delete({
     *   where: {
     *     // ... filter to delete one OAuthToken
     *   }
     * })
     * 
     */
    delete<T extends OAuthTokenDeleteArgs>(args: SelectSubset<T, OAuthTokenDeleteArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthToken.
     * @param {OAuthTokenUpdateArgs} args - Arguments to update one OAuthToken.
     * @example
     * // Update one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthTokenUpdateArgs>(args: SelectSubset<T, OAuthTokenUpdateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthTokens.
     * @param {OAuthTokenDeleteManyArgs} args - Arguments to filter OAuthTokens to delete.
     * @example
     * // Delete a few OAuthTokens
     * const { count } = await prisma.oAuthToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthTokenDeleteManyArgs>(args?: SelectSubset<T, OAuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthTokenUpdateManyArgs>(args: SelectSubset<T, OAuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthTokens and returns the data updated in the database.
     * @param {OAuthTokenUpdateManyAndReturnArgs} args - Arguments to update many OAuthTokens.
     * @example
     * // Update many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuthTokens and only return the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OAuthTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuthTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuthToken.
     * @param {OAuthTokenUpsertArgs} args - Arguments to update or create a OAuthToken.
     * @example
     * // Update or create a OAuthToken
     * const oAuthToken = await prisma.oAuthToken.upsert({
     *   create: {
     *     // ... data to create a OAuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthToken we want to update
     *   }
     * })
     */
    upsert<T extends OAuthTokenUpsertArgs>(args: SelectSubset<T, OAuthTokenUpsertArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenCountArgs} args - Arguments to filter OAuthTokens to count.
     * @example
     * // Count the number of OAuthTokens
     * const count = await prisma.oAuthToken.count({
     *   where: {
     *     // ... the filter for the OAuthTokens we want to count
     *   }
     * })
    **/
    count<T extends OAuthTokenCountArgs>(
      args?: Subset<T, OAuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OAuthTokenAggregateArgs>(args: Subset<T, OAuthTokenAggregateArgs>): Prisma.PrismaPromise<GetOAuthTokenAggregateType<T>>

    /**
     * Group by OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OAuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: OAuthTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthToken model
   */
  readonly fields: OAuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthToken model
   */
  interface OAuthTokenFieldRefs {
    readonly id: FieldRef<"OAuthToken", 'String'>
    readonly code: FieldRef<"OAuthToken", 'String'>
    readonly platform: FieldRef<"OAuthToken", 'Platform'>
    readonly tokenData: FieldRef<"OAuthToken", 'String'>
    readonly userToken: FieldRef<"OAuthToken", 'String'>
    readonly used: FieldRef<"OAuthToken", 'Boolean'>
    readonly expiresAt: FieldRef<"OAuthToken", 'DateTime'>
    readonly createdAt: FieldRef<"OAuthToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthToken findUnique
   */
  export type OAuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findUniqueOrThrow
   */
  export type OAuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findFirst
   */
  export type OAuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findFirstOrThrow
   */
  export type OAuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findMany
   */
  export type OAuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter, which OAuthTokens to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken create
   */
  export type OAuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a OAuthToken.
     */
    data: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
  }

  /**
   * OAuthToken createMany
   */
  export type OAuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthTokens.
     */
    data: OAuthTokenCreateManyInput | OAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthToken createManyAndReturn
   */
  export type OAuthTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthTokens.
     */
    data: OAuthTokenCreateManyInput | OAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthToken update
   */
  export type OAuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a OAuthToken.
     */
    data: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
    /**
     * Choose, which OAuthToken to update.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken updateMany
   */
  export type OAuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthTokens.
     */
    data: XOR<OAuthTokenUpdateManyMutationInput, OAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthTokens to update
     */
    where?: OAuthTokenWhereInput
    /**
     * Limit how many OAuthTokens to update.
     */
    limit?: number
  }

  /**
   * OAuthToken updateManyAndReturn
   */
  export type OAuthTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * The data used to update OAuthTokens.
     */
    data: XOR<OAuthTokenUpdateManyMutationInput, OAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthTokens to update
     */
    where?: OAuthTokenWhereInput
    /**
     * Limit how many OAuthTokens to update.
     */
    limit?: number
  }

  /**
   * OAuthToken upsert
   */
  export type OAuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the OAuthToken to update in case it exists.
     */
    where: OAuthTokenWhereUniqueInput
    /**
     * In case the OAuthToken found by the `where` argument doesn't exist, create a new OAuthToken with this data.
     */
    create: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
    /**
     * In case the OAuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
  }

  /**
   * OAuthToken delete
   */
  export type OAuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
    /**
     * Filter which OAuthToken to delete.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken deleteMany
   */
  export type OAuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthTokens to delete
     */
    where?: OAuthTokenWhereInput
    /**
     * Limit how many OAuthTokens to delete.
     */
    limit?: number
  }

  /**
   * OAuthToken without action
   */
  export type OAuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthToken
     */
    omit?: OAuthTokenOmit<ExtArgs> | null
  }


  /**
   * Model PayoutSettings
   */

  export type AggregatePayoutSettings = {
    _count: PayoutSettingsCountAggregateOutputType | null
    _avg: PayoutSettingsAvgAggregateOutputType | null
    _sum: PayoutSettingsSumAggregateOutputType | null
    _min: PayoutSettingsMinAggregateOutputType | null
    _max: PayoutSettingsMaxAggregateOutputType | null
  }

  export type PayoutSettingsAvgAggregateOutputType = {
    minimumPayout: number | null
  }

  export type PayoutSettingsSumAggregateOutputType = {
    minimumPayout: number | null
  }

  export type PayoutSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bankName: string | null
    accountName: string | null
    accountNumber: string | null
    bankCode: string | null
    payoutFrequency: $Enums.PayoutFrequency | null
    minimumPayout: number | null
    isVerified: boolean | null
    recipientCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bankName: string | null
    accountName: string | null
    accountNumber: string | null
    bankCode: string | null
    payoutFrequency: $Enums.PayoutFrequency | null
    minimumPayout: number | null
    isVerified: boolean | null
    recipientCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutSettingsCountAggregateOutputType = {
    id: number
    userId: number
    bankName: number
    accountName: number
    accountNumber: number
    bankCode: number
    payoutFrequency: number
    minimumPayout: number
    isVerified: number
    recipientCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayoutSettingsAvgAggregateInputType = {
    minimumPayout?: true
  }

  export type PayoutSettingsSumAggregateInputType = {
    minimumPayout?: true
  }

  export type PayoutSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    bankCode?: true
    payoutFrequency?: true
    minimumPayout?: true
    isVerified?: true
    recipientCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    bankCode?: true
    payoutFrequency?: true
    minimumPayout?: true
    isVerified?: true
    recipientCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    bankCode?: true
    payoutFrequency?: true
    minimumPayout?: true
    isVerified?: true
    recipientCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayoutSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutSettings to aggregate.
     */
    where?: PayoutSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettings to fetch.
     */
    orderBy?: PayoutSettingsOrderByWithRelationInput | PayoutSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayoutSettings
    **/
    _count?: true | PayoutSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutSettingsMaxAggregateInputType
  }

  export type GetPayoutSettingsAggregateType<T extends PayoutSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayoutSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayoutSettings[P]>
      : GetScalarType<T[P], AggregatePayoutSettings[P]>
  }




  export type PayoutSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutSettingsWhereInput
    orderBy?: PayoutSettingsOrderByWithAggregationInput | PayoutSettingsOrderByWithAggregationInput[]
    by: PayoutSettingsScalarFieldEnum[] | PayoutSettingsScalarFieldEnum
    having?: PayoutSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutSettingsCountAggregateInputType | true
    _avg?: PayoutSettingsAvgAggregateInputType
    _sum?: PayoutSettingsSumAggregateInputType
    _min?: PayoutSettingsMinAggregateInputType
    _max?: PayoutSettingsMaxAggregateInputType
  }

  export type PayoutSettingsGroupByOutputType = {
    id: string
    userId: string
    bankName: string | null
    accountName: string | null
    accountNumber: string | null
    bankCode: string | null
    payoutFrequency: $Enums.PayoutFrequency
    minimumPayout: number
    isVerified: boolean
    recipientCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: PayoutSettingsCountAggregateOutputType | null
    _avg: PayoutSettingsAvgAggregateOutputType | null
    _sum: PayoutSettingsSumAggregateOutputType | null
    _min: PayoutSettingsMinAggregateOutputType | null
    _max: PayoutSettingsMaxAggregateOutputType | null
  }

  type GetPayoutSettingsGroupByPayload<T extends PayoutSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    bankCode?: boolean
    payoutFrequency?: boolean
    minimumPayout?: boolean
    isVerified?: boolean
    recipientCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutSettings"]>

  export type PayoutSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    bankCode?: boolean
    payoutFrequency?: boolean
    minimumPayout?: boolean
    isVerified?: boolean
    recipientCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutSettings"]>

  export type PayoutSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    bankCode?: boolean
    payoutFrequency?: boolean
    minimumPayout?: boolean
    isVerified?: boolean
    recipientCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutSettings"]>

  export type PayoutSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    bankCode?: boolean
    payoutFrequency?: boolean
    minimumPayout?: boolean
    isVerified?: boolean
    recipientCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayoutSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bankName" | "accountName" | "accountNumber" | "bankCode" | "payoutFrequency" | "minimumPayout" | "isVerified" | "recipientCode" | "createdAt" | "updatedAt", ExtArgs["result"]["payoutSettings"]>
  export type PayoutSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayoutSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayoutSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bankName: string | null
      accountName: string | null
      accountNumber: string | null
      bankCode: string | null
      payoutFrequency: $Enums.PayoutFrequency
      minimumPayout: number
      isVerified: boolean
      recipientCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payoutSettings"]>
    composites: {}
  }

  type PayoutSettingsGetPayload<S extends boolean | null | undefined | PayoutSettingsDefaultArgs> = $Result.GetResult<Prisma.$PayoutSettingsPayload, S>

  type PayoutSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutSettingsCountAggregateInputType | true
    }

  export interface PayoutSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayoutSettings'], meta: { name: 'PayoutSettings' } }
    /**
     * Find zero or one PayoutSettings that matches the filter.
     * @param {PayoutSettingsFindUniqueArgs} args - Arguments to find a PayoutSettings
     * @example
     * // Get one PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutSettingsFindUniqueArgs>(args: SelectSubset<T, PayoutSettingsFindUniqueArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayoutSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutSettingsFindUniqueOrThrowArgs} args - Arguments to find a PayoutSettings
     * @example
     * // Get one PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsFindFirstArgs} args - Arguments to find a PayoutSettings
     * @example
     * // Get one PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutSettingsFindFirstArgs>(args?: SelectSubset<T, PayoutSettingsFindFirstArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsFindFirstOrThrowArgs} args - Arguments to find a PayoutSettings
     * @example
     * // Get one PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayoutSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findMany()
     * 
     * // Get first 10 PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutSettingsWithIdOnly = await prisma.payoutSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutSettingsFindManyArgs>(args?: SelectSubset<T, PayoutSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayoutSettings.
     * @param {PayoutSettingsCreateArgs} args - Arguments to create a PayoutSettings.
     * @example
     * // Create one PayoutSettings
     * const PayoutSettings = await prisma.payoutSettings.create({
     *   data: {
     *     // ... data to create a PayoutSettings
     *   }
     * })
     * 
     */
    create<T extends PayoutSettingsCreateArgs>(args: SelectSubset<T, PayoutSettingsCreateArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayoutSettings.
     * @param {PayoutSettingsCreateManyArgs} args - Arguments to create many PayoutSettings.
     * @example
     * // Create many PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutSettingsCreateManyArgs>(args?: SelectSubset<T, PayoutSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayoutSettings and returns the data saved in the database.
     * @param {PayoutSettingsCreateManyAndReturnArgs} args - Arguments to create many PayoutSettings.
     * @example
     * // Create many PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayoutSettings and only return the `id`
     * const payoutSettingsWithIdOnly = await prisma.payoutSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayoutSettings.
     * @param {PayoutSettingsDeleteArgs} args - Arguments to delete one PayoutSettings.
     * @example
     * // Delete one PayoutSettings
     * const PayoutSettings = await prisma.payoutSettings.delete({
     *   where: {
     *     // ... filter to delete one PayoutSettings
     *   }
     * })
     * 
     */
    delete<T extends PayoutSettingsDeleteArgs>(args: SelectSubset<T, PayoutSettingsDeleteArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayoutSettings.
     * @param {PayoutSettingsUpdateArgs} args - Arguments to update one PayoutSettings.
     * @example
     * // Update one PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutSettingsUpdateArgs>(args: SelectSubset<T, PayoutSettingsUpdateArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayoutSettings.
     * @param {PayoutSettingsDeleteManyArgs} args - Arguments to filter PayoutSettings to delete.
     * @example
     * // Delete a few PayoutSettings
     * const { count } = await prisma.payoutSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutSettingsDeleteManyArgs>(args?: SelectSubset<T, PayoutSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutSettingsUpdateManyArgs>(args: SelectSubset<T, PayoutSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutSettings and returns the data updated in the database.
     * @param {PayoutSettingsUpdateManyAndReturnArgs} args - Arguments to update many PayoutSettings.
     * @example
     * // Update many PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayoutSettings and only return the `id`
     * const payoutSettingsWithIdOnly = await prisma.payoutSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayoutSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PayoutSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayoutSettings.
     * @param {PayoutSettingsUpsertArgs} args - Arguments to update or create a PayoutSettings.
     * @example
     * // Update or create a PayoutSettings
     * const payoutSettings = await prisma.payoutSettings.upsert({
     *   create: {
     *     // ... data to create a PayoutSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutSettings we want to update
     *   }
     * })
     */
    upsert<T extends PayoutSettingsUpsertArgs>(args: SelectSubset<T, PayoutSettingsUpsertArgs<ExtArgs>>): Prisma__PayoutSettingsClient<$Result.GetResult<Prisma.$PayoutSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayoutSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsCountArgs} args - Arguments to filter PayoutSettings to count.
     * @example
     * // Count the number of PayoutSettings
     * const count = await prisma.payoutSettings.count({
     *   where: {
     *     // ... the filter for the PayoutSettings we want to count
     *   }
     * })
    **/
    count<T extends PayoutSettingsCountArgs>(
      args?: Subset<T, PayoutSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayoutSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayoutSettingsAggregateArgs>(args: Subset<T, PayoutSettingsAggregateArgs>): Prisma.PrismaPromise<GetPayoutSettingsAggregateType<T>>

    /**
     * Group by PayoutSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayoutSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PayoutSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayoutSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayoutSettings model
   */
  readonly fields: PayoutSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayoutSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayoutSettings model
   */
  interface PayoutSettingsFieldRefs {
    readonly id: FieldRef<"PayoutSettings", 'String'>
    readonly userId: FieldRef<"PayoutSettings", 'String'>
    readonly bankName: FieldRef<"PayoutSettings", 'String'>
    readonly accountName: FieldRef<"PayoutSettings", 'String'>
    readonly accountNumber: FieldRef<"PayoutSettings", 'String'>
    readonly bankCode: FieldRef<"PayoutSettings", 'String'>
    readonly payoutFrequency: FieldRef<"PayoutSettings", 'PayoutFrequency'>
    readonly minimumPayout: FieldRef<"PayoutSettings", 'Float'>
    readonly isVerified: FieldRef<"PayoutSettings", 'Boolean'>
    readonly recipientCode: FieldRef<"PayoutSettings", 'String'>
    readonly createdAt: FieldRef<"PayoutSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"PayoutSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayoutSettings findUnique
   */
  export type PayoutSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayoutSettings to fetch.
     */
    where: PayoutSettingsWhereUniqueInput
  }

  /**
   * PayoutSettings findUniqueOrThrow
   */
  export type PayoutSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayoutSettings to fetch.
     */
    where: PayoutSettingsWhereUniqueInput
  }

  /**
   * PayoutSettings findFirst
   */
  export type PayoutSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayoutSettings to fetch.
     */
    where?: PayoutSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettings to fetch.
     */
    orderBy?: PayoutSettingsOrderByWithRelationInput | PayoutSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutSettings.
     */
    cursor?: PayoutSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutSettings.
     */
    distinct?: PayoutSettingsScalarFieldEnum | PayoutSettingsScalarFieldEnum[]
  }

  /**
   * PayoutSettings findFirstOrThrow
   */
  export type PayoutSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayoutSettings to fetch.
     */
    where?: PayoutSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettings to fetch.
     */
    orderBy?: PayoutSettingsOrderByWithRelationInput | PayoutSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutSettings.
     */
    cursor?: PayoutSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutSettings.
     */
    distinct?: PayoutSettingsScalarFieldEnum | PayoutSettingsScalarFieldEnum[]
  }

  /**
   * PayoutSettings findMany
   */
  export type PayoutSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter, which PayoutSettings to fetch.
     */
    where?: PayoutSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutSettings to fetch.
     */
    orderBy?: PayoutSettingsOrderByWithRelationInput | PayoutSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayoutSettings.
     */
    cursor?: PayoutSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutSettings.
     */
    skip?: number
    distinct?: PayoutSettingsScalarFieldEnum | PayoutSettingsScalarFieldEnum[]
  }

  /**
   * PayoutSettings create
   */
  export type PayoutSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a PayoutSettings.
     */
    data: XOR<PayoutSettingsCreateInput, PayoutSettingsUncheckedCreateInput>
  }

  /**
   * PayoutSettings createMany
   */
  export type PayoutSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutSettings.
     */
    data: PayoutSettingsCreateManyInput | PayoutSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutSettings createManyAndReturn
   */
  export type PayoutSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PayoutSettings.
     */
    data: PayoutSettingsCreateManyInput | PayoutSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutSettings update
   */
  export type PayoutSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a PayoutSettings.
     */
    data: XOR<PayoutSettingsUpdateInput, PayoutSettingsUncheckedUpdateInput>
    /**
     * Choose, which PayoutSettings to update.
     */
    where: PayoutSettingsWhereUniqueInput
  }

  /**
   * PayoutSettings updateMany
   */
  export type PayoutSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutSettings.
     */
    data: XOR<PayoutSettingsUpdateManyMutationInput, PayoutSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PayoutSettings to update
     */
    where?: PayoutSettingsWhereInput
    /**
     * Limit how many PayoutSettings to update.
     */
    limit?: number
  }

  /**
   * PayoutSettings updateManyAndReturn
   */
  export type PayoutSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PayoutSettings.
     */
    data: XOR<PayoutSettingsUpdateManyMutationInput, PayoutSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PayoutSettings to update
     */
    where?: PayoutSettingsWhereInput
    /**
     * Limit how many PayoutSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutSettings upsert
   */
  export type PayoutSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the PayoutSettings to update in case it exists.
     */
    where: PayoutSettingsWhereUniqueInput
    /**
     * In case the PayoutSettings found by the `where` argument doesn't exist, create a new PayoutSettings with this data.
     */
    create: XOR<PayoutSettingsCreateInput, PayoutSettingsUncheckedCreateInput>
    /**
     * In case the PayoutSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutSettingsUpdateInput, PayoutSettingsUncheckedUpdateInput>
  }

  /**
   * PayoutSettings delete
   */
  export type PayoutSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
    /**
     * Filter which PayoutSettings to delete.
     */
    where: PayoutSettingsWhereUniqueInput
  }

  /**
   * PayoutSettings deleteMany
   */
  export type PayoutSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutSettings to delete
     */
    where?: PayoutSettingsWhereInput
    /**
     * Limit how many PayoutSettings to delete.
     */
    limit?: number
  }

  /**
   * PayoutSettings without action
   */
  export type PayoutSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutSettings
     */
    select?: PayoutSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutSettings
     */
    omit?: PayoutSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutSettingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    type: 'type',
    googleId: 'googleId',
    bio: 'bio',
    location: 'location',
    website: 'website',
    avatar: 'avatar',
    niches: 'niches',
    industry: 'industry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    channelId: 'channelId',
    channelName: 'channelName',
    verified: 'verified',
    subscribers: 'subscribers',
    friendsCount: 'friendsCount',
    thumbnail: 'thumbnail',
    customUrl: 'customUrl',
    description: 'description',
    analytics: 'analytics',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    lastRefreshedAt: 'lastRefreshedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const AdScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    title: 'title',
    description: 'description',
    targetNiches: 'targetNiches',
    images: 'images',
    videos: 'videos',
    videoDurations: 'videoDurations',
    talkingPoints: 'talkingPoints',
    guidelines: 'guidelines',
    scriptRequired: 'scriptRequired',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdScalarFieldEnum = (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum]


  export const AdRequestScalarFieldEnum: {
    id: 'id',
    adId: 'adId',
    creatorId: 'creatorId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdRequestScalarFieldEnum = (typeof AdRequestScalarFieldEnum)[keyof typeof AdRequestScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ContentAnnouncementScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    title: 'title',
    description: 'description',
    platforms: 'platforms',
    channelIds: 'channelIds',
    scheduledAt: 'scheduledAt',
    thumbnail: 'thumbnail',
    maxSlots: 'maxSlots',
    filledSlots: 'filledSlots',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentAnnouncementScalarFieldEnum = (typeof ContentAnnouncementScalarFieldEnum)[keyof typeof ContentAnnouncementScalarFieldEnum]


  export const CollaborationRequestScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    creatorId: 'creatorId',
    channels: 'channels',
    totalPrice: 'totalPrice',
    message: 'message',
    status: 'status',
    isLongTermDeal: 'isLongTermDeal',
    videoCount: 'videoCount',
    videosPosted: 'videosPosted',
    adId: 'adId',
    announcementId: 'announcementId',
    paymentReference: 'paymentReference',
    viewedByCreator: 'viewedByCreator',
    viewedByBrand: 'viewedByBrand',
    materialsDownloaded: 'materialsDownloaded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollaborationRequestScalarFieldEnum = (typeof CollaborationRequestScalarFieldEnum)[keyof typeof CollaborationRequestScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    author: 'author',
    category: 'category',
    tags: 'tags',
    published: 'published',
    featured: 'featured',
    views: 'views',
    readTime: 'readTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    userId: 'userId',
    targetType: 'targetType',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const OAuthTokenScalarFieldEnum: {
    id: 'id',
    code: 'code',
    platform: 'platform',
    tokenData: 'tokenData',
    userToken: 'userToken',
    used: 'used',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OAuthTokenScalarFieldEnum = (typeof OAuthTokenScalarFieldEnum)[keyof typeof OAuthTokenScalarFieldEnum]


  export const PayoutSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bankName: 'bankName',
    accountName: 'accountName',
    accountNumber: 'accountNumber',
    bankCode: 'bankCode',
    payoutFrequency: 'payoutFrequency',
    minimumPayout: 'minimumPayout',
    isVerified: 'isVerified',
    recipientCode: 'recipientCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayoutSettingsScalarFieldEnum = (typeof PayoutSettingsScalarFieldEnum)[keyof typeof PayoutSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Niche[]'
   */
  export type ListEnumNicheFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Niche[]'>
    


  /**
   * Reference to a field of type 'Niche'
   */
  export type EnumNicheFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Niche'>
    


  /**
   * Reference to a field of type 'Industry'
   */
  export type EnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry'>
    


  /**
   * Reference to a field of type 'Industry[]'
   */
  export type ListEnumIndustryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industry[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AdStatus'
   */
  export type EnumAdStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdStatus'>
    


  /**
   * Reference to a field of type 'AdStatus[]'
   */
  export type ListEnumAdStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdStatus[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'AnnouncementStatus'
   */
  export type EnumAnnouncementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementStatus'>
    


  /**
   * Reference to a field of type 'AnnouncementStatus[]'
   */
  export type ListEnumAnnouncementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CollaborationStatus'
   */
  export type EnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus'>
    


  /**
   * Reference to a field of type 'CollaborationStatus[]'
   */
  export type ListEnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus[]'>
    


  /**
   * Reference to a field of type 'BlogCategory'
   */
  export type EnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory'>
    


  /**
   * Reference to a field of type 'BlogCategory[]'
   */
  export type ListEnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'PayoutFrequency'
   */
  export type EnumPayoutFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutFrequency'>
    


  /**
   * Reference to a field of type 'PayoutFrequency[]'
   */
  export type ListEnumPayoutFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutFrequency[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    type?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    googleId?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    niches?: EnumNicheNullableListFilter<"User">
    industry?: EnumIndustryNullableFilter<"User"> | $Enums.Industry | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    channels?: ChannelListRelationFilter
    ads?: AdListRelationFilter
    adRequests?: AdRequestListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    contentAnnouncements?: ContentAnnouncementListRelationFilter
    sentCollabRequests?: CollaborationRequestListRelationFilter
    receivedCollabRequests?: CollaborationRequestListRelationFilter
    notifications?: NotificationListRelationFilter
    payoutSettings?: XOR<PayoutSettingsNullableScalarRelationFilter, PayoutSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    niches?: SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channels?: ChannelOrderByRelationAggregateInput
    ads?: AdOrderByRelationAggregateInput
    adRequests?: AdRequestOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    contentAnnouncements?: ContentAnnouncementOrderByRelationAggregateInput
    sentCollabRequests?: CollaborationRequestOrderByRelationAggregateInput
    receivedCollabRequests?: CollaborationRequestOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    payoutSettings?: PayoutSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    type?: EnumUserTypeNullableFilter<"User"> | $Enums.UserType | null
    bio?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    niches?: EnumNicheNullableListFilter<"User">
    industry?: EnumIndustryNullableFilter<"User"> | $Enums.Industry | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    channels?: ChannelListRelationFilter
    ads?: AdListRelationFilter
    adRequests?: AdRequestListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    contentAnnouncements?: ContentAnnouncementListRelationFilter
    sentCollabRequests?: CollaborationRequestListRelationFilter
    receivedCollabRequests?: CollaborationRequestListRelationFilter
    notifications?: NotificationListRelationFilter
    payoutSettings?: XOR<PayoutSettingsNullableScalarRelationFilter, PayoutSettingsWhereInput> | null
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    niches?: SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeNullableWithAggregatesFilter<"User"> | $Enums.UserType | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    niches?: EnumNicheNullableListFilter<"User">
    industry?: EnumIndustryNullableWithAggregatesFilter<"User"> | $Enums.Industry | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    platform?: EnumPlatformFilter<"Channel"> | $Enums.Platform
    channelId?: StringFilter<"Channel"> | string
    channelName?: StringFilter<"Channel"> | string
    verified?: BoolFilter<"Channel"> | boolean
    subscribers?: IntNullableFilter<"Channel"> | number | null
    friendsCount?: IntNullableFilter<"Channel"> | number | null
    thumbnail?: StringNullableFilter<"Channel"> | string | null
    customUrl?: StringNullableFilter<"Channel"> | string | null
    description?: StringNullableFilter<"Channel"> | string | null
    analytics?: JsonNullableFilter<"Channel">
    accessToken?: StringNullableFilter<"Channel"> | string | null
    refreshToken?: StringNullableFilter<"Channel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    lastRefreshedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    verified?: SortOrder
    subscribers?: SortOrderInput | SortOrder
    friendsCount?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    customUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    analytics?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    lastRefreshedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platform_channelId?: ChannelUserIdPlatformChannelIdCompoundUniqueInput
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    userId?: StringFilter<"Channel"> | string
    platform?: EnumPlatformFilter<"Channel"> | $Enums.Platform
    channelId?: StringFilter<"Channel"> | string
    channelName?: StringFilter<"Channel"> | string
    verified?: BoolFilter<"Channel"> | boolean
    subscribers?: IntNullableFilter<"Channel"> | number | null
    friendsCount?: IntNullableFilter<"Channel"> | number | null
    thumbnail?: StringNullableFilter<"Channel"> | string | null
    customUrl?: StringNullableFilter<"Channel"> | string | null
    description?: StringNullableFilter<"Channel"> | string | null
    analytics?: JsonNullableFilter<"Channel">
    accessToken?: StringNullableFilter<"Channel"> | string | null
    refreshToken?: StringNullableFilter<"Channel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    lastRefreshedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_platform_channelId">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    verified?: SortOrder
    subscribers?: SortOrderInput | SortOrder
    friendsCount?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    customUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    analytics?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    lastRefreshedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    userId?: StringWithAggregatesFilter<"Channel"> | string
    platform?: EnumPlatformWithAggregatesFilter<"Channel"> | $Enums.Platform
    channelId?: StringWithAggregatesFilter<"Channel"> | string
    channelName?: StringWithAggregatesFilter<"Channel"> | string
    verified?: BoolWithAggregatesFilter<"Channel"> | boolean
    subscribers?: IntNullableWithAggregatesFilter<"Channel"> | number | null
    friendsCount?: IntNullableWithAggregatesFilter<"Channel"> | number | null
    thumbnail?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    customUrl?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    description?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    analytics?: JsonNullableWithAggregatesFilter<"Channel">
    accessToken?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Channel"> | string | null
    tokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Channel"> | Date | string | null
    lastRefreshedAt?: DateTimeNullableWithAggregatesFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type AdWhereInput = {
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    id?: StringFilter<"Ad"> | string
    brandId?: StringFilter<"Ad"> | string
    title?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    targetNiches?: EnumNicheNullableListFilter<"Ad">
    images?: StringNullableListFilter<"Ad">
    videos?: StringNullableListFilter<"Ad">
    videoDurations?: IntNullableListFilter<"Ad">
    talkingPoints?: StringNullableFilter<"Ad"> | string | null
    guidelines?: StringNullableFilter<"Ad"> | string | null
    scriptRequired?: BoolFilter<"Ad"> | boolean
    status?: EnumAdStatusFilter<"Ad"> | $Enums.AdStatus
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    adRequests?: AdRequestListRelationFilter
    collabRequests?: CollaborationRequestListRelationFilter
  }

  export type AdOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetNiches?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    videoDurations?: SortOrder
    talkingPoints?: SortOrderInput | SortOrder
    guidelines?: SortOrderInput | SortOrder
    scriptRequired?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: UserOrderByWithRelationInput
    adRequests?: AdRequestOrderByRelationAggregateInput
    collabRequests?: CollaborationRequestOrderByRelationAggregateInput
  }

  export type AdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    brandId?: StringFilter<"Ad"> | string
    title?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    targetNiches?: EnumNicheNullableListFilter<"Ad">
    images?: StringNullableListFilter<"Ad">
    videos?: StringNullableListFilter<"Ad">
    videoDurations?: IntNullableListFilter<"Ad">
    talkingPoints?: StringNullableFilter<"Ad"> | string | null
    guidelines?: StringNullableFilter<"Ad"> | string | null
    scriptRequired?: BoolFilter<"Ad"> | boolean
    status?: EnumAdStatusFilter<"Ad"> | $Enums.AdStatus
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    adRequests?: AdRequestListRelationFilter
    collabRequests?: CollaborationRequestListRelationFilter
  }, "id">

  export type AdOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    targetNiches?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    videoDurations?: SortOrder
    talkingPoints?: SortOrderInput | SortOrder
    guidelines?: SortOrderInput | SortOrder
    scriptRequired?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdCountOrderByAggregateInput
    _avg?: AdAvgOrderByAggregateInput
    _max?: AdMaxOrderByAggregateInput
    _min?: AdMinOrderByAggregateInput
    _sum?: AdSumOrderByAggregateInput
  }

  export type AdScalarWhereWithAggregatesInput = {
    AND?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    OR?: AdScalarWhereWithAggregatesInput[]
    NOT?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ad"> | string
    brandId?: StringWithAggregatesFilter<"Ad"> | string
    title?: StringWithAggregatesFilter<"Ad"> | string
    description?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    targetNiches?: EnumNicheNullableListFilter<"Ad">
    images?: StringNullableListFilter<"Ad">
    videos?: StringNullableListFilter<"Ad">
    videoDurations?: IntNullableListFilter<"Ad">
    talkingPoints?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    guidelines?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    scriptRequired?: BoolWithAggregatesFilter<"Ad"> | boolean
    status?: EnumAdStatusWithAggregatesFilter<"Ad"> | $Enums.AdStatus
    createdAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
  }

  export type AdRequestWhereInput = {
    AND?: AdRequestWhereInput | AdRequestWhereInput[]
    OR?: AdRequestWhereInput[]
    NOT?: AdRequestWhereInput | AdRequestWhereInput[]
    id?: StringFilter<"AdRequest"> | string
    adId?: StringFilter<"AdRequest"> | string
    creatorId?: StringFilter<"AdRequest"> | string
    status?: EnumRequestStatusFilter<"AdRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"AdRequest"> | string | null
    createdAt?: DateTimeFilter<"AdRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AdRequest"> | Date | string
    ad?: XOR<AdScalarRelationFilter, AdWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdRequestOrderByWithRelationInput = {
    id?: SortOrder
    adId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ad?: AdOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type AdRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    adId_creatorId?: AdRequestAdIdCreatorIdCompoundUniqueInput
    AND?: AdRequestWhereInput | AdRequestWhereInput[]
    OR?: AdRequestWhereInput[]
    NOT?: AdRequestWhereInput | AdRequestWhereInput[]
    adId?: StringFilter<"AdRequest"> | string
    creatorId?: StringFilter<"AdRequest"> | string
    status?: EnumRequestStatusFilter<"AdRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"AdRequest"> | string | null
    createdAt?: DateTimeFilter<"AdRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AdRequest"> | Date | string
    ad?: XOR<AdScalarRelationFilter, AdWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "adId_creatorId">

  export type AdRequestOrderByWithAggregationInput = {
    id?: SortOrder
    adId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdRequestCountOrderByAggregateInput
    _max?: AdRequestMaxOrderByAggregateInput
    _min?: AdRequestMinOrderByAggregateInput
  }

  export type AdRequestScalarWhereWithAggregatesInput = {
    AND?: AdRequestScalarWhereWithAggregatesInput | AdRequestScalarWhereWithAggregatesInput[]
    OR?: AdRequestScalarWhereWithAggregatesInput[]
    NOT?: AdRequestScalarWhereWithAggregatesInput | AdRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdRequest"> | string
    adId?: StringWithAggregatesFilter<"AdRequest"> | string
    creatorId?: StringWithAggregatesFilter<"AdRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"AdRequest"> | $Enums.RequestStatus
    message?: StringNullableWithAggregatesFilter<"AdRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdRequest"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    fromUserId?: StringWithAggregatesFilter<"Message"> | string
    toUserId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ContentAnnouncementWhereInput = {
    AND?: ContentAnnouncementWhereInput | ContentAnnouncementWhereInput[]
    OR?: ContentAnnouncementWhereInput[]
    NOT?: ContentAnnouncementWhereInput | ContentAnnouncementWhereInput[]
    id?: StringFilter<"ContentAnnouncement"> | string
    creatorId?: StringFilter<"ContentAnnouncement"> | string
    title?: StringFilter<"ContentAnnouncement"> | string
    description?: StringNullableFilter<"ContentAnnouncement"> | string | null
    platforms?: EnumPlatformNullableListFilter<"ContentAnnouncement">
    channelIds?: StringNullableListFilter<"ContentAnnouncement">
    scheduledAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    thumbnail?: StringNullableFilter<"ContentAnnouncement"> | string | null
    maxSlots?: IntFilter<"ContentAnnouncement"> | number
    filledSlots?: IntFilter<"ContentAnnouncement"> | number
    status?: EnumAnnouncementStatusFilter<"ContentAnnouncement"> | $Enums.AnnouncementStatus
    createdAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborationRequests?: CollaborationRequestListRelationFilter
  }

  export type ContentAnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    platforms?: SortOrder
    channelIds?: SortOrder
    scheduledAt?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    collaborationRequests?: CollaborationRequestOrderByRelationAggregateInput
  }

  export type ContentAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentAnnouncementWhereInput | ContentAnnouncementWhereInput[]
    OR?: ContentAnnouncementWhereInput[]
    NOT?: ContentAnnouncementWhereInput | ContentAnnouncementWhereInput[]
    creatorId?: StringFilter<"ContentAnnouncement"> | string
    title?: StringFilter<"ContentAnnouncement"> | string
    description?: StringNullableFilter<"ContentAnnouncement"> | string | null
    platforms?: EnumPlatformNullableListFilter<"ContentAnnouncement">
    channelIds?: StringNullableListFilter<"ContentAnnouncement">
    scheduledAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    thumbnail?: StringNullableFilter<"ContentAnnouncement"> | string | null
    maxSlots?: IntFilter<"ContentAnnouncement"> | number
    filledSlots?: IntFilter<"ContentAnnouncement"> | number
    status?: EnumAnnouncementStatusFilter<"ContentAnnouncement"> | $Enums.AnnouncementStatus
    createdAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborationRequests?: CollaborationRequestListRelationFilter
  }, "id">

  export type ContentAnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    platforms?: SortOrder
    channelIds?: SortOrder
    scheduledAt?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentAnnouncementCountOrderByAggregateInput
    _avg?: ContentAnnouncementAvgOrderByAggregateInput
    _max?: ContentAnnouncementMaxOrderByAggregateInput
    _min?: ContentAnnouncementMinOrderByAggregateInput
    _sum?: ContentAnnouncementSumOrderByAggregateInput
  }

  export type ContentAnnouncementScalarWhereWithAggregatesInput = {
    AND?: ContentAnnouncementScalarWhereWithAggregatesInput | ContentAnnouncementScalarWhereWithAggregatesInput[]
    OR?: ContentAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: ContentAnnouncementScalarWhereWithAggregatesInput | ContentAnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentAnnouncement"> | string
    creatorId?: StringWithAggregatesFilter<"ContentAnnouncement"> | string
    title?: StringWithAggregatesFilter<"ContentAnnouncement"> | string
    description?: StringNullableWithAggregatesFilter<"ContentAnnouncement"> | string | null
    platforms?: EnumPlatformNullableListFilter<"ContentAnnouncement">
    channelIds?: StringNullableListFilter<"ContentAnnouncement">
    scheduledAt?: DateTimeWithAggregatesFilter<"ContentAnnouncement"> | Date | string
    thumbnail?: StringNullableWithAggregatesFilter<"ContentAnnouncement"> | string | null
    maxSlots?: IntWithAggregatesFilter<"ContentAnnouncement"> | number
    filledSlots?: IntWithAggregatesFilter<"ContentAnnouncement"> | number
    status?: EnumAnnouncementStatusWithAggregatesFilter<"ContentAnnouncement"> | $Enums.AnnouncementStatus
    createdAt?: DateTimeWithAggregatesFilter<"ContentAnnouncement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentAnnouncement"> | Date | string
  }

  export type CollaborationRequestWhereInput = {
    AND?: CollaborationRequestWhereInput | CollaborationRequestWhereInput[]
    OR?: CollaborationRequestWhereInput[]
    NOT?: CollaborationRequestWhereInput | CollaborationRequestWhereInput[]
    id?: StringFilter<"CollaborationRequest"> | string
    brandId?: StringFilter<"CollaborationRequest"> | string
    creatorId?: StringFilter<"CollaborationRequest"> | string
    channels?: JsonFilter<"CollaborationRequest">
    totalPrice?: FloatFilter<"CollaborationRequest"> | number
    message?: StringNullableFilter<"CollaborationRequest"> | string | null
    status?: EnumCollaborationStatusFilter<"CollaborationRequest"> | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFilter<"CollaborationRequest"> | boolean
    videoCount?: IntNullableFilter<"CollaborationRequest"> | number | null
    videosPosted?: IntFilter<"CollaborationRequest"> | number
    adId?: StringNullableFilter<"CollaborationRequest"> | string | null
    announcementId?: StringNullableFilter<"CollaborationRequest"> | string | null
    paymentReference?: StringNullableFilter<"CollaborationRequest"> | string | null
    viewedByCreator?: BoolFilter<"CollaborationRequest"> | boolean
    viewedByBrand?: BoolFilter<"CollaborationRequest"> | boolean
    materialsDownloaded?: BoolFilter<"CollaborationRequest"> | boolean
    createdAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    ad?: XOR<AdNullableScalarRelationFilter, AdWhereInput> | null
    announcement?: XOR<ContentAnnouncementNullableScalarRelationFilter, ContentAnnouncementWhereInput> | null
  }

  export type CollaborationRequestOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    channels?: SortOrder
    totalPrice?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    isLongTermDeal?: SortOrder
    videoCount?: SortOrderInput | SortOrder
    videosPosted?: SortOrder
    adId?: SortOrderInput | SortOrder
    announcementId?: SortOrderInput | SortOrder
    paymentReference?: SortOrderInput | SortOrder
    viewedByCreator?: SortOrder
    viewedByBrand?: SortOrder
    materialsDownloaded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    ad?: AdOrderByWithRelationInput
    announcement?: ContentAnnouncementOrderByWithRelationInput
  }

  export type CollaborationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaborationRequestWhereInput | CollaborationRequestWhereInput[]
    OR?: CollaborationRequestWhereInput[]
    NOT?: CollaborationRequestWhereInput | CollaborationRequestWhereInput[]
    brandId?: StringFilter<"CollaborationRequest"> | string
    creatorId?: StringFilter<"CollaborationRequest"> | string
    channels?: JsonFilter<"CollaborationRequest">
    totalPrice?: FloatFilter<"CollaborationRequest"> | number
    message?: StringNullableFilter<"CollaborationRequest"> | string | null
    status?: EnumCollaborationStatusFilter<"CollaborationRequest"> | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFilter<"CollaborationRequest"> | boolean
    videoCount?: IntNullableFilter<"CollaborationRequest"> | number | null
    videosPosted?: IntFilter<"CollaborationRequest"> | number
    adId?: StringNullableFilter<"CollaborationRequest"> | string | null
    announcementId?: StringNullableFilter<"CollaborationRequest"> | string | null
    paymentReference?: StringNullableFilter<"CollaborationRequest"> | string | null
    viewedByCreator?: BoolFilter<"CollaborationRequest"> | boolean
    viewedByBrand?: BoolFilter<"CollaborationRequest"> | boolean
    materialsDownloaded?: BoolFilter<"CollaborationRequest"> | boolean
    createdAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    ad?: XOR<AdNullableScalarRelationFilter, AdWhereInput> | null
    announcement?: XOR<ContentAnnouncementNullableScalarRelationFilter, ContentAnnouncementWhereInput> | null
  }, "id">

  export type CollaborationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    channels?: SortOrder
    totalPrice?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    isLongTermDeal?: SortOrder
    videoCount?: SortOrderInput | SortOrder
    videosPosted?: SortOrder
    adId?: SortOrderInput | SortOrder
    announcementId?: SortOrderInput | SortOrder
    paymentReference?: SortOrderInput | SortOrder
    viewedByCreator?: SortOrder
    viewedByBrand?: SortOrder
    materialsDownloaded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollaborationRequestCountOrderByAggregateInput
    _avg?: CollaborationRequestAvgOrderByAggregateInput
    _max?: CollaborationRequestMaxOrderByAggregateInput
    _min?: CollaborationRequestMinOrderByAggregateInput
    _sum?: CollaborationRequestSumOrderByAggregateInput
  }

  export type CollaborationRequestScalarWhereWithAggregatesInput = {
    AND?: CollaborationRequestScalarWhereWithAggregatesInput | CollaborationRequestScalarWhereWithAggregatesInput[]
    OR?: CollaborationRequestScalarWhereWithAggregatesInput[]
    NOT?: CollaborationRequestScalarWhereWithAggregatesInput | CollaborationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollaborationRequest"> | string
    brandId?: StringWithAggregatesFilter<"CollaborationRequest"> | string
    creatorId?: StringWithAggregatesFilter<"CollaborationRequest"> | string
    channels?: JsonWithAggregatesFilter<"CollaborationRequest">
    totalPrice?: FloatWithAggregatesFilter<"CollaborationRequest"> | number
    message?: StringNullableWithAggregatesFilter<"CollaborationRequest"> | string | null
    status?: EnumCollaborationStatusWithAggregatesFilter<"CollaborationRequest"> | $Enums.CollaborationStatus
    isLongTermDeal?: BoolWithAggregatesFilter<"CollaborationRequest"> | boolean
    videoCount?: IntNullableWithAggregatesFilter<"CollaborationRequest"> | number | null
    videosPosted?: IntWithAggregatesFilter<"CollaborationRequest"> | number
    adId?: StringNullableWithAggregatesFilter<"CollaborationRequest"> | string | null
    announcementId?: StringNullableWithAggregatesFilter<"CollaborationRequest"> | string | null
    paymentReference?: StringNullableWithAggregatesFilter<"CollaborationRequest"> | string | null
    viewedByCreator?: BoolWithAggregatesFilter<"CollaborationRequest"> | boolean
    viewedByBrand?: BoolWithAggregatesFilter<"CollaborationRequest"> | boolean
    materialsDownloaded?: BoolWithAggregatesFilter<"CollaborationRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CollaborationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CollaborationRequest"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    author?: StringFilter<"BlogPost"> | string
    category?: EnumBlogCategoryFilter<"BlogPost"> | $Enums.BlogCategory
    tags?: StringNullableListFilter<"BlogPost">
    published?: BoolFilter<"BlogPost"> | boolean
    featured?: BoolFilter<"BlogPost"> | boolean
    views?: IntFilter<"BlogPost"> | number
    readTime?: IntNullableFilter<"BlogPost"> | number | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    author?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    readTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    content?: StringFilter<"BlogPost"> | string
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    author?: StringFilter<"BlogPost"> | string
    category?: EnumBlogCategoryFilter<"BlogPost"> | $Enums.BlogCategory
    tags?: StringNullableListFilter<"BlogPost">
    published?: BoolFilter<"BlogPost"> | boolean
    featured?: BoolFilter<"BlogPost"> | boolean
    views?: IntFilter<"BlogPost"> | number
    readTime?: IntNullableFilter<"BlogPost"> | number | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    author?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    readTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    author?: StringWithAggregatesFilter<"BlogPost"> | string
    category?: EnumBlogCategoryWithAggregatesFilter<"BlogPost"> | $Enums.BlogCategory
    tags?: StringNullableListFilter<"BlogPost">
    published?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    featured?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    views?: IntWithAggregatesFilter<"BlogPost"> | number
    readTime?: IntNullableWithAggregatesFilter<"BlogPost"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    read?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    read?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    name?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    read?: BoolWithAggregatesFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    userId?: StringNullableFilter<"Notification"> | string | null
    targetType?: EnumUserTypeNullableFilter<"Notification"> | $Enums.UserType | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    userId?: StringNullableFilter<"Notification"> | string | null
    targetType?: EnumUserTypeNullableFilter<"Notification"> | $Enums.UserType | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    targetType?: EnumUserTypeNullableWithAggregatesFilter<"Notification"> | $Enums.UserType | null
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type OAuthTokenWhereInput = {
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    id?: StringFilter<"OAuthToken"> | string
    code?: StringFilter<"OAuthToken"> | string
    platform?: EnumPlatformFilter<"OAuthToken"> | $Enums.Platform
    tokenData?: StringFilter<"OAuthToken"> | string
    userToken?: StringNullableFilter<"OAuthToken"> | string | null
    used?: BoolFilter<"OAuthToken"> | boolean
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeFilter<"OAuthToken"> | Date | string
  }

  export type OAuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    platform?: SortOrder
    tokenData?: SortOrder
    userToken?: SortOrderInput | SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    platform?: EnumPlatformFilter<"OAuthToken"> | $Enums.Platform
    tokenData?: StringFilter<"OAuthToken"> | string
    userToken?: StringNullableFilter<"OAuthToken"> | string | null
    used?: BoolFilter<"OAuthToken"> | boolean
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeFilter<"OAuthToken"> | Date | string
  }, "id" | "code">

  export type OAuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    platform?: SortOrder
    tokenData?: SortOrder
    userToken?: SortOrderInput | SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OAuthTokenCountOrderByAggregateInput
    _max?: OAuthTokenMaxOrderByAggregateInput
    _min?: OAuthTokenMinOrderByAggregateInput
  }

  export type OAuthTokenScalarWhereWithAggregatesInput = {
    AND?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    OR?: OAuthTokenScalarWhereWithAggregatesInput[]
    NOT?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthToken"> | string
    code?: StringWithAggregatesFilter<"OAuthToken"> | string
    platform?: EnumPlatformWithAggregatesFilter<"OAuthToken"> | $Enums.Platform
    tokenData?: StringWithAggregatesFilter<"OAuthToken"> | string
    userToken?: StringNullableWithAggregatesFilter<"OAuthToken"> | string | null
    used?: BoolWithAggregatesFilter<"OAuthToken"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
  }

  export type PayoutSettingsWhereInput = {
    AND?: PayoutSettingsWhereInput | PayoutSettingsWhereInput[]
    OR?: PayoutSettingsWhereInput[]
    NOT?: PayoutSettingsWhereInput | PayoutSettingsWhereInput[]
    id?: StringFilter<"PayoutSettings"> | string
    userId?: StringFilter<"PayoutSettings"> | string
    bankName?: StringNullableFilter<"PayoutSettings"> | string | null
    accountName?: StringNullableFilter<"PayoutSettings"> | string | null
    accountNumber?: StringNullableFilter<"PayoutSettings"> | string | null
    bankCode?: StringNullableFilter<"PayoutSettings"> | string | null
    payoutFrequency?: EnumPayoutFrequencyFilter<"PayoutSettings"> | $Enums.PayoutFrequency
    minimumPayout?: FloatFilter<"PayoutSettings"> | number
    isVerified?: BoolFilter<"PayoutSettings"> | boolean
    recipientCode?: StringNullableFilter<"PayoutSettings"> | string | null
    createdAt?: DateTimeFilter<"PayoutSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayoutSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankCode?: SortOrderInput | SortOrder
    payoutFrequency?: SortOrder
    minimumPayout?: SortOrder
    isVerified?: SortOrder
    recipientCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayoutSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PayoutSettingsWhereInput | PayoutSettingsWhereInput[]
    OR?: PayoutSettingsWhereInput[]
    NOT?: PayoutSettingsWhereInput | PayoutSettingsWhereInput[]
    bankName?: StringNullableFilter<"PayoutSettings"> | string | null
    accountName?: StringNullableFilter<"PayoutSettings"> | string | null
    accountNumber?: StringNullableFilter<"PayoutSettings"> | string | null
    bankCode?: StringNullableFilter<"PayoutSettings"> | string | null
    payoutFrequency?: EnumPayoutFrequencyFilter<"PayoutSettings"> | $Enums.PayoutFrequency
    minimumPayout?: FloatFilter<"PayoutSettings"> | number
    isVerified?: BoolFilter<"PayoutSettings"> | boolean
    recipientCode?: StringNullableFilter<"PayoutSettings"> | string | null
    createdAt?: DateTimeFilter<"PayoutSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PayoutSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankCode?: SortOrderInput | SortOrder
    payoutFrequency?: SortOrder
    minimumPayout?: SortOrder
    isVerified?: SortOrder
    recipientCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayoutSettingsCountOrderByAggregateInput
    _avg?: PayoutSettingsAvgOrderByAggregateInput
    _max?: PayoutSettingsMaxOrderByAggregateInput
    _min?: PayoutSettingsMinOrderByAggregateInput
    _sum?: PayoutSettingsSumOrderByAggregateInput
  }

  export type PayoutSettingsScalarWhereWithAggregatesInput = {
    AND?: PayoutSettingsScalarWhereWithAggregatesInput | PayoutSettingsScalarWhereWithAggregatesInput[]
    OR?: PayoutSettingsScalarWhereWithAggregatesInput[]
    NOT?: PayoutSettingsScalarWhereWithAggregatesInput | PayoutSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayoutSettings"> | string
    userId?: StringWithAggregatesFilter<"PayoutSettings"> | string
    bankName?: StringNullableWithAggregatesFilter<"PayoutSettings"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"PayoutSettings"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"PayoutSettings"> | string | null
    bankCode?: StringNullableWithAggregatesFilter<"PayoutSettings"> | string | null
    payoutFrequency?: EnumPayoutFrequencyWithAggregatesFilter<"PayoutSettings"> | $Enums.PayoutFrequency
    minimumPayout?: FloatWithAggregatesFilter<"PayoutSettings"> | number
    isVerified?: BoolWithAggregatesFilter<"PayoutSettings"> | boolean
    recipientCode?: StringNullableWithAggregatesFilter<"PayoutSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PayoutSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayoutSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateManyInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdCreateInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutAdsInput
    adRequests?: AdRequestCreateNestedManyWithoutAdInput
    collabRequests?: CollaborationRequestCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateInput = {
    id?: string
    brandId: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutAdInput
    collabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutAdsNestedInput
    adRequests?: AdRequestUpdateManyWithoutAdNestedInput
    collabRequests?: CollaborationRequestUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adRequests?: AdRequestUncheckedUpdateManyWithoutAdNestedInput
    collabRequests?: CollaborationRequestUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdCreateManyInput = {
    id?: string
    brandId: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ad: AdCreateNestedOneWithoutAdRequestsInput
    creator: UserCreateNestedOneWithoutAdRequestsInput
  }

  export type AdRequestUncheckedCreateInput = {
    id?: string
    adId: string
    creatorId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: AdUpdateOneRequiredWithoutAdRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutAdRequestsNestedInput
  }

  export type AdRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestCreateManyInput = {
    id?: string
    adId: string
    creatorId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    fromUserId: string
    toUserId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    fromUserId: string
    toUserId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAnnouncementCreateInput = {
    id?: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentAnnouncementsInput
    collaborationRequests?: CollaborationRequestCreateNestedManyWithoutAnnouncementInput
  }

  export type ContentAnnouncementUncheckedCreateInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborationRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type ContentAnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentAnnouncementsNestedInput
    collaborationRequests?: CollaborationRequestUpdateManyWithoutAnnouncementNestedInput
  }

  export type ContentAnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborationRequests?: CollaborationRequestUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type ContentAnnouncementCreateManyInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestCreateInput = {
    id?: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutSentCollabRequestsInput
    creator: UserCreateNestedOneWithoutReceivedCollabRequestsInput
    ad?: AdCreateNestedOneWithoutCollabRequestsInput
    announcement?: ContentAnnouncementCreateNestedOneWithoutCollaborationRequestsInput
  }

  export type CollaborationRequestUncheckedCreateInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutSentCollabRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutReceivedCollabRequestsNestedInput
    ad?: AdUpdateOneWithoutCollabRequestsNestedInput
    announcement?: ContentAnnouncementUpdateOneWithoutCollaborationRequestsNestedInput
  }

  export type CollaborationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestCreateManyInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    author?: string
    category?: $Enums.BlogCategory
    tags?: BlogPostCreatetagsInput | string[]
    published?: boolean
    featured?: boolean
    views?: number
    readTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    author?: string
    category?: $Enums.BlogCategory
    tags?: BlogPostCreatetagsInput | string[]
    published?: boolean
    featured?: boolean
    views?: number
    readTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    tags?: BlogPostUpdatetagsInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    tags?: BlogPostUpdatetagsInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    author?: string
    category?: $Enums.BlogCategory
    tags?: BlogPostCreatetagsInput | string[]
    published?: boolean
    featured?: boolean
    views?: number
    readTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    tags?: BlogPostUpdatetagsInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    tags?: BlogPostUpdatetagsInput | string[]
    published?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    views?: IntFieldUpdateOperationsInput | number
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactMessageCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    userId?: string | null
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    userId?: string | null
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateInput = {
    id?: string
    code: string
    platform: $Enums.Platform
    tokenData: string
    userToken?: string | null
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUncheckedCreateInput = {
    id?: string
    code: string
    platform: $Enums.Platform
    tokenData: string
    userToken?: string | null
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    tokenData?: StringFieldUpdateOperationsInput | string
    userToken?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    tokenData?: StringFieldUpdateOperationsInput | string
    userToken?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateManyInput = {
    id?: string
    code: string
    platform: $Enums.Platform
    tokenData: string
    userToken?: string | null
    used?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    tokenData?: StringFieldUpdateOperationsInput | string
    userToken?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    tokenData?: StringFieldUpdateOperationsInput | string
    userToken?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettingsCreateInput = {
    id?: string
    bankName?: string | null
    accountName?: string | null
    accountNumber?: string | null
    bankCode?: string | null
    payoutFrequency?: $Enums.PayoutFrequency
    minimumPayout?: number
    isVerified?: boolean
    recipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayoutSettingsInput
  }

  export type PayoutSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    bankName?: string | null
    accountName?: string | null
    accountNumber?: string | null
    bankCode?: string | null
    payoutFrequency?: $Enums.PayoutFrequency
    minimumPayout?: number
    isVerified?: boolean
    recipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayoutSettingsNestedInput
  }

  export type PayoutSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettingsCreateManyInput = {
    id?: string
    userId: string
    bankName?: string | null
    accountName?: string | null
    accountNumber?: string | null
    bankCode?: string | null
    payoutFrequency?: $Enums.PayoutFrequency
    minimumPayout?: number
    isVerified?: boolean
    recipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNicheNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Niche[] | ListEnumNicheFieldRefInput<$PrismaModel> | null
    has?: $Enums.Niche | EnumNicheFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Niche[] | ListEnumNicheFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Niche[] | ListEnumNicheFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumIndustryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryNullableFilter<$PrismaModel> | $Enums.Industry | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type AdListRelationFilter = {
    every?: AdWhereInput
    some?: AdWhereInput
    none?: AdWhereInput
  }

  export type AdRequestListRelationFilter = {
    every?: AdRequestWhereInput
    some?: AdRequestWhereInput
    none?: AdRequestWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ContentAnnouncementListRelationFilter = {
    every?: ContentAnnouncementWhereInput
    some?: ContentAnnouncementWhereInput
    none?: ContentAnnouncementWhereInput
  }

  export type CollaborationRequestListRelationFilter = {
    every?: CollaborationRequestWhereInput
    some?: CollaborationRequestWhereInput
    none?: CollaborationRequestWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PayoutSettingsNullableScalarRelationFilter = {
    is?: PayoutSettingsWhereInput | null
    isNot?: PayoutSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaborationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    type?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    avatar?: SortOrder
    niches?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    type?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    avatar?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    type?: SortOrder
    googleId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    avatar?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumIndustryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Industry | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIndustryNullableFilter<$PrismaModel>
    _max?: NestedEnumIndustryNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChannelUserIdPlatformChannelIdCompoundUniqueInput = {
    userId: string
    platform: $Enums.Platform
    channelId: string
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    verified?: SortOrder
    subscribers?: SortOrder
    friendsCount?: SortOrder
    thumbnail?: SortOrder
    customUrl?: SortOrder
    description?: SortOrder
    analytics?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    lastRefreshedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    subscribers?: SortOrder
    friendsCount?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    verified?: SortOrder
    subscribers?: SortOrder
    friendsCount?: SortOrder
    thumbnail?: SortOrder
    customUrl?: SortOrder
    description?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    lastRefreshedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    verified?: SortOrder
    subscribers?: SortOrder
    friendsCount?: SortOrder
    thumbnail?: SortOrder
    customUrl?: SortOrder
    description?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    lastRefreshedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    subscribers?: SortOrder
    friendsCount?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAdStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdStatus | EnumAdStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdStatusFilter<$PrismaModel> | $Enums.AdStatus
  }

  export type AdCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetNiches?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    videoDurations?: SortOrder
    talkingPoints?: SortOrder
    guidelines?: SortOrder
    scriptRequired?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAvgOrderByAggregateInput = {
    videoDurations?: SortOrder
  }

  export type AdMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    talkingPoints?: SortOrder
    guidelines?: SortOrder
    scriptRequired?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    talkingPoints?: SortOrder
    guidelines?: SortOrder
    scriptRequired?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdSumOrderByAggregateInput = {
    videoDurations?: SortOrder
  }

  export type EnumAdStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdStatus | EnumAdStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdStatusFilter<$PrismaModel>
    _max?: NestedEnumAdStatusFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type AdScalarRelationFilter = {
    is?: AdWhereInput
    isNot?: AdWhereInput
  }

  export type AdRequestAdIdCreatorIdCompoundUniqueInput = {
    adId: string
    creatorId: string
  }

  export type AdRequestCountOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdRequestMinOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    creatorId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPlatformNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    has?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAnnouncementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusFilter<$PrismaModel> | $Enums.AnnouncementStatus
  }

  export type ContentAnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    platforms?: SortOrder
    channelIds?: SortOrder
    scheduledAt?: SortOrder
    thumbnail?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAnnouncementAvgOrderByAggregateInput = {
    maxSlots?: SortOrder
    filledSlots?: SortOrder
  }

  export type ContentAnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    thumbnail?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    thumbnail?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAnnouncementSumOrderByAggregateInput = {
    maxSlots?: SortOrder
    filledSlots?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAnnouncementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus
  }

  export type AdNullableScalarRelationFilter = {
    is?: AdWhereInput | null
    isNot?: AdWhereInput | null
  }

  export type ContentAnnouncementNullableScalarRelationFilter = {
    is?: ContentAnnouncementWhereInput | null
    isNot?: ContentAnnouncementWhereInput | null
  }

  export type CollaborationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    channels?: SortOrder
    totalPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isLongTermDeal?: SortOrder
    videoCount?: SortOrder
    videosPosted?: SortOrder
    adId?: SortOrder
    announcementId?: SortOrder
    paymentReference?: SortOrder
    viewedByCreator?: SortOrder
    viewedByBrand?: SortOrder
    materialsDownloaded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborationRequestAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    videoCount?: SortOrder
    videosPosted?: SortOrder
  }

  export type CollaborationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    totalPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isLongTermDeal?: SortOrder
    videoCount?: SortOrder
    videosPosted?: SortOrder
    adId?: SortOrder
    announcementId?: SortOrder
    paymentReference?: SortOrder
    viewedByCreator?: SortOrder
    viewedByBrand?: SortOrder
    materialsDownloaded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    totalPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    isLongTermDeal?: SortOrder
    videoCount?: SortOrder
    videosPosted?: SortOrder
    adId?: SortOrder
    announcementId?: SortOrder
    paymentReference?: SortOrder
    viewedByCreator?: SortOrder
    viewedByBrand?: SortOrder
    materialsDownloaded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborationRequestSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    videoCount?: SortOrder
    videosPosted?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationStatusFilter<$PrismaModel>
    _max?: NestedEnumCollaborationStatusFilter<$PrismaModel>
  }

  export type EnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    author?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    views?: SortOrder
    readTime?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    author?: SortOrder
    category?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    author?: SortOrder
    category?: SortOrder
    published?: SortOrder
    featured?: SortOrder
    views?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    views?: SortOrder
    readTime?: SortOrder
  }

  export type EnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    targetType?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    targetType?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    targetType?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type OAuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    platform?: SortOrder
    tokenData?: SortOrder
    userToken?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    platform?: SortOrder
    tokenData?: SortOrder
    userToken?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    platform?: SortOrder
    tokenData?: SortOrder
    userToken?: SortOrder
    used?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPayoutFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutFrequency | EnumPayoutFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFrequencyFilter<$PrismaModel> | $Enums.PayoutFrequency
  }

  export type PayoutSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    bankCode?: SortOrder
    payoutFrequency?: SortOrder
    minimumPayout?: SortOrder
    isVerified?: SortOrder
    recipientCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettingsAvgOrderByAggregateInput = {
    minimumPayout?: SortOrder
  }

  export type PayoutSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    bankCode?: SortOrder
    payoutFrequency?: SortOrder
    minimumPayout?: SortOrder
    isVerified?: SortOrder
    recipientCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    bankCode?: SortOrder
    payoutFrequency?: SortOrder
    minimumPayout?: SortOrder
    isVerified?: SortOrder
    recipientCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSettingsSumOrderByAggregateInput = {
    minimumPayout?: SortOrder
  }

  export type EnumPayoutFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutFrequency | EnumPayoutFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PayoutFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPayoutFrequencyFilter<$PrismaModel>
  }

  export type UserCreatenichesInput = {
    set: $Enums.Niche[]
  }

  export type ChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type AdCreateNestedManyWithoutBrandInput = {
    create?: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput> | AdCreateWithoutBrandInput[] | AdUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdCreateOrConnectWithoutBrandInput | AdCreateOrConnectWithoutBrandInput[]
    createMany?: AdCreateManyBrandInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type AdRequestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput> | AdRequestCreateWithoutCreatorInput[] | AdRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutCreatorInput | AdRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: AdRequestCreateManyCreatorInputEnvelope
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ContentAnnouncementCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput> | ContentAnnouncementCreateWithoutCreatorInput[] | ContentAnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCreatorInput | ContentAnnouncementCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentAnnouncementCreateManyCreatorInputEnvelope
    connect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
  }

  export type CollaborationRequestCreateNestedManyWithoutBrandInput = {
    create?: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput> | CollaborationRequestCreateWithoutBrandInput[] | CollaborationRequestUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutBrandInput | CollaborationRequestCreateOrConnectWithoutBrandInput[]
    createMany?: CollaborationRequestCreateManyBrandInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type CollaborationRequestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput> | CollaborationRequestCreateWithoutCreatorInput[] | CollaborationRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutCreatorInput | CollaborationRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: CollaborationRequestCreateManyCreatorInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PayoutSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayoutSettingsCreateOrConnectWithoutUserInput
    connect?: PayoutSettingsWhereUniqueInput
  }

  export type ChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type AdUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput> | AdCreateWithoutBrandInput[] | AdUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdCreateOrConnectWithoutBrandInput | AdCreateOrConnectWithoutBrandInput[]
    createMany?: AdCreateManyBrandInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type AdRequestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput> | AdRequestCreateWithoutCreatorInput[] | AdRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutCreatorInput | AdRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: AdRequestCreateManyCreatorInputEnvelope
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput> | ContentAnnouncementCreateWithoutCreatorInput[] | ContentAnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCreatorInput | ContentAnnouncementCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentAnnouncementCreateManyCreatorInputEnvelope
    connect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
  }

  export type CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput> | CollaborationRequestCreateWithoutBrandInput[] | CollaborationRequestUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutBrandInput | CollaborationRequestCreateOrConnectWithoutBrandInput[]
    createMany?: CollaborationRequestCreateManyBrandInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput> | CollaborationRequestCreateWithoutCreatorInput[] | CollaborationRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutCreatorInput | CollaborationRequestCreateOrConnectWithoutCreatorInput[]
    createMany?: CollaborationRequestCreateManyCreatorInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PayoutSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayoutSettingsCreateOrConnectWithoutUserInput
    connect?: PayoutSettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatenichesInput = {
    set?: $Enums.Niche[]
    push?: $Enums.Niche | $Enums.Niche[]
  }

  export type NullableEnumIndustryFieldUpdateOperationsInput = {
    set?: $Enums.Industry | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type AdUpdateManyWithoutBrandNestedInput = {
    create?: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput> | AdCreateWithoutBrandInput[] | AdUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdCreateOrConnectWithoutBrandInput | AdCreateOrConnectWithoutBrandInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutBrandInput | AdUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: AdCreateManyBrandInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutBrandInput | AdUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: AdUpdateManyWithWhereWithoutBrandInput | AdUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdRequestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput> | AdRequestCreateWithoutCreatorInput[] | AdRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutCreatorInput | AdRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: AdRequestUpsertWithWhereUniqueWithoutCreatorInput | AdRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AdRequestCreateManyCreatorInputEnvelope
    set?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    disconnect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    delete?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    update?: AdRequestUpdateWithWhereUniqueWithoutCreatorInput | AdRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AdRequestUpdateManyWithWhereWithoutCreatorInput | AdRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ContentAnnouncementUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput> | ContentAnnouncementCreateWithoutCreatorInput[] | ContentAnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCreatorInput | ContentAnnouncementCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentAnnouncementUpsertWithWhereUniqueWithoutCreatorInput | ContentAnnouncementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentAnnouncementCreateManyCreatorInputEnvelope
    set?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    disconnect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    delete?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    connect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    update?: ContentAnnouncementUpdateWithWhereUniqueWithoutCreatorInput | ContentAnnouncementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentAnnouncementUpdateManyWithWhereWithoutCreatorInput | ContentAnnouncementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentAnnouncementScalarWhereInput | ContentAnnouncementScalarWhereInput[]
  }

  export type CollaborationRequestUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput> | CollaborationRequestCreateWithoutBrandInput[] | CollaborationRequestUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutBrandInput | CollaborationRequestCreateOrConnectWithoutBrandInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutBrandInput | CollaborationRequestUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CollaborationRequestCreateManyBrandInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutBrandInput | CollaborationRequestUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutBrandInput | CollaborationRequestUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type CollaborationRequestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput> | CollaborationRequestCreateWithoutCreatorInput[] | CollaborationRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutCreatorInput | CollaborationRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutCreatorInput | CollaborationRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CollaborationRequestCreateManyCreatorInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutCreatorInput | CollaborationRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutCreatorInput | CollaborationRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PayoutSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayoutSettingsCreateOrConnectWithoutUserInput
    upsert?: PayoutSettingsUpsertWithoutUserInput
    disconnect?: PayoutSettingsWhereInput | boolean
    delete?: PayoutSettingsWhereInput | boolean
    connect?: PayoutSettingsWhereUniqueInput
    update?: XOR<XOR<PayoutSettingsUpdateToOneWithWhereWithoutUserInput, PayoutSettingsUpdateWithoutUserInput>, PayoutSettingsUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type AdUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput> | AdCreateWithoutBrandInput[] | AdUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: AdCreateOrConnectWithoutBrandInput | AdCreateOrConnectWithoutBrandInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutBrandInput | AdUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: AdCreateManyBrandInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutBrandInput | AdUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: AdUpdateManyWithWhereWithoutBrandInput | AdUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdRequestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput> | AdRequestCreateWithoutCreatorInput[] | AdRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutCreatorInput | AdRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: AdRequestUpsertWithWhereUniqueWithoutCreatorInput | AdRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AdRequestCreateManyCreatorInputEnvelope
    set?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    disconnect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    delete?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    update?: AdRequestUpdateWithWhereUniqueWithoutCreatorInput | AdRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AdRequestUpdateManyWithWhereWithoutCreatorInput | AdRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput> | MessageCreateWithoutFromUserInput[] | MessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput | MessageCreateOrConnectWithoutFromUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput | MessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: MessageCreateManyFromUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput | MessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput | MessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput> | MessageCreateWithoutToUserInput[] | MessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutToUserInput | MessageCreateOrConnectWithoutToUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutToUserInput | MessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: MessageCreateManyToUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutToUserInput | MessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutToUserInput | MessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput> | ContentAnnouncementCreateWithoutCreatorInput[] | ContentAnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCreatorInput | ContentAnnouncementCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentAnnouncementUpsertWithWhereUniqueWithoutCreatorInput | ContentAnnouncementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentAnnouncementCreateManyCreatorInputEnvelope
    set?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    disconnect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    delete?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    connect?: ContentAnnouncementWhereUniqueInput | ContentAnnouncementWhereUniqueInput[]
    update?: ContentAnnouncementUpdateWithWhereUniqueWithoutCreatorInput | ContentAnnouncementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentAnnouncementUpdateManyWithWhereWithoutCreatorInput | ContentAnnouncementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentAnnouncementScalarWhereInput | ContentAnnouncementScalarWhereInput[]
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput> | CollaborationRequestCreateWithoutBrandInput[] | CollaborationRequestUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutBrandInput | CollaborationRequestCreateOrConnectWithoutBrandInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutBrandInput | CollaborationRequestUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CollaborationRequestCreateManyBrandInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutBrandInput | CollaborationRequestUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutBrandInput | CollaborationRequestUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput> | CollaborationRequestCreateWithoutCreatorInput[] | CollaborationRequestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutCreatorInput | CollaborationRequestCreateOrConnectWithoutCreatorInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutCreatorInput | CollaborationRequestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CollaborationRequestCreateManyCreatorInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutCreatorInput | CollaborationRequestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutCreatorInput | CollaborationRequestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PayoutSettingsCreateOrConnectWithoutUserInput
    upsert?: PayoutSettingsUpsertWithoutUserInput
    disconnect?: PayoutSettingsWhereInput | boolean
    delete?: PayoutSettingsWhereInput | boolean
    connect?: PayoutSettingsWhereUniqueInput
    update?: XOR<XOR<PayoutSettingsUpdateToOneWithWhereWithoutUserInput, PayoutSettingsUpdateWithoutUserInput>, PayoutSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutChannelsInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    upsert?: UserUpsertWithoutChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelsInput, UserUpdateWithoutChannelsInput>, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type AdCreatetargetNichesInput = {
    set: $Enums.Niche[]
  }

  export type AdCreateimagesInput = {
    set: string[]
  }

  export type AdCreatevideosInput = {
    set: string[]
  }

  export type AdCreatevideoDurationsInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutAdsInput = {
    create?: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput
    connect?: UserWhereUniqueInput
  }

  export type AdRequestCreateNestedManyWithoutAdInput = {
    create?: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput> | AdRequestCreateWithoutAdInput[] | AdRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutAdInput | AdRequestCreateOrConnectWithoutAdInput[]
    createMany?: AdRequestCreateManyAdInputEnvelope
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
  }

  export type CollaborationRequestCreateNestedManyWithoutAdInput = {
    create?: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput> | CollaborationRequestCreateWithoutAdInput[] | CollaborationRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAdInput | CollaborationRequestCreateOrConnectWithoutAdInput[]
    createMany?: CollaborationRequestCreateManyAdInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type AdRequestUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput> | AdRequestCreateWithoutAdInput[] | AdRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutAdInput | AdRequestCreateOrConnectWithoutAdInput[]
    createMany?: AdRequestCreateManyAdInputEnvelope
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
  }

  export type CollaborationRequestUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput> | CollaborationRequestCreateWithoutAdInput[] | CollaborationRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAdInput | CollaborationRequestCreateOrConnectWithoutAdInput[]
    createMany?: CollaborationRequestCreateManyAdInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type AdUpdatetargetNichesInput = {
    set?: $Enums.Niche[]
    push?: $Enums.Niche | $Enums.Niche[]
  }

  export type AdUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdUpdatevideoDurationsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EnumAdStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdStatus
  }

  export type UserUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput
    upsert?: UserUpsertWithoutAdsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdsInput, UserUpdateWithoutAdsInput>, UserUncheckedUpdateWithoutAdsInput>
  }

  export type AdRequestUpdateManyWithoutAdNestedInput = {
    create?: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput> | AdRequestCreateWithoutAdInput[] | AdRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutAdInput | AdRequestCreateOrConnectWithoutAdInput[]
    upsert?: AdRequestUpsertWithWhereUniqueWithoutAdInput | AdRequestUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: AdRequestCreateManyAdInputEnvelope
    set?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    disconnect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    delete?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    update?: AdRequestUpdateWithWhereUniqueWithoutAdInput | AdRequestUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: AdRequestUpdateManyWithWhereWithoutAdInput | AdRequestUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
  }

  export type CollaborationRequestUpdateManyWithoutAdNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput> | CollaborationRequestCreateWithoutAdInput[] | CollaborationRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAdInput | CollaborationRequestCreateOrConnectWithoutAdInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutAdInput | CollaborationRequestUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CollaborationRequestCreateManyAdInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutAdInput | CollaborationRequestUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutAdInput | CollaborationRequestUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type AdRequestUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput> | AdRequestCreateWithoutAdInput[] | AdRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: AdRequestCreateOrConnectWithoutAdInput | AdRequestCreateOrConnectWithoutAdInput[]
    upsert?: AdRequestUpsertWithWhereUniqueWithoutAdInput | AdRequestUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: AdRequestCreateManyAdInputEnvelope
    set?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    disconnect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    delete?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    connect?: AdRequestWhereUniqueInput | AdRequestWhereUniqueInput[]
    update?: AdRequestUpdateWithWhereUniqueWithoutAdInput | AdRequestUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: AdRequestUpdateManyWithWhereWithoutAdInput | AdRequestUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput> | CollaborationRequestCreateWithoutAdInput[] | CollaborationRequestUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAdInput | CollaborationRequestCreateOrConnectWithoutAdInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutAdInput | CollaborationRequestUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CollaborationRequestCreateManyAdInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutAdInput | CollaborationRequestUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutAdInput | CollaborationRequestUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type AdCreateNestedOneWithoutAdRequestsInput = {
    create?: XOR<AdCreateWithoutAdRequestsInput, AdUncheckedCreateWithoutAdRequestsInput>
    connectOrCreate?: AdCreateOrConnectWithoutAdRequestsInput
    connect?: AdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdRequestsInput = {
    create?: XOR<UserCreateWithoutAdRequestsInput, UserUncheckedCreateWithoutAdRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type AdUpdateOneRequiredWithoutAdRequestsNestedInput = {
    create?: XOR<AdCreateWithoutAdRequestsInput, AdUncheckedCreateWithoutAdRequestsInput>
    connectOrCreate?: AdCreateOrConnectWithoutAdRequestsInput
    upsert?: AdUpsertWithoutAdRequestsInput
    connect?: AdWhereUniqueInput
    update?: XOR<XOR<AdUpdateToOneWithWhereWithoutAdRequestsInput, AdUpdateWithoutAdRequestsInput>, AdUncheckedUpdateWithoutAdRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutAdRequestsNestedInput = {
    create?: XOR<UserCreateWithoutAdRequestsInput, UserUncheckedCreateWithoutAdRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdRequestsInput
    upsert?: UserUpsertWithoutAdRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdRequestsInput, UserUpdateWithoutAdRequestsInput>, UserUncheckedUpdateWithoutAdRequestsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ContentAnnouncementCreateplatformsInput = {
    set: $Enums.Platform[]
  }

  export type ContentAnnouncementCreatechannelIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutContentAnnouncementsInput = {
    create?: XOR<UserCreateWithoutContentAnnouncementsInput, UserUncheckedCreateWithoutContentAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type CollaborationRequestCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput> | CollaborationRequestCreateWithoutAnnouncementInput[] | CollaborationRequestUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAnnouncementInput | CollaborationRequestCreateOrConnectWithoutAnnouncementInput[]
    createMany?: CollaborationRequestCreateManyAnnouncementInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type CollaborationRequestUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput> | CollaborationRequestCreateWithoutAnnouncementInput[] | CollaborationRequestUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAnnouncementInput | CollaborationRequestCreateOrConnectWithoutAnnouncementInput[]
    createMany?: CollaborationRequestCreateManyAnnouncementInputEnvelope
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
  }

  export type ContentAnnouncementUpdateplatformsInput = {
    set?: $Enums.Platform[]
    push?: $Enums.Platform | $Enums.Platform[]
  }

  export type ContentAnnouncementUpdatechannelIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAnnouncementStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementStatus
  }

  export type UserUpdateOneRequiredWithoutContentAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutContentAnnouncementsInput, UserUncheckedCreateWithoutContentAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentAnnouncementsInput
    upsert?: UserUpsertWithoutContentAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentAnnouncementsInput, UserUpdateWithoutContentAnnouncementsInput>, UserUncheckedUpdateWithoutContentAnnouncementsInput>
  }

  export type CollaborationRequestUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput> | CollaborationRequestCreateWithoutAnnouncementInput[] | CollaborationRequestUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAnnouncementInput | CollaborationRequestCreateOrConnectWithoutAnnouncementInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutAnnouncementInput | CollaborationRequestUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: CollaborationRequestCreateManyAnnouncementInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutAnnouncementInput | CollaborationRequestUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutAnnouncementInput | CollaborationRequestUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput> | CollaborationRequestCreateWithoutAnnouncementInput[] | CollaborationRequestUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: CollaborationRequestCreateOrConnectWithoutAnnouncementInput | CollaborationRequestCreateOrConnectWithoutAnnouncementInput[]
    upsert?: CollaborationRequestUpsertWithWhereUniqueWithoutAnnouncementInput | CollaborationRequestUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: CollaborationRequestCreateManyAnnouncementInputEnvelope
    set?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    disconnect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    delete?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    connect?: CollaborationRequestWhereUniqueInput | CollaborationRequestWhereUniqueInput[]
    update?: CollaborationRequestUpdateWithWhereUniqueWithoutAnnouncementInput | CollaborationRequestUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: CollaborationRequestUpdateManyWithWhereWithoutAnnouncementInput | CollaborationRequestUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentCollabRequestsInput = {
    create?: XOR<UserCreateWithoutSentCollabRequestsInput, UserUncheckedCreateWithoutSentCollabRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentCollabRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedCollabRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedCollabRequestsInput, UserUncheckedCreateWithoutReceivedCollabRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCollabRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type AdCreateNestedOneWithoutCollabRequestsInput = {
    create?: XOR<AdCreateWithoutCollabRequestsInput, AdUncheckedCreateWithoutCollabRequestsInput>
    connectOrCreate?: AdCreateOrConnectWithoutCollabRequestsInput
    connect?: AdWhereUniqueInput
  }

  export type ContentAnnouncementCreateNestedOneWithoutCollaborationRequestsInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedCreateWithoutCollaborationRequestsInput>
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCollaborationRequestsInput
    connect?: ContentAnnouncementWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCollaborationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CollaborationStatus
  }

  export type UserUpdateOneRequiredWithoutSentCollabRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentCollabRequestsInput, UserUncheckedCreateWithoutSentCollabRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentCollabRequestsInput
    upsert?: UserUpsertWithoutSentCollabRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentCollabRequestsInput, UserUpdateWithoutSentCollabRequestsInput>, UserUncheckedUpdateWithoutSentCollabRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedCollabRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedCollabRequestsInput, UserUncheckedCreateWithoutReceivedCollabRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedCollabRequestsInput
    upsert?: UserUpsertWithoutReceivedCollabRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedCollabRequestsInput, UserUpdateWithoutReceivedCollabRequestsInput>, UserUncheckedUpdateWithoutReceivedCollabRequestsInput>
  }

  export type AdUpdateOneWithoutCollabRequestsNestedInput = {
    create?: XOR<AdCreateWithoutCollabRequestsInput, AdUncheckedCreateWithoutCollabRequestsInput>
    connectOrCreate?: AdCreateOrConnectWithoutCollabRequestsInput
    upsert?: AdUpsertWithoutCollabRequestsInput
    disconnect?: AdWhereInput | boolean
    delete?: AdWhereInput | boolean
    connect?: AdWhereUniqueInput
    update?: XOR<XOR<AdUpdateToOneWithWhereWithoutCollabRequestsInput, AdUpdateWithoutCollabRequestsInput>, AdUncheckedUpdateWithoutCollabRequestsInput>
  }

  export type ContentAnnouncementUpdateOneWithoutCollaborationRequestsNestedInput = {
    create?: XOR<ContentAnnouncementCreateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedCreateWithoutCollaborationRequestsInput>
    connectOrCreate?: ContentAnnouncementCreateOrConnectWithoutCollaborationRequestsInput
    upsert?: ContentAnnouncementUpsertWithoutCollaborationRequestsInput
    disconnect?: ContentAnnouncementWhereInput | boolean
    delete?: ContentAnnouncementWhereInput | boolean
    connect?: ContentAnnouncementWhereUniqueInput
    update?: XOR<XOR<ContentAnnouncementUpdateToOneWithWhereWithoutCollaborationRequestsInput, ContentAnnouncementUpdateWithoutCollaborationRequestsInput>, ContentAnnouncementUncheckedUpdateWithoutCollaborationRequestsInput>
  }

  export type BlogPostCreatetagsInput = {
    set: string[]
  }

  export type EnumBlogCategoryFieldUpdateOperationsInput = {
    set?: $Enums.BlogCategory
  }

  export type BlogPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutPayoutSettingsInput = {
    create?: XOR<UserCreateWithoutPayoutSettingsInput, UserUncheckedCreateWithoutPayoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPayoutFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PayoutFrequency
  }

  export type UserUpdateOneRequiredWithoutPayoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutPayoutSettingsInput, UserUncheckedCreateWithoutPayoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutSettingsInput
    upsert?: UserUpsertWithoutPayoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayoutSettingsInput, UserUpdateWithoutPayoutSettingsInput>, UserUncheckedUpdateWithoutPayoutSettingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableFilter<$PrismaModel> | $Enums.UserType | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumIndustryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryNullableFilter<$PrismaModel> | $Enums.Industry | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumUserTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumIndustryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industry | EnumIndustryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Industry[] | ListEnumIndustryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Industry | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIndustryNullableFilter<$PrismaModel>
    _max?: NestedEnumIndustryNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdStatus | EnumAdStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdStatusFilter<$PrismaModel> | $Enums.AdStatus
  }

  export type NestedEnumAdStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdStatus | EnumAdStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdStatus[] | ListEnumAdStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdStatusFilter<$PrismaModel>
    _max?: NestedEnumAdStatusFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnnouncementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusFilter<$PrismaModel> | $Enums.AnnouncementStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
  }

  export type NestedEnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | EnumCollaborationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollaborationStatus[] | ListEnumCollaborationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollaborationStatusFilter<$PrismaModel>
    _max?: NestedEnumCollaborationStatusFilter<$PrismaModel>
  }

  export type NestedEnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumPayoutFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutFrequency | EnumPayoutFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFrequencyFilter<$PrismaModel> | $Enums.PayoutFrequency
  }

  export type NestedEnumPayoutFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutFrequency | EnumPayoutFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutFrequency[] | ListEnumPayoutFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PayoutFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPayoutFrequencyFilter<$PrismaModel>
  }

  export type ChannelCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUncheckedCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateOrConnectWithoutUserInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelCreateManyUserInputEnvelope = {
    data: ChannelCreateManyUserInput | ChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdCreateWithoutBrandInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    adRequests?: AdRequestCreateNestedManyWithoutAdInput
    collabRequests?: CollaborationRequestCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutBrandInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutAdInput
    collabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutBrandInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput>
  }

  export type AdCreateManyBrandInputEnvelope = {
    data: AdCreateManyBrandInput | AdCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type AdRequestCreateWithoutCreatorInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ad: AdCreateNestedOneWithoutAdRequestsInput
  }

  export type AdRequestUncheckedCreateWithoutCreatorInput = {
    id?: string
    adId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestCreateOrConnectWithoutCreatorInput = {
    where: AdRequestWhereUniqueInput
    create: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput>
  }

  export type AdRequestCreateManyCreatorInputEnvelope = {
    data: AdRequestCreateManyCreatorInput | AdRequestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFromUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutFromUserInput = {
    id?: string
    toUserId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageCreateManyFromUserInputEnvelope = {
    data: MessageCreateManyFromUserInput | MessageCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutToUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutToUserInput = {
    id?: string
    fromUserId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutToUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageCreateManyToUserInputEnvelope = {
    data: MessageCreateManyToUserInput | MessageCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentAnnouncementCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborationRequests?: CollaborationRequestCreateNestedManyWithoutAnnouncementInput
  }

  export type ContentAnnouncementUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborationRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type ContentAnnouncementCreateOrConnectWithoutCreatorInput = {
    where: ContentAnnouncementWhereUniqueInput
    create: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput>
  }

  export type ContentAnnouncementCreateManyCreatorInputEnvelope = {
    data: ContentAnnouncementCreateManyCreatorInput | ContentAnnouncementCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CollaborationRequestCreateWithoutBrandInput = {
    id?: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutReceivedCollabRequestsInput
    ad?: AdCreateNestedOneWithoutCollabRequestsInput
    announcement?: ContentAnnouncementCreateNestedOneWithoutCollaborationRequestsInput
  }

  export type CollaborationRequestUncheckedCreateWithoutBrandInput = {
    id?: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateOrConnectWithoutBrandInput = {
    where: CollaborationRequestWhereUniqueInput
    create: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput>
  }

  export type CollaborationRequestCreateManyBrandInputEnvelope = {
    data: CollaborationRequestCreateManyBrandInput | CollaborationRequestCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type CollaborationRequestCreateWithoutCreatorInput = {
    id?: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutSentCollabRequestsInput
    ad?: AdCreateNestedOneWithoutCollabRequestsInput
    announcement?: ContentAnnouncementCreateNestedOneWithoutCollaborationRequestsInput
  }

  export type CollaborationRequestUncheckedCreateWithoutCreatorInput = {
    id?: string
    brandId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateOrConnectWithoutCreatorInput = {
    where: CollaborationRequestWhereUniqueInput
    create: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput>
  }

  export type CollaborationRequestCreateManyCreatorInputEnvelope = {
    data: CollaborationRequestCreateManyCreatorInput | CollaborationRequestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayoutSettingsCreateWithoutUserInput = {
    id?: string
    bankName?: string | null
    accountName?: string | null
    accountNumber?: string | null
    bankCode?: string | null
    payoutFrequency?: $Enums.PayoutFrequency
    minimumPayout?: number
    isVerified?: boolean
    recipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    bankName?: string | null
    accountName?: string | null
    accountNumber?: string | null
    bankCode?: string | null
    payoutFrequency?: $Enums.PayoutFrequency
    minimumPayout?: number
    isVerified?: boolean
    recipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutSettingsCreateOrConnectWithoutUserInput = {
    where: PayoutSettingsWhereUniqueInput
    create: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
  }

  export type ChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUpdateManyWithWhereWithoutUserInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: StringFilter<"Channel"> | string
    userId?: StringFilter<"Channel"> | string
    platform?: EnumPlatformFilter<"Channel"> | $Enums.Platform
    channelId?: StringFilter<"Channel"> | string
    channelName?: StringFilter<"Channel"> | string
    verified?: BoolFilter<"Channel"> | boolean
    subscribers?: IntNullableFilter<"Channel"> | number | null
    friendsCount?: IntNullableFilter<"Channel"> | number | null
    thumbnail?: StringNullableFilter<"Channel"> | string | null
    customUrl?: StringNullableFilter<"Channel"> | string | null
    description?: StringNullableFilter<"Channel"> | string | null
    analytics?: JsonNullableFilter<"Channel">
    accessToken?: StringNullableFilter<"Channel"> | string | null
    refreshToken?: StringNullableFilter<"Channel"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    lastRefreshedAt?: DateTimeNullableFilter<"Channel"> | Date | string | null
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
  }

  export type AdUpsertWithWhereUniqueWithoutBrandInput = {
    where: AdWhereUniqueInput
    update: XOR<AdUpdateWithoutBrandInput, AdUncheckedUpdateWithoutBrandInput>
    create: XOR<AdCreateWithoutBrandInput, AdUncheckedCreateWithoutBrandInput>
  }

  export type AdUpdateWithWhereUniqueWithoutBrandInput = {
    where: AdWhereUniqueInput
    data: XOR<AdUpdateWithoutBrandInput, AdUncheckedUpdateWithoutBrandInput>
  }

  export type AdUpdateManyWithWhereWithoutBrandInput = {
    where: AdScalarWhereInput
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyWithoutBrandInput>
  }

  export type AdScalarWhereInput = {
    AND?: AdScalarWhereInput | AdScalarWhereInput[]
    OR?: AdScalarWhereInput[]
    NOT?: AdScalarWhereInput | AdScalarWhereInput[]
    id?: StringFilter<"Ad"> | string
    brandId?: StringFilter<"Ad"> | string
    title?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    targetNiches?: EnumNicheNullableListFilter<"Ad">
    images?: StringNullableListFilter<"Ad">
    videos?: StringNullableListFilter<"Ad">
    videoDurations?: IntNullableListFilter<"Ad">
    talkingPoints?: StringNullableFilter<"Ad"> | string | null
    guidelines?: StringNullableFilter<"Ad"> | string | null
    scriptRequired?: BoolFilter<"Ad"> | boolean
    status?: EnumAdStatusFilter<"Ad"> | $Enums.AdStatus
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
  }

  export type AdRequestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AdRequestWhereUniqueInput
    update: XOR<AdRequestUpdateWithoutCreatorInput, AdRequestUncheckedUpdateWithoutCreatorInput>
    create: XOR<AdRequestCreateWithoutCreatorInput, AdRequestUncheckedCreateWithoutCreatorInput>
  }

  export type AdRequestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AdRequestWhereUniqueInput
    data: XOR<AdRequestUpdateWithoutCreatorInput, AdRequestUncheckedUpdateWithoutCreatorInput>
  }

  export type AdRequestUpdateManyWithWhereWithoutCreatorInput = {
    where: AdRequestScalarWhereInput
    data: XOR<AdRequestUpdateManyMutationInput, AdRequestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AdRequestScalarWhereInput = {
    AND?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
    OR?: AdRequestScalarWhereInput[]
    NOT?: AdRequestScalarWhereInput | AdRequestScalarWhereInput[]
    id?: StringFilter<"AdRequest"> | string
    adId?: StringFilter<"AdRequest"> | string
    creatorId?: StringFilter<"AdRequest"> | string
    status?: EnumRequestStatusFilter<"AdRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"AdRequest"> | string | null
    createdAt?: DateTimeFilter<"AdRequest"> | Date | string
    updatedAt?: DateTimeFilter<"AdRequest"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<MessageCreateWithoutFromUserInput, MessageUncheckedCreateWithoutFromUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFromUserInput, MessageUncheckedUpdateWithoutFromUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutFromUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFromUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    fromUserId?: StringFilter<"Message"> | string
    toUserId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
    create: XOR<MessageCreateWithoutToUserInput, MessageUncheckedCreateWithoutToUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutToUserInput, MessageUncheckedUpdateWithoutToUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutToUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutToUserInput>
  }

  export type ContentAnnouncementUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContentAnnouncementWhereUniqueInput
    update: XOR<ContentAnnouncementUpdateWithoutCreatorInput, ContentAnnouncementUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContentAnnouncementCreateWithoutCreatorInput, ContentAnnouncementUncheckedCreateWithoutCreatorInput>
  }

  export type ContentAnnouncementUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContentAnnouncementWhereUniqueInput
    data: XOR<ContentAnnouncementUpdateWithoutCreatorInput, ContentAnnouncementUncheckedUpdateWithoutCreatorInput>
  }

  export type ContentAnnouncementUpdateManyWithWhereWithoutCreatorInput = {
    where: ContentAnnouncementScalarWhereInput
    data: XOR<ContentAnnouncementUpdateManyMutationInput, ContentAnnouncementUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContentAnnouncementScalarWhereInput = {
    AND?: ContentAnnouncementScalarWhereInput | ContentAnnouncementScalarWhereInput[]
    OR?: ContentAnnouncementScalarWhereInput[]
    NOT?: ContentAnnouncementScalarWhereInput | ContentAnnouncementScalarWhereInput[]
    id?: StringFilter<"ContentAnnouncement"> | string
    creatorId?: StringFilter<"ContentAnnouncement"> | string
    title?: StringFilter<"ContentAnnouncement"> | string
    description?: StringNullableFilter<"ContentAnnouncement"> | string | null
    platforms?: EnumPlatformNullableListFilter<"ContentAnnouncement">
    channelIds?: StringNullableListFilter<"ContentAnnouncement">
    scheduledAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    thumbnail?: StringNullableFilter<"ContentAnnouncement"> | string | null
    maxSlots?: IntFilter<"ContentAnnouncement"> | number
    filledSlots?: IntFilter<"ContentAnnouncement"> | number
    status?: EnumAnnouncementStatusFilter<"ContentAnnouncement"> | $Enums.AnnouncementStatus
    createdAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAnnouncement"> | Date | string
  }

  export type CollaborationRequestUpsertWithWhereUniqueWithoutBrandInput = {
    where: CollaborationRequestWhereUniqueInput
    update: XOR<CollaborationRequestUpdateWithoutBrandInput, CollaborationRequestUncheckedUpdateWithoutBrandInput>
    create: XOR<CollaborationRequestCreateWithoutBrandInput, CollaborationRequestUncheckedCreateWithoutBrandInput>
  }

  export type CollaborationRequestUpdateWithWhereUniqueWithoutBrandInput = {
    where: CollaborationRequestWhereUniqueInput
    data: XOR<CollaborationRequestUpdateWithoutBrandInput, CollaborationRequestUncheckedUpdateWithoutBrandInput>
  }

  export type CollaborationRequestUpdateManyWithWhereWithoutBrandInput = {
    where: CollaborationRequestScalarWhereInput
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyWithoutBrandInput>
  }

  export type CollaborationRequestScalarWhereInput = {
    AND?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
    OR?: CollaborationRequestScalarWhereInput[]
    NOT?: CollaborationRequestScalarWhereInput | CollaborationRequestScalarWhereInput[]
    id?: StringFilter<"CollaborationRequest"> | string
    brandId?: StringFilter<"CollaborationRequest"> | string
    creatorId?: StringFilter<"CollaborationRequest"> | string
    channels?: JsonFilter<"CollaborationRequest">
    totalPrice?: FloatFilter<"CollaborationRequest"> | number
    message?: StringNullableFilter<"CollaborationRequest"> | string | null
    status?: EnumCollaborationStatusFilter<"CollaborationRequest"> | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFilter<"CollaborationRequest"> | boolean
    videoCount?: IntNullableFilter<"CollaborationRequest"> | number | null
    videosPosted?: IntFilter<"CollaborationRequest"> | number
    adId?: StringNullableFilter<"CollaborationRequest"> | string | null
    announcementId?: StringNullableFilter<"CollaborationRequest"> | string | null
    paymentReference?: StringNullableFilter<"CollaborationRequest"> | string | null
    viewedByCreator?: BoolFilter<"CollaborationRequest"> | boolean
    viewedByBrand?: BoolFilter<"CollaborationRequest"> | boolean
    materialsDownloaded?: BoolFilter<"CollaborationRequest"> | boolean
    createdAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CollaborationRequest"> | Date | string
  }

  export type CollaborationRequestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CollaborationRequestWhereUniqueInput
    update: XOR<CollaborationRequestUpdateWithoutCreatorInput, CollaborationRequestUncheckedUpdateWithoutCreatorInput>
    create: XOR<CollaborationRequestCreateWithoutCreatorInput, CollaborationRequestUncheckedCreateWithoutCreatorInput>
  }

  export type CollaborationRequestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CollaborationRequestWhereUniqueInput
    data: XOR<CollaborationRequestUpdateWithoutCreatorInput, CollaborationRequestUncheckedUpdateWithoutCreatorInput>
  }

  export type CollaborationRequestUpdateManyWithWhereWithoutCreatorInput = {
    where: CollaborationRequestScalarWhereInput
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    userId?: StringNullableFilter<"Notification"> | string | null
    targetType?: EnumUserTypeNullableFilter<"Notification"> | $Enums.UserType | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PayoutSettingsUpsertWithoutUserInput = {
    update: XOR<PayoutSettingsUpdateWithoutUserInput, PayoutSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<PayoutSettingsCreateWithoutUserInput, PayoutSettingsUncheckedCreateWithoutUserInput>
    where?: PayoutSettingsWhereInput
  }

  export type PayoutSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: PayoutSettingsWhereInput
    data: XOR<PayoutSettingsUpdateWithoutUserInput, PayoutSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PayoutSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankCode?: NullableStringFieldUpdateOperationsInput | string | null
    payoutFrequency?: EnumPayoutFrequencyFieldUpdateOperationsInput | $Enums.PayoutFrequency
    minimumPayout?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    recipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutChannelsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
  }

  export type UserUpsertWithoutChannelsInput = {
    update: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAdsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
  }

  export type AdRequestCreateWithoutAdInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutAdRequestsInput
  }

  export type AdRequestUncheckedCreateWithoutAdInput = {
    id?: string
    creatorId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestCreateOrConnectWithoutAdInput = {
    where: AdRequestWhereUniqueInput
    create: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput>
  }

  export type AdRequestCreateManyAdInputEnvelope = {
    data: AdRequestCreateManyAdInput | AdRequestCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type CollaborationRequestCreateWithoutAdInput = {
    id?: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutSentCollabRequestsInput
    creator: UserCreateNestedOneWithoutReceivedCollabRequestsInput
    announcement?: ContentAnnouncementCreateNestedOneWithoutCollaborationRequestsInput
  }

  export type CollaborationRequestUncheckedCreateWithoutAdInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateOrConnectWithoutAdInput = {
    where: CollaborationRequestWhereUniqueInput
    create: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput>
  }

  export type CollaborationRequestCreateManyAdInputEnvelope = {
    data: CollaborationRequestCreateManyAdInput | CollaborationRequestCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAdsInput = {
    update: XOR<UserUpdateWithoutAdsInput, UserUncheckedUpdateWithoutAdsInput>
    create: XOR<UserCreateWithoutAdsInput, UserUncheckedCreateWithoutAdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdsInput, UserUncheckedUpdateWithoutAdsInput>
  }

  export type UserUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdRequestUpsertWithWhereUniqueWithoutAdInput = {
    where: AdRequestWhereUniqueInput
    update: XOR<AdRequestUpdateWithoutAdInput, AdRequestUncheckedUpdateWithoutAdInput>
    create: XOR<AdRequestCreateWithoutAdInput, AdRequestUncheckedCreateWithoutAdInput>
  }

  export type AdRequestUpdateWithWhereUniqueWithoutAdInput = {
    where: AdRequestWhereUniqueInput
    data: XOR<AdRequestUpdateWithoutAdInput, AdRequestUncheckedUpdateWithoutAdInput>
  }

  export type AdRequestUpdateManyWithWhereWithoutAdInput = {
    where: AdRequestScalarWhereInput
    data: XOR<AdRequestUpdateManyMutationInput, AdRequestUncheckedUpdateManyWithoutAdInput>
  }

  export type CollaborationRequestUpsertWithWhereUniqueWithoutAdInput = {
    where: CollaborationRequestWhereUniqueInput
    update: XOR<CollaborationRequestUpdateWithoutAdInput, CollaborationRequestUncheckedUpdateWithoutAdInput>
    create: XOR<CollaborationRequestCreateWithoutAdInput, CollaborationRequestUncheckedCreateWithoutAdInput>
  }

  export type CollaborationRequestUpdateWithWhereUniqueWithoutAdInput = {
    where: CollaborationRequestWhereUniqueInput
    data: XOR<CollaborationRequestUpdateWithoutAdInput, CollaborationRequestUncheckedUpdateWithoutAdInput>
  }

  export type CollaborationRequestUpdateManyWithWhereWithoutAdInput = {
    where: CollaborationRequestScalarWhereInput
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyWithoutAdInput>
  }

  export type AdCreateWithoutAdRequestsInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutAdsInput
    collabRequests?: CollaborationRequestCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutAdRequestsInput = {
    id?: string
    brandId: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    collabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutAdRequestsInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutAdRequestsInput, AdUncheckedCreateWithoutAdRequestsInput>
  }

  export type UserCreateWithoutAdRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdRequestsInput, UserUncheckedCreateWithoutAdRequestsInput>
  }

  export type AdUpsertWithoutAdRequestsInput = {
    update: XOR<AdUpdateWithoutAdRequestsInput, AdUncheckedUpdateWithoutAdRequestsInput>
    create: XOR<AdCreateWithoutAdRequestsInput, AdUncheckedCreateWithoutAdRequestsInput>
    where?: AdWhereInput
  }

  export type AdUpdateToOneWithWhereWithoutAdRequestsInput = {
    where?: AdWhereInput
    data: XOR<AdUpdateWithoutAdRequestsInput, AdUncheckedUpdateWithoutAdRequestsInput>
  }

  export type AdUpdateWithoutAdRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutAdsNestedInput
    collabRequests?: CollaborationRequestUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutAdRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collabRequests?: CollaborationRequestUncheckedUpdateManyWithoutAdNestedInput
  }

  export type UserUpsertWithoutAdRequestsInput = {
    update: XOR<UserUpdateWithoutAdRequestsInput, UserUncheckedUpdateWithoutAdRequestsInput>
    create: XOR<UserCreateWithoutAdRequestsInput, UserUncheckedCreateWithoutAdRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdRequestsInput, UserUncheckedUpdateWithoutAdRequestsInput>
  }

  export type UserUpdateWithoutAdRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutContentAnnouncementsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentAnnouncementsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentAnnouncementsInput, UserUncheckedCreateWithoutContentAnnouncementsInput>
  }

  export type CollaborationRequestCreateWithoutAnnouncementInput = {
    id?: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutSentCollabRequestsInput
    creator: UserCreateNestedOneWithoutReceivedCollabRequestsInput
    ad?: AdCreateNestedOneWithoutCollabRequestsInput
  }

  export type CollaborationRequestUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateOrConnectWithoutAnnouncementInput = {
    where: CollaborationRequestWhereUniqueInput
    create: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput>
  }

  export type CollaborationRequestCreateManyAnnouncementInputEnvelope = {
    data: CollaborationRequestCreateManyAnnouncementInput | CollaborationRequestCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentAnnouncementsInput = {
    update: XOR<UserUpdateWithoutContentAnnouncementsInput, UserUncheckedUpdateWithoutContentAnnouncementsInput>
    create: XOR<UserCreateWithoutContentAnnouncementsInput, UserUncheckedCreateWithoutContentAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentAnnouncementsInput, UserUncheckedUpdateWithoutContentAnnouncementsInput>
  }

  export type UserUpdateWithoutContentAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollaborationRequestUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: CollaborationRequestWhereUniqueInput
    update: XOR<CollaborationRequestUpdateWithoutAnnouncementInput, CollaborationRequestUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<CollaborationRequestCreateWithoutAnnouncementInput, CollaborationRequestUncheckedCreateWithoutAnnouncementInput>
  }

  export type CollaborationRequestUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: CollaborationRequestWhereUniqueInput
    data: XOR<CollaborationRequestUpdateWithoutAnnouncementInput, CollaborationRequestUncheckedUpdateWithoutAnnouncementInput>
  }

  export type CollaborationRequestUpdateManyWithWhereWithoutAnnouncementInput = {
    where: CollaborationRequestScalarWhereInput
    data: XOR<CollaborationRequestUpdateManyMutationInput, CollaborationRequestUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type UserCreateWithoutSentCollabRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentCollabRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentCollabRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentCollabRequestsInput, UserUncheckedCreateWithoutSentCollabRequestsInput>
  }

  export type UserCreateWithoutReceivedCollabRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedCollabRequestsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedCollabRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedCollabRequestsInput, UserUncheckedCreateWithoutReceivedCollabRequestsInput>
  }

  export type AdCreateWithoutCollabRequestsInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutAdsInput
    adRequests?: AdRequestCreateNestedManyWithoutAdInput
  }

  export type AdUncheckedCreateWithoutCollabRequestsInput = {
    id?: string
    brandId: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutCollabRequestsInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutCollabRequestsInput, AdUncheckedCreateWithoutCollabRequestsInput>
  }

  export type ContentAnnouncementCreateWithoutCollaborationRequestsInput = {
    id?: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentAnnouncementsInput
  }

  export type ContentAnnouncementUncheckedCreateWithoutCollaborationRequestsInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAnnouncementCreateOrConnectWithoutCollaborationRequestsInput = {
    where: ContentAnnouncementWhereUniqueInput
    create: XOR<ContentAnnouncementCreateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedCreateWithoutCollaborationRequestsInput>
  }

  export type UserUpsertWithoutSentCollabRequestsInput = {
    update: XOR<UserUpdateWithoutSentCollabRequestsInput, UserUncheckedUpdateWithoutSentCollabRequestsInput>
    create: XOR<UserCreateWithoutSentCollabRequestsInput, UserUncheckedCreateWithoutSentCollabRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentCollabRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentCollabRequestsInput, UserUncheckedUpdateWithoutSentCollabRequestsInput>
  }

  export type UserUpdateWithoutSentCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedCollabRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedCollabRequestsInput, UserUncheckedUpdateWithoutReceivedCollabRequestsInput>
    create: XOR<UserCreateWithoutReceivedCollabRequestsInput, UserUncheckedCreateWithoutReceivedCollabRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedCollabRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedCollabRequestsInput, UserUncheckedUpdateWithoutReceivedCollabRequestsInput>
  }

  export type UserUpdateWithoutReceivedCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdUpsertWithoutCollabRequestsInput = {
    update: XOR<AdUpdateWithoutCollabRequestsInput, AdUncheckedUpdateWithoutCollabRequestsInput>
    create: XOR<AdCreateWithoutCollabRequestsInput, AdUncheckedCreateWithoutCollabRequestsInput>
    where?: AdWhereInput
  }

  export type AdUpdateToOneWithWhereWithoutCollabRequestsInput = {
    where?: AdWhereInput
    data: XOR<AdUpdateWithoutCollabRequestsInput, AdUncheckedUpdateWithoutCollabRequestsInput>
  }

  export type AdUpdateWithoutCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutAdsNestedInput
    adRequests?: AdRequestUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutCollabRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adRequests?: AdRequestUncheckedUpdateManyWithoutAdNestedInput
  }

  export type ContentAnnouncementUpsertWithoutCollaborationRequestsInput = {
    update: XOR<ContentAnnouncementUpdateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedUpdateWithoutCollaborationRequestsInput>
    create: XOR<ContentAnnouncementCreateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedCreateWithoutCollaborationRequestsInput>
    where?: ContentAnnouncementWhereInput
  }

  export type ContentAnnouncementUpdateToOneWithWhereWithoutCollaborationRequestsInput = {
    where?: ContentAnnouncementWhereInput
    data: XOR<ContentAnnouncementUpdateWithoutCollaborationRequestsInput, ContentAnnouncementUncheckedUpdateWithoutCollaborationRequestsInput>
  }

  export type ContentAnnouncementUpdateWithoutCollaborationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentAnnouncementsNestedInput
  }

  export type ContentAnnouncementUncheckedUpdateWithoutCollaborationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    payoutSettings?: PayoutSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    payoutSettings?: PayoutSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    payoutSettings?: PayoutSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    payoutSettings?: PayoutSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPayoutSettingsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    ads?: AdCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayoutSettingsInput = {
    id?: string
    email: string
    name: string
    type?: $Enums.UserType | null
    googleId?: string | null
    bio?: string | null
    location?: string | null
    website?: string | null
    avatar?: string | null
    niches?: UserCreatenichesInput | $Enums.Niche[]
    industry?: $Enums.Industry | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    ads?: AdUncheckedCreateNestedManyWithoutBrandInput
    adRequests?: AdRequestUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutToUserInput
    contentAnnouncements?: ContentAnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    sentCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutBrandInput
    receivedCollabRequests?: CollaborationRequestUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayoutSettingsInput, UserUncheckedCreateWithoutPayoutSettingsInput>
  }

  export type UserUpsertWithoutPayoutSettingsInput = {
    update: XOR<UserUpdateWithoutPayoutSettingsInput, UserUncheckedUpdateWithoutPayoutSettingsInput>
    create: XOR<UserCreateWithoutPayoutSettingsInput, UserUncheckedCreateWithoutPayoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayoutSettingsInput, UserUncheckedUpdateWithoutPayoutSettingsInput>
  }

  export type UserUpdateWithoutPayoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    ads?: AdUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    niches?: UserUpdatenichesInput | $Enums.Niche[]
    industry?: NullableEnumIndustryFieldUpdateOperationsInput | $Enums.Industry | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    ads?: AdUncheckedUpdateManyWithoutBrandNestedInput
    adRequests?: AdRequestUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutToUserNestedInput
    contentAnnouncements?: ContentAnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    sentCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutBrandNestedInput
    receivedCollabRequests?: CollaborationRequestUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelCreateManyUserInput = {
    id?: string
    platform: $Enums.Platform
    channelId: string
    channelName: string
    verified?: boolean
    subscribers?: number | null
    friendsCount?: number | null
    thumbnail?: string | null
    customUrl?: string | null
    description?: string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    lastRefreshedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdCreateManyBrandInput = {
    id?: string
    title: string
    description?: string | null
    targetNiches?: AdCreatetargetNichesInput | $Enums.Niche[]
    images?: AdCreateimagesInput | string[]
    videos?: AdCreatevideosInput | string[]
    videoDurations?: AdCreatevideoDurationsInput | number[]
    talkingPoints?: string | null
    guidelines?: string | null
    scriptRequired?: boolean
    status?: $Enums.AdStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestCreateManyCreatorInput = {
    id?: string
    adId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyFromUserInput = {
    id?: string
    toUserId: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateManyToUserInput = {
    id?: string
    fromUserId: string
    content: string
    createdAt?: Date | string
  }

  export type ContentAnnouncementCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    platforms?: ContentAnnouncementCreateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementCreatechannelIdsInput | string[]
    scheduledAt: Date | string
    thumbnail?: string | null
    maxSlots?: number
    filledSlots?: number
    status?: $Enums.AnnouncementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateManyBrandInput = {
    id?: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateManyCreatorInput = {
    id?: string
    brandId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type?: $Enums.NotificationType
    targetType?: $Enums.UserType | null
    read?: boolean
    createdAt?: Date | string
  }

  export type ChannelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    channelId?: StringFieldUpdateOperationsInput | string
    channelName?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribers?: NullableIntFieldUpdateOperationsInput | number | null
    friendsCount?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    customUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: NullableJsonNullValueInput | InputJsonValue
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRefreshedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adRequests?: AdRequestUpdateManyWithoutAdNestedInput
    collabRequests?: CollaborationRequestUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adRequests?: AdRequestUncheckedUpdateManyWithoutAdNestedInput
    collabRequests?: CollaborationRequestUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetNiches?: AdUpdatetargetNichesInput | $Enums.Niche[]
    images?: AdUpdateimagesInput | string[]
    videos?: AdUpdatevideosInput | string[]
    videoDurations?: AdUpdatevideoDurationsInput | number[]
    talkingPoints?: NullableStringFieldUpdateOperationsInput | string | null
    guidelines?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRequired?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAdStatusFieldUpdateOperationsInput | $Enums.AdStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: AdUpdateOneRequiredWithoutAdRequestsNestedInput
  }

  export type AdRequestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAnnouncementUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborationRequests?: CollaborationRequestUpdateManyWithoutAnnouncementNestedInput
  }

  export type ContentAnnouncementUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborationRequests?: CollaborationRequestUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type ContentAnnouncementUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: ContentAnnouncementUpdateplatformsInput | $Enums.Platform[]
    channelIds?: ContentAnnouncementUpdatechannelIdsInput | string[]
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutReceivedCollabRequestsNestedInput
    ad?: AdUpdateOneWithoutCollabRequestsNestedInput
    announcement?: ContentAnnouncementUpdateOneWithoutCollaborationRequestsNestedInput
  }

  export type CollaborationRequestUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutSentCollabRequestsNestedInput
    ad?: AdUpdateOneWithoutCollabRequestsNestedInput
    announcement?: ContentAnnouncementUpdateOneWithoutCollaborationRequestsNestedInput
  }

  export type CollaborationRequestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    targetType?: NullableEnumUserTypeFieldUpdateOperationsInput | $Enums.UserType | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestCreateManyAdInput = {
    id?: string
    creatorId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestCreateManyAdInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    announcementId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdRequestUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutAdRequestsNestedInput
  }

  export type AdRequestUncheckedUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdRequestUncheckedUpdateManyWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutSentCollabRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutReceivedCollabRequestsNestedInput
    announcement?: ContentAnnouncementUpdateOneWithoutCollaborationRequestsNestedInput
  }

  export type CollaborationRequestUncheckedUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    announcementId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestCreateManyAnnouncementInput = {
    id?: string
    brandId: string
    creatorId: string
    channels: JsonNullValueInput | InputJsonValue
    totalPrice: number
    message?: string | null
    status?: $Enums.CollaborationStatus
    isLongTermDeal?: boolean
    videoCount?: number | null
    videosPosted?: number
    adId?: string | null
    paymentReference?: string | null
    viewedByCreator?: boolean
    viewedByBrand?: boolean
    materialsDownloaded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationRequestUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutSentCollabRequestsNestedInput
    creator?: UserUpdateOneRequiredWithoutReceivedCollabRequestsNestedInput
    ad?: AdUpdateOneWithoutCollabRequestsNestedInput
  }

  export type CollaborationRequestUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationRequestUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    channels?: JsonNullValueInput | InputJsonValue
    totalPrice?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus
    isLongTermDeal?: BoolFieldUpdateOperationsInput | boolean
    videoCount?: NullableIntFieldUpdateOperationsInput | number | null
    videosPosted?: IntFieldUpdateOperationsInput | number
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    viewedByCreator?: BoolFieldUpdateOperationsInput | boolean
    viewedByBrand?: BoolFieldUpdateOperationsInput | boolean
    materialsDownloaded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}