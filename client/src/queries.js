import { client } from './index';
import gql from 'graphql-tag';

export default class Queries {
    static getRulesByMeasurement() {
        client
        .query({
            query: gql`
            {
                allMeasurementTypes {
                edges {
                    node {
                    id
                    name
                    rulesByMeasurementTypeId {
                        nodes {
                        description
                        alertLevel
                        id
                        maxValue
                        }
                    }
                    }
                }
                }
            }
            `
        })
        .then(result => console.log(result));
    }
}