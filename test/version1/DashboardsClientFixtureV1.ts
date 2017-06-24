let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';

import { IDashboardsClientV1 } from '../../src/version1/IDashboardsClientV1';
import { TileGroupV1 } from '../../src/version1/TileGroupV1';
import { DashboardV1 } from '../../src/version1/DashboardV1';

let DASHBOARD = <DashboardV1>{
    user_id: '1',
    app: 'Test App 1',
    groups: []
};

export class DashboardsClientFixtureV1 {
    private _client: IDashboardsClientV1;
    
    constructor(client: IDashboardsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let dashboard1: DashboardV1;

        async.series([
        // Create one dashboard
            (callback) => {
                this._client.getDashboard(
                    null, DASHBOARD.user_id, DASHBOARD.app, null,
                    (err, dashboard) => {
                        assert.isNull(err);
                        
                        assert.isObject(dashboard);
                        assert.equal(dashboard.user_id, DASHBOARD.user_id);
                        assert.equal(dashboard.app, DASHBOARD.app);

                        dashboard1 = dashboard;

                        callback();
                    }
                );
            },
        // Set the dashboard
            (callback) => {
                dashboard1.groups = [<TileGroupV1>{ index: 0, tiles: [] }];

                this._client.setDashboard(
                    null, dashboard1,
                    (err, dashboard) => {
                        assert.isNull(err);
                        
                        assert.isObject(dashboard);
                        assert.equal(dashboard.app, DASHBOARD.app);
                        assert.lengthOf(dashboard.groups, 1);

                        dashboard1 = dashboard;

                        callback();
                    }
                );
            },
        // Delete dashboard
            (callback) => {
                this._client.deleteDashboards(
                    null, 
                    FilterParams.fromTuples(
                        'user_id', DASHBOARD.user_id,
                        'app', DASHBOARD.app
                    ),
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    }
}
