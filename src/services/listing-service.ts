import * as listingRepository from '@/repositories/listing-repository';
import { Listing } from '@prisma/client'

export async function getListings(id: number) {
	//return listingRepository.getListings(); //TO-DO
}

export async function getListingById(id: number) {
	const listing = await listingRepository.getListingById(id);
	if (!listing) throw { status: 404, message: 'Listing not found' };
	return listing;
}

export async function getBrands() {
	return listingRepository.getBrands();
}

export async function getModelsByBrand(brandId: number) {
	return listingRepository.getModelsByBrand(brandId);
}

export async function createListing(listing: Omit<Listing, 'id' | 'createdAt' | 'updatedAt'>) {
	return listingRepository.createListing(listing);
}

export async function updateListing(listing: Omit<Listing, 'createdAt' | 'updatedAt'>) {
	return listingRepository.updateListing(listing);
}