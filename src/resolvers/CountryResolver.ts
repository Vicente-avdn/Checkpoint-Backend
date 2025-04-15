import { Country } from "../entities/Country";
import { AddCountryInput } from "../input/Countryinput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver(Country)
export class CountryResolver {

  @Query(() => [Country])
  async getAllCountries() {
    return await Country.find(); 
  }

  @Query(() => Country) 
  async getCountry(@Arg("code") code: string) {
    return await Country.findOne({ where: { code } });
  }

  @Query(() => [Country])
  async getCountriesByContinent(@Arg("continent") continent: string) {
    return await Country.find({ where: { continent} }); 
  }

  @Mutation(() => Country)
  async addCountry(@Arg("data") data: AddCountryInput){
    const country = Country.create(data as Country); 
    await country.save();  
    return country;  
  }
}
