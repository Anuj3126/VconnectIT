import { Router } from 'express';
import { getHostelByIndex } from '../controllers/hostel-controllers.js';
const hostelRoutes = Router();
// Route to get hostel data by index
hostelRoutes.get('/', getHostelByIndex);
export default hostelRoutes;
//# sourceMappingURL=hostel-routes.js.map