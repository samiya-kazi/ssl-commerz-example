const { Router } = require('express');
const { initializePayment, successfulPayment, failedPayment, cancelledPayment } = require('./controllers/payment.controller');
const router = Router();

router.post('/payment/init', initializePayment);
router.post('/payment/success', successfulPayment);
router.post('/payment/fail', failedPayment);
router.post('/payment/cancel', cancelledPayment);

module.exports = router;