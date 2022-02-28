import DatabaseConnectionAdapter from "./shared/infra/database/DatabaseConnectionAdapter";
import EventBus from "./shared/infra/event/EventBus";
import ExpressAdapter from "./shared/infra/http/ExpressAdapter";
import Router from "./shared/infra/http/Router";

const http = new ExpressAdapter();
const eventBus = new EventBus();

const router = new Router(http, new DatabaseConnectionAdapter(), eventBus);

http.listen(3000);