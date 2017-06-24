"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
//import { IDashboardsController } from 'pip-services-dashboards-node';
class DashboardsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-dashboards", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getDashboards(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboards');
        this._controller.getDashboards(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getDashboard(correlationId, userId, app, kind, callback) {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboard');
        this._controller.getDashboard(correlationId, userId, app, kind, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }
    setDashboard(correlationId, dashboard, callback) {
        let timing = this.instrument(correlationId, 'dashboards.set_dashboard');
        this._controller.setDashboard(correlationId, dashboard, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }
    deleteDashboards(correlationId, filter, callback) {
        let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
        this._controller.deleteDashboards(correlationId, filter, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }
}
exports.DashboardsDirectClientV1 = DashboardsDirectClientV1;
//# sourceMappingURL=DashboardsDirectClientV1.js.map