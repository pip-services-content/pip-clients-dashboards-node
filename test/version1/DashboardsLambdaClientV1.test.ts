import { YamlConfigReader } from 'pip-services-commons-node';
import { DashboardsClientFixtureV1 } from './DashboardsClientFixtureV1';
import { DashboardsLambdaClientV1 } from '../../src/version1/DashboardsLambdaClientV1';

suite('DashboardsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: DashboardsLambdaClientV1;
    let fixture: DashboardsClientFixtureV1;

    setup((done) => {
        client = new DashboardsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new DashboardsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});