/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    { type: "store", data: { store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023 } },
    { type: "store", data: { store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984 } },
    { type: "store", data: { store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757 } },
    { type: "customer", data: { customer_id: 26, store_id: 297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null } },
    { type: "customer", data: { customer_id: 59, store_id: 193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null } },
    { type: "customer", data: { customer_id: 29, store_id: 614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null } },
    { type: "customer", data: { customer_id: 63, store_id: 297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null } },
    { type: "customer", data: { customer_id: 71, store_id: 614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null } },
    { type: "customer", data: { customer_id: 24, store_id: 614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null } },
    { type: "customer", data: { customer_id: 36, store_id: 193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null } },
    { type: "customer", data: { customer_id: 73, store_id: 297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null } },
    { type: "address", data: { address_id: 1023, address: "2895 Yonge St.", city: "Toronto", province: "ON", postal_code: "L4C02G" } },
    { type: "address", data: { address_id: 1984, address: "3611 Main St. West", city: "Hamilton", province: "ON", postal_code: "R5O8H5" } },
    { type: "address", data: { address_id: 1757, address: "1177 Ontario St. Unit 8", city: "Mississauga", province: "ON", postal_code: "L9H6B3" } },
    { type: "address", data: { address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9" } },
    { type: "address", data: { address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3" } },
    { type: "address", data: { address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2" } },
    { type: "address", data: { address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4" } },
    { type: "address", data: { address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P" } },
    { type: "address", data: { address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7" } },
];




/*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
    when you're ready.  Your code is required to run against these tests before you submit */


var CustomerDB = {

    customers: [],

    addresses: [],

    stores: [],

    // main method that takes all sample data and inserts it into correct arrays
    insertData: function (allData) {

        var i;

        for (i = 0; i < allData.length; i++) {

            // checks if data type is "store"; if true, data is stored into "stores" array
            if (allData[i].type == "store") {
                this.addStore(allData[i].data);
            }

            // checks if data type is "customer"; if true, data is stored into "customers" array
            if (allData[i].type == "customer") {
                this.addCustomer(allData[i].data);
            }

            // checks if data type is "address"; if true, data is stored into "address" array
            if (allData[i].type == "address") {
                this.addAddress(allData[i].data);
            }

        }

    },

    addCustomer: function (customerObj) {

        // sets add_date to the current date
        customerObj.add_date = new Date();

        // adds customer to "customers" array
        this.customers.push(customerObj);
    },


    // outputs all customer data based on customer_id
    outputCustomerById: function (customer_id) {

        var i;

        for (i = 0; i < this.customers.length; i++) {

            if (customer_id == this.customers[i].customer_id) {

                // assigns customer id, first name, last name, and email to variable customer
                var customer = "Customer " + this.customers[i].customer_id + ": " + this.customers[i].first_name + " " + this.customers[i].last_name + " (" + this.customers[i].email + ")\n";

                // retrieves home address data by calling the method getAddressById() and passing in address id; assigns address data to variable address
                var address = "Home Address: " + this.getAddressById(this.customers[i].address_id) + "\n";

                // assigns date that customer joined to variable joinDate
                var joinDate = "Joined: " + this.customers[i].add_date + "\n";

                return customer + address + joinDate;

            }

        }

    },

    // outputs all customer data
    outputAllCustomers: function () {

        console.log("All Customers\n\n");

        var i;

        for (i = 0; i < this.customers.length; i++) {

            // calls the method outputCustomerById() and passes in customer_id to print all customer data
            console.log(this.outputCustomerById(this.customers[i].customer_id) + "\n");
        }

    },

    // outputs all customer data based on store_id
    outputCustomersByStore: function (store_id) {

        console.log("Customers in Store: " + this.getStoreById(store_id) + "\n\n");

        var i;

        // searches through "customers" array and looks for a match on store id
        for (i = 0; i < this.customers.length; i++) {

            if (store_id == this.customers[i].store_id) {

                // calls the method outputCustomerById() and passes in customer_id to output all customer data
                console.log(this.outputCustomerById(this.customers[i].customer_id) + "\n");

            }

        }
    },

    // searches through "customers" array and looks for a match on customer id; then removes the customer by customer id
    removeCustomerById: function (customer_id) {

        var i;

        for (i = 0; i < this.customers.length; i++) {

            if (customer_id == this.customers[i].customer_id) {

                // stores matched address_id to variable address_id for later removal
                var address_id = this.customers[i].address_id;

                this.customers.splice(i, 1);

                // removes address by calling the method removeAddressById() and passing in address_id that was matched
                this.removeAddressById(address_id);

            }

        }

    },

    // adds object of type "address" to the "addresses" array
    addAddress: function (addressObj) {

        this.addresses.push(addressObj);

    },

    // outputs address based on address id
    getAddressById: function (address_id) {

        var i;

        // searches "addresses" array for a match on address id; then outputs address data based on address id
        for (i = 0; i < this.addresses.length; i++) {

            if (address_id == this.addresses[i].address_id) {

                return this.addresses[i].address + " " + this.addresses[i].city + ", " + this.addresses[i].province + ". " + this.addresses[i].postal_code;

            }
        }
    },

    // outputs all addresses
    outputAllAddresses: function () {

        console.log("All Addresses\n\n");

        var i;

        for (i = 0; i < this.addresses.length; i++) {

            // retrieves all address data by calling getAddressById() method and passing in address_id
            console.log("Address " + this.addresses[i].address_id + ": " + this.getAddressById(this.addresses[i].address_id) + "\n\n");

        }

    },

    removeAddressById: function (address_id) {

		// used as a counter for when there is a match on whether or not address_id is referenced
        var isReferenced = 0;

        var i;

        // searches "customers" array to check if address_id is referenced by any "customer" objects
        for (i = 0; i < this.customers.length; i++) {

            if (address_id == this.customers[i].address_id) {
                isReferenced++;
            }

        }

        // searches "customers" array to check if address_id is referenced by any "store" objects
        for (i = 0; i < this.stores.length; i++) {

            if (address_id == this.stores[i].address_id) {
                isReferenced++;
            }

        }

        // checks if address_id has been referenced in "customer" or "store" objects
        // if isReferenced is less than 0 then address_id has not been referenced, and the address at index i is removed
        if (isReferenced < 1) {

            var i;

            for (i = 0; i < this.addresses.length; i++) {

                if(address_id == this.addresses[i].address_id) {

                    this.addresses.splice(i, 1);

                }

            }

        }

    },

    // adds object of type "store" and adds it to the "stores" array
    addStore: function (storeObj) {

        this.stores.push(storeObj);

    },

    // searches through "stores" array to check for a match on store id; returns store object if there is a match
    getStoreById: function (store_id) {

        var i;

        for (i = 0; i < this.stores.length; i++) {

            if (store_id == this.stores[i].store_id) {

                return this.stores[i].name;

            }

        }

    },

    // outputs all stores
    outputAllStores: function () {

        console.log("All Stores\n\n");

        var i;

        for (i = 0; i < this.stores.length; i++) {

            console.log("Store " + this.stores[i].store_id + ": " + this.stores[i].name + "\n");

            // retrieves address data by calling the method getAddressById() and passing address_id
            console.log("Location: " + this.getAddressById(this.stores[i].address_id) + "\n\n");

        }

    },

};


/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n");

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n");

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n");

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n");

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n");
