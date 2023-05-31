import prisma from '@/config/database';
import {Fuel, Category, Listing} from '@prisma/client';
import { MakeOptional } from '@/types';

export async function getListingById(id: number) {
	return prisma.listing.findUnique({
		where: {
			id
		}
	});
}

export async function getListings(listing: MakeOptional<Listing>) {
	return prisma.listing.findMany({
		where: {
		}
	});
}

export async function getBrands() {
	return prisma.brand.findMany();
}

export async function getModelsByBrand(brandId: number) {
	return prisma.model.findMany({
		where: {
			brandId
		}
	});
}

export async function createListing(listing: Omit<Listing, 'id' | 'createdAt' | 'updatedAt'>) {
	return prisma.listing.create({
		data: {
			...listing
		}
	});
}

export async function updateListing(listing: Omit<Listing, 'createdAt' | 'updatedAt'>) {
	return prisma.listing.update({
		where: {
			id: listing.id
		},
		data: {
			...listing
		}
	});
}