'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    Addresses should be in a separate table because a business may have many addresses in different locations, including
    in different states and countries

    */
      return queryInterface.bulkInsert('Businesses', [
        {
          name: "Rainbow Skateland",
          primaryPhoto: "",
          address: "",
          city: "Lockport",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lasertron",
          primaryPhoto: "",
          address: "",
          city: "Amherst",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nortown Center",
          primaryPhoto: "",
          address: "",
          city: "Amherst",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ronas",
          primaryPhoto: "",
          address: "",
          city: "",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Master Chong's Tae Kwan Do",
          primaryPhoto: "",
          address: "",
          city: "East Amherst",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Queen City Fine Arts",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "UB Language Learning Lab",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Buffalo Public Schools Adult Education Center",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "New York",
          country: "United States",
          zipcode: 14225,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Six Flags: Darien Lake",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Great Pumpkin Farm",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Niagara County Produce",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Salon Professional Academy",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Frightworld",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Antique World & Flea Market",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Holiday Valley Resort",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Grand Island Fun Center",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Recording Connection",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Niagara Riding Stables",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Letchworth State Park",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pierce-Arrow Museum",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Buffalo AKG Art Museum",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Buffalo Museum of Science",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Buffalo Zoo",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Delaware Park",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Maid of the Mist",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Monaco's Violin Shop",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Northtown Music",
          primaryPhoto: "",
          address: "",
          city: "Buffalo",
          stateProvince: "",
          country: "",
          zipcode: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
