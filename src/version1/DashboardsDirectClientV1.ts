import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-rpc-node';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';
//import { IDashboardsController } from 'pip-services-dashboards-node';

export class DashboardsDirectClientV1 extends DirectClient<any> implements IDashboardsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-dashboards", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<DashboardV1>) => void): void {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboards');
        this._controller.getDashboards(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getDashboard(correlationId: string, userId: string, app: string, kind: string,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboard');
        this._controller.getDashboard(correlationId, userId, app, kind, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }

    public setDashboard(correlationId: string, dashboard: DashboardV1,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        let timing = this.instrument(correlationId, 'dashboards.set_dashboard');
        this._controller.setDashboard(correlationId, dashboard, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }

    public deleteDashboards(correlationId: string, filter: FilterParams,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
        this._controller.deleteDashboards(correlationId, filter, (err, dashboard) => {
            timing.endTiming();
            callback(err, dashboard);
        });
    }

}