import { PrismaClient } from "@/generated/prisma"; 

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
