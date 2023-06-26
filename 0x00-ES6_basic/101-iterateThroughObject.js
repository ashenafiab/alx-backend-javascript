export default function iterateThroughObject(reportWithIterator) {
    let result = reportWithIterator.next();
    let employeeString = '';
    while (!result.done) {
      const employees = result.value[1];
      employeeString += employees.join(' | ') + ' | ';
      result = reportWithIterator.next();
    }
    // Remove the trailing ' | ' from the employee string
    employeeString = employeeString.slice(0, -3);
    return employeeString;
  }
  