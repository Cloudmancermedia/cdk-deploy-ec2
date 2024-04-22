import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Instance, InstanceClass, InstanceSize, InstanceType, MachineImage, Vpc } from 'aws-cdk-lib/aws-ec2';

export class CdkDeployEc2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const vpc = Vpc.fromLookup(
      this,
      "MyDeffaultVpc",
      {
        isDefault: true
      }
    )

    const instance = new Instance(
      this,
      "MyEc2Instance",
      {
        vpc: vpc,
        machineImage: MachineImage.latestAmazonLinux2023(),
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      }
    )
  }
}
