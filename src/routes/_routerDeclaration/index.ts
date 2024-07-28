import express from "express";

const composeRouter = (function (router: express.IRouter) {
  const appRouter = router;
  return (function () {
    return appRouter;
  })();
})(express.Router());

export default composeRouter;
