import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';
export declare class DashboardsHttpClientV1 extends CommandableHttpClient implements IDashboardsClientV1 {
    constructor(config?: any);
    getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DashboardV1>) => void): void;
    getDashboard(correlationId: string, userId: string, app: string, kind: string, callback: (err: any, dashboard: DashboardV1) => void): void;
    setDashboard(correlationId: string, dashboard: DashboardV1, callback: (err: any, dashboard: DashboardV1) => void): void;
    deleteDashboards(correlationId: string, filter: FilterParams, callback: (err: any, dashboard: DashboardV1) => void): void;
}
