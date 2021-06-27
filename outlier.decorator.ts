export function OutlierReporter(options: { outlier: string }) {
  return (
    target: Object,
    property: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    const actutualMethod: Function = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
      if (args.includes(options.outlier)) {
        setTimeout(() => {
          console.log('Reported outlier ==> ' + args);
        }, 1000);
        return;
      }
      const result = actutualMethod.apply(this, args);
      return result;
    };
  };
}
