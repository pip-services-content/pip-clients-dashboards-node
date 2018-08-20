let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { DashboardsMemoryPersistence } from 'pip-services-dashboards-node';
import { DashboardsController } from 'pip-services-dashboards-node';
import { IDashboardsClientV1 } from '../../src/version1/IDashboardsClientV1';
import { DashboardsDirectClientV1 } from '../../src/version1/DashboardsDirectClientV1';
import { DashboardsClientFixtureV1 } from './DashboardsClientFixtureV1';

suite('DashboardsDirectClientV1', ()=> {
    let client: DashboardsDirectClientV1;
    let fixture: DashboardsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DashboardsMemoryPersistence();
        let controller = new DashboardsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-dashboards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-dashboards', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new DashboardsDirectClientV1();
        client.setReferences(references);

        fixture = new DashboardsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
