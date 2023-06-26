export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
    const departments = Object.values(report.allEmployees);
    
    return {
      next() {
        const department = departments[currentDepartmentIndex];
        const employees = department ? department[currentEmployeeIndex] : undefined;
        const done = !department || currentEmployeeIndex >= department.length;
  
        if (!done) {
          currentEmployeeIndex++;
          if (currentEmployeeIndex >= department.length) {
            currentDepartmentIndex++;
            currentEmployeeIndex = 0;
          }
        }
  
        return { value: employees, done: done };
      }
    };
  }
  