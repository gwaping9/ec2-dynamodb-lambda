var db_params = {
    TableName: "RetailDatabase",
    Item: {
        pk: "jim.bob@somewhere.com", // Partition Key
        sk: "metadata",                 // Sort Key
        name: "Jim Bob",
        first_name: "Jim",
        last_name: "Roberts",
        address: {
            road: "456 Nowhere Lane",
            city: "Langely",
            state: "WA",
            pcode: "98260",
            country: "USA",
        },
        username: "jrob",
    }
};

var ec2_params = {
    InstanceCount: 'NUMBER_VALUE', /* required */
    InstancePlatform: Linux/UNIX | Red Hat Enterprise Linux | SUSE Linux | Windows | Windows with SQL Server | Windows with SQL Server Enterprise | Windows with SQL Server Standard | Windows with SQL Server Web | Linux with SQL Server Standard | Linux with SQL Server Web | Linux with SQL Server Enterprise | RHEL with SQL Server Standard | RHEL with SQL Server Enterprise | RHEL with SQL Server Web | RHEL with HA | RHEL with HA and SQL Server Standard | RHEL with HA and SQL Server Enterprise, /* required */
    InstanceType: 'STRING_VALUE', /* required */
    AvailabilityZone: 'STRING_VALUE',
    AvailabilityZoneId: 'STRING_VALUE',
    ClientToken: 'STRING_VALUE',
    DryRun: true || false,
    EbsOptimized: true || false,
    EndDate: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
    EndDateType: unlimited | limited,
    EphemeralStorage: true || false,
    InstanceMatchCriteria: open | targeted,
    OutpostArn: 'STRING_VALUE',
    PlacementGroupArn: 'STRING_VALUE',
    TagSpecifications: [
      {
        ResourceType: capacity-reservation | client-vpn-endpoint | customer-gateway | carrier-gateway | coip-pool | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-ip | elastic-gpu | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-virtual-interface | local-gateway-virtual-interface-group | local-gateway-route-table-vpc-association | local-gateway-route-table-virtual-interface-group-association | natgateway | network-acl | network-interface | network-insights-analysis | network-insights-path | network-insights-access-scope | network-insights-access-scope-analysis | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | volume | vpc | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-peering-connection | vpn-connection | vpn-gateway | vpc-flow-log | capacity-reservation-fleet | traffic-mirror-filter-rule | vpc-endpoint-connection-device-type | verified-access-instance | verified-access-group | verified-access-endpoint | verified-access-policy | verified-access-trust-provider | vpn-connection-device-type | vpc-block-public-access-exclusion | ipam-resource-discovery | ipam-resource-discovery-association,
        Tags: [
          {
            Key: 'STRING_VALUE',
            Value: 'STRING_VALUE'
          },
          /* more items */
        ]
      },
      /* more items */
    ],
    Tenancy: default | dedicated
  };