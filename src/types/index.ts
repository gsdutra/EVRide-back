import {Listing} from '@prisma/client';

export type MakeOptional<T> = {
	[K in keyof T]?: T[K];
};