"use server";
import { NextRequest } from "next/server";
import { doGET, doPOST, getRequestBody } from "@/app/_utils/service";
import { eq, and } from "drizzle-orm";
import { gameCard, cardCategoryMapping, category } from "@/db/schema";


export async function GET(req: NextRequest, { params }: { params: Promise<{ pg_num: string }>}) {
  const {pg_num} = await params;
  return await doGET(async (_db) => {
    const result = await _db.select({
      id: gameCard.id,
      cardId: gameCard.id,
      name: gameCard.name,
      description: gameCard.description,
      img: gameCard.img,
      price: gameCard.price,
      inventory: gameCard.inventory
    })
      .from(gameCard)
      .leftJoin(cardCategoryMapping, eq(gameCard.id, cardCategoryMapping.cardId))
      .leftJoin(category, eq(cardCategoryMapping.categoryId, category.id))
      .where(eq(gameCard.mark, 1))
      .orderBy(gameCard.id)
      .limit(8)
      .offset(Number(pg_num));
    return result;
  });
}