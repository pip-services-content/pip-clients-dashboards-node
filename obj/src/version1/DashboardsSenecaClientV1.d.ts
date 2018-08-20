import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-seneca-node';
import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';
export declare class DashboardsSenecaClientV1 extends CommandableSenecaClient implements IDashboardsClientV1 {
    constructor(config?: any);
    getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DashboardV1>) => void): void;
    getDashboard(correlationId: string, userId: string, app: string, kind: string, callback: (err: any, dashboard: DashboardV1) => void): void;
    setDashboard(correlationId: string, dashboard: DashboardV1, callback: (err: any, dashboard: DashboardV1) => void): void;
    deleteDashboards(correlationId: string, filter: FilterParams, callback: (err: any, dashboard: DashboardV1) => void): void;
}
