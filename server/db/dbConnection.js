import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const prisma = global.prisma ?? prismaClientSingleton()

export default prisma;

global.prisma = prisma