import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';

export class DashboardsNullClientV1 implements IDashboardsClientV1 {
            
    public getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<DashboardV1>) => void): void {
        callback(null, new DataPage<DashboardV1>([], 0));
    }

    public getDashboard(correlationId: string, userId: string, app: string, kind: string,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        callback(null, null);
    }

    public setDashboard(correlationId: string, dashboard: DashboardV1,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        if (callback) callback(null, dashboard);
    }

    public deleteDashboards(correlationId: string, filter: FilterParams,
        callback: (err: any, dashboard: DashboardV1) => void): void {
        if (callback) callback(null, null);
    }

}