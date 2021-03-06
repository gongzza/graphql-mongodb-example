import 'reflect-metadata'
import { ObjectId } from 'mongodb'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchemaSync } from 'type-graphql'
import { ObjectIdScalar } from './scalars'

require('dotenv').config()

const schema = buildSchemaSync({
  resolvers: [
    __dirname + '/resolvers/**/*.{ts,js}'
  ],
  scalarsMap: [
    { type: ObjectId, scalar: ObjectIdScalar }
  ],
  validate: false
})

export const app = express()

export const server = new ApolloServer({ schema })

server.applyMiddleware({ app })
