import express from 'express';
import { createLink, getLinks, updateLink, deleteLink } from '../controllers/link.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/', protectRoute, createLink);
router.get('/', protectRoute, getLinks);
router.put('/:id', protectRoute, updateLink);
router.delete('/:id', protectRoute, deleteLink);

export default router;
