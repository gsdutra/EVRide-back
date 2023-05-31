import * as listingController from '@/controllers/listing-controller'
import { validateListing } from '@/middlewares/validate-listing'

import { Router } from 'express'

const listingRouter = Router()

listingRouter
	.get('/:id', listingController.getListingById)
	.get('/brands', listingController.getBrands)
	.get('/brands/:brandId/models', listingController.getModelsByBrand)
	.post('/', validateListing, listingController.createListing)
	.put('/', validateListing, listingController.updateListing)

export { listingRouter }