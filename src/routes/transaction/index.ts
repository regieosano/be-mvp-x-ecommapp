import mT from "@src/messages/constants/transaction";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { getSalesData } from "@src/services/controllers/transactions/sales/actions/queries";

export const getTransactionData = getRouteFactory(
  mT.transaction_url,
  mT.no_transactions,
  getSalesData,
);
