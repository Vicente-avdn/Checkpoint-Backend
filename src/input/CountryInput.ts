import { Field, InputType } from "type-graphql";

@InputType()
export class AddCountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  continent: string;
}