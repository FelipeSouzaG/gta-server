import express from 'express';
import Auth from '../middlewares/auth.js';
import { GenericValidator } from '../middlewares/validator.js';
import NumberGenerator from '../middlewares/numberValidation.js';
import RequestController from '../controllers/RequestController.js';

const router = express.Router();

router.post(
  '/register',
  Auth.authenticate,
  GenericValidator.validate(['phone']),
  NumberGenerator.generateRequestNumber,
  RequestController.registerRequest
);

router.get(
  '/client',
  Auth.authenticate,
  Auth.authorizeClient,
  RequestController.getClientRequests
);

router.get(
  '/all',
  Auth.authenticate,
  Auth.authorizeSecretario,
  RequestController.getAllRequests
);

router.put(
  '/update/:requestId',
  Auth.authenticate,
  Auth.authorizeTecnico,
  RequestController.updateRequest
);

router.get(
  '/Address/:addressId',
  Auth.authenticate,
  Auth.authorizeClient,
  RequestController.getAddressRequests
);

router.get(
  '/env/:envId',
  Auth.authenticate,
  Auth.authorizeClient,
  RequestController.getAddressEnvironmentId
);

export default router;
