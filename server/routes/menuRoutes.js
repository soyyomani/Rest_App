// server/routes/menuRoutes.js
const express = require('express');
const { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getMenuItems);
router.post('/', authenticateToken, authorizeRole(['staff']), createMenuItem);
router.put('/:id', authenticateToken, authorizeRole(['staff']), updateMenuItem);
router.delete('/:id', authenticateToken, authorizeRole(['staff']), deleteMenuItem);

module.exports = router;
