function addressMaker(address) {
 let {city, state} = address;
 const newAddress = {
  city,
  state,
  region: "Asia"
 }
 console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.region}`);
}

addressMaker({city: "Dhaka", state: "Bangladesh"});