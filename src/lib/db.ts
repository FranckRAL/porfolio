import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'


const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma



// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

// const prismaClientSingleton = () => {
//   return new PrismaClient({
//   adapter,
// })
// }

// declare global {
//   var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
// }

// const db = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default db

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prismaGlobal = db
// }

