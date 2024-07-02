// server/routes/orderRoutes.js
const express = require('express');
const { getOrders, createOrder, updateOrderStatus } = require('../controllers/orderController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, authorizeRole(['staff']), getOrders);
router.post('/', authenticateToken, authorizeRole(['customer']), createOrder);
router.put('/:id', authenticateToken, authorizeRole(['staff']), updateOrderStatus);

module.exports = router;
