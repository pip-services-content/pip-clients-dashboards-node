"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
class DashboardsNullClientV1 {
    getDashboards(correlationId, filter, paging, callback) {
        callback(null, new pip_services_commons_node_1.DataPage([], 0));
    }
    getDashboard(correlationId, userId, app, kind, callback) {
        callback(null, null);
    }
    setDashboard(correlationId, dashboard, callback) {
        if (callback)
            callback(null, dashboard);
    }
    deleteDashboards(correlationId, filter, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.DashboardsNullClientV1 = DashboardsNullClientV1;
//# sourceMappingURL=DashboardsNullClientV1.js.map