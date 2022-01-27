// The Database needs to be and object holding multiple arrays of data
    // parkArea array with objects that include...
        // id, name, area
    //park activites array with... 
        //activity id, name of activity, guest id, park area id
    //serviceOptions array with a list of all services offerd at the different areas
        //will include id, name of service, areaId, service id
    //a service array will include objects with all services and their ids

//I will create a copy with .map() of each array

const database = {
    guests: [
        {id: 1, name: "Ketty Dokins", parkAreaID: 3}, 
        {id: 2, name: "Laniey Lou", parkAreaID: 3},
        {id: 3, name: "Virgil Logsdon", parkAreaID: 1},
        {id: 4, name: "Desi Dawg Dawkins", parkAreaID: 2},
        {id: 5, name: "Sam Smith", parkAreaID: 5},
        {id: 7, name: "Bleep Bloop", parkAreaID: 5},
        {id: 7, name: "Erin Bradley", parkAreaID: 4},
        {id: 8, name: "Jimmy Lentz", parkAreaID: 6},
        {id: 9, name: "Cleghorn Johnson", parkAreaID: 6},
        {id: 10, name: "Jackie Donovan", parkAreaID: 2}
    ], 
    parkAreas: [
        {id:1, areaName:"Chamfort River", location: "Northeast"},
        {id:2, areaName:"Lost Wolf Hiking Trail", location: "Northern"},
        {id:3, areaName:"Lodge", location: "Northwest"},
        {id:4, areaName:"Grander River", location: "Southwest"},
        {id:5, areaName:"Campgrounds", location: "Southern"},
        {id:6, areaName:"Pine Bluffs Trails", location: "Southeast"}
    ],
    servicesOptions: [
        {id:1, typeOfService: "Rafting", areaId: 1, serviceId: 1},
        {id:2, typeOfService: "Canoeing", areaId: 1, serviceId: 2},
        {id:3, typeOfService: "Fishing", areaId: 1, serviceId: 3},

        {id:4, typeOfService: "Hiking", areaId: 2, serviceId: 4},
        {id:5, typeOfService: "Picnicking", areaId: 2, serviceId: 5},
        {id:6, typeOfService: "Rock Climbing", areaId: 2, serviceId: 6},

        {id:7, typeOfService: "Fishing", areaId: 4, serviceId: 3},
        {id:8, typeOfService: "Hiking", areaId: 4, serviceId: 4},

        {id:9, typeOfService: "Hiking", areaId: 6, serviceId: 4},
        {id:10, typeOfService: "Food Vendors", areaId: 6, serviceId: 10},
        {id:11, typeOfService: "Picnicking", areaId: 6, serviceId: 5},
        {id:12, typeOfService: "Zip Lines", areaId: 6, serviceId: 11},

        {id:13, typeOfService: "Lodging", areaId: 3, serviceId: 7},
        {id:14, typeOfService: "Parking", areaId: 3, serviceId: 8},
        {id:15, typeOfService: "Information", areaId: 3, serviceId: 9},
        {id:16, typeOfService: "Picnicking", areaId: 3, serviceId: 5},

        {id:17, typeOfService: "Information", areaId: 5, serviceId: 9},
        {id:18, typeOfService: "Lodging", areaId: 5, serviceId: 7},
        {id:19, typeOfService: "Parking", areaId: 5, serviceId: 8},
    ],
    services: [
        {id:1, name: "Rafting"},
        {id:2, name: "Canoeing"},
        {id:3, name: "Fishing"},
        {id:4, name: "Hiking"},
        {id:5, name: "Picnicking"},
        {id:6, name: "Rock Climbing"},
        {id:7, name: "Lodging"},
        {id:8, name: "Parking"},
        {id:9, name: "Information"},
        {id:10, name: "Food Vendors"},
        {id:11, name: "Zip Lines"}

    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getparkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getservicesOptions = () => {
    return database.servicesOptions.map(servicesOption => ({...servicesOption}))
}

export const getservices = () => {
    return database.services.map(service => ({...service}))
}