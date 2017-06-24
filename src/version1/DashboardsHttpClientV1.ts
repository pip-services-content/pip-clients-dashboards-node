import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';

export class DashboardsHttpClientV1 extends CommandableHttpClient implements IDashboardsClientV1 {

    constructor(config?: any) {
        super('dashboards');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<DashboardV1>) => void): void {
        this.callCommand(
            'get_dashboards',
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getDashboard(correlationId: string, userId: string, app: string, kind: string,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        this.callCommand(
            'get_dashboard',
            correlationId,
            {
                user_id: userId,
                app: app,
                kind: kind
            }, 
            callback
        );
    }

    public setDashboard(correlationId: string, dashboard: DashboardV1,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        this.callCommand(
            'set_dashboard',
            correlationId,
            {
                dashboard: dashboard,
            }, 
            callback
        );
    }

    public deleteDashboards(correlationId: string, filter: FilterParams,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
        this.callCommand(
            'delete_dashboards',
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }

}
