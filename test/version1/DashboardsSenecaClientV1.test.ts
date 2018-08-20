let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { DashboardsMemoryPersistence } from 'pip-services-dashboards-node';
import { DashboardsController } from 'pip-services-dashboards-node';
import { DashboardsSenecaServiceV1 } from 'pip-services-dashboards-node';
import { IDashboardsClientV1 } from '../../src/version1/IDashboardsClientV1';
import { DashboardsSenecaClientV1 } from '../../src/version1/DashboardsSenecaClientV1';
import { DashboardsClientFixtureV1 } from './DashboardsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('DashboardsSenecaClient', () => {
    let service: DashboardsSenecaServiceV1;
    let client: DashboardsSenecaClientV1;
    let fixture: DashboardsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new DashboardsMemoryPersistence();
        let controller = new DashboardsController();

        service = new DashboardsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-dashboards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-dashboards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-dashboards', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new DashboardsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new DashboardsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
