// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

// Code your solution here

// !! ================= findMatching ================= !!

function findMatching(drivers, query) {
    return drivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
    );
}

// !! ================= fuzzyMatch ================= !!

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
        driver.slice(0, query.length).toLowerCase() === query.toLowerCase()
    );
}

// !! ================= matchName ================= !!

function matchName(drivers, query) {
    return drivers.filter(driver =>
        driver.name.toLowerCase() === query.toLowerCase()
    );
}


