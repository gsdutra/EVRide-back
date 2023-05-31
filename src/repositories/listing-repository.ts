import prisma from '@/config/database';
import {Fuel, Category, Listing} from '@prisma/client';
import { SearchListing } from '@/types';

export async function getListingById(id: number) {
	return prisma.listing.findUnique({
		where: {
			id
		}
	});
}

export async function getListings(listing: SearchListing) {
	let where: any = {};
	if (listing.sellerId) where.sellerId = listing.sellerId
	if (listing.brandId) where.brandId = listing.brandId
	if (listing.modelId) where.modelId = listing.modelId
	if (listing.acceptsTrade) where.acceptsTrade = listing.acceptsTrade
	if (listing.fuel) where.fuel = listing.fuel as Fuel
	if (listing.category) where.category = listing.category as Category
	if (listing.plateEnding) where.plateEnding = listing.plateEnding
	if (listing.maxYear) where.year = { lte: listing.maxYear }
	if (listing.minYear) where.year = { gte: listing.minYear }
	if (listing.maxPrice) where.price = { lte: listing.maxPrice }
	if (listing.minPrice) where.price = { gte: listing.minPrice }
	if (listing.maxMileage) where.mileage = { lte: listing.maxMileage }
	if (listing.minMileage) where.mileage = { gte: listing.minMileage }
	if (listing.state) where.state = listing.state
	if (listing.city) where.city = listing.city

	return prisma.listing.findMany({ where });
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