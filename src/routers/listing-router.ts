import * as listingController from '@/controllers/listing-controller'
import { validateListing } from '@/middlewares/validate-listing'
import { validateToken } from '@/middlewares/validate-jwt-token'

import { Router } from 'express'

const listingRouter = Router()

listingRouter
	.get('/get/:id', listingController.getListingById)
	.get('/brands', listingController.getBrands)
	.get('/models/:brandId', listingController.getModelsByBrand)
	.post('/brands', validateToken, listingController.addBrand)
	.post('/models', validateToken, listingController.addModel)
	.post('/', validateToken, validateListing, listingController.createListing)
	.put('/', validateToken, validateListing, listingController.updateListing)

export { listingRouter }