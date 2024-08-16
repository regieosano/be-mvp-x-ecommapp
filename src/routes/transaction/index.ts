import { getRouteFactory } from "@src/routes/_routesFactory/get";
import constantMessageValue from "@src/constants/stringnummisc";
import { getSalesData } from "@src/services/controllers/transactions/sales/actions/queries";

export const getTransactionData = getRouteFactory(
  constantMessageValue.transaction_url,
  constantMessageValue.no_transactions,
  getSalesData,
);
