import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { AppDataSource } from "./config";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/CountryResolver";

const start = async() => {
 await AppDataSource.initialize();

 const schema = await buildSchema({
    resolvers: [CountryResolver],
});

    const server = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    });

    console.log(`🚀 Serv ready ${url}`);
}

start().catch(console.error);
