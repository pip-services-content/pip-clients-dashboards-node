"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class DashboardsHttpClientV1 extends pip_services_net_node_1.CommandableHttpClient {
    constructor(config) {
        super('dashboards');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getDashboards(correlationId, filter, paging, callback) {
        this.callCommand('get_dashboards', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getDashboard(correlationId, userId, app, kind, callback) {
        this.callCommand('get_dashboard', correlationId, {
            user_id: userId,
            app: app,
            kind: kind
        }, callback);
    }
    setDashboard(correlationId, dashboard, callback) {
        this.callCommand('set_dashboard', correlationId, {
            dashboard: dashboard,
        }, callback);
    }
    deleteDashboards(correlationId, filter, callback) {
        let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
        this.callCommand('delete_dashboards', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.DashboardsHttpClientV1 = DashboardsHttpClientV1;
//# sourceMappingURL=DashboardsHttpClientV1.js.map