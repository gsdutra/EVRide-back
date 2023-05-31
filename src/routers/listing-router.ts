import * as listingController from '@/controllers/listing-controller'
import { validateListing } from '@/middlewares/validate-listing'
import { validateToken } from '@/middlewares/validate-jwt-token'

import { Router } from 'express'

const listingRouter = Router()

listingRouter
	.get('/:id', listingController.getListingById)
	.get('/brands', listingController.getBrands)
	.get('/brands/:brandId/models', listingController.getModelsByBrand)
	.post('/', validateToken, validateListing, listingController.createListing)
	.put('/', validateToken, validateListing, listingController.updateListing)

export { listingRouter }